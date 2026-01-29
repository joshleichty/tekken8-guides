#!/usr/bin/env node

/**
 * Script to check which Okizeme video URLs resolve correctly for all character guides
 * Run with: node scripts/check-videos.js [character1] [character2] ...
 * Example: node scripts/check-videos.js victor bryan law
 * Run without arguments to check all characters
 * 
 * Add --exclude=character to skip a character (e.g., --exclude=hwoarang)
 */

import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CHARACTERS_DIR = path.join(__dirname, '../src/characters');

/**
 * Encodes a move command for Okizeme CDN URLs
 * - Replaces `:` with `colon` (e.g., df:2 -> dfcolon2)
 * - URL encodes special characters like `,` and `+`
 */
function encodeCommand(command) {
  return command
    .replace(/:/g, 'colon')  // Replace : with 'colon'
    .split('')
    .map(char => {
      if (char === ',') return '%2C'
      if (char === '+') return '%2B'
      if (char === ' ') return '%20'
      return char
    })
    .join('')
}

/**
 * Generate the Okizeme CDN URL for a move
 */
function getVideoUrl(character, command) {
  return `https://okizeme.b-cdn.net/${character.toLowerCase()}/${encodeCommand(command)}.mp4`;
}

/**
 * Check if a URL exists (returns status code)
 */
function checkUrl(url) {
  return new Promise((resolve) => {
    const protocol = url.startsWith('https') ? https : http;
    
    const req = protocol.request(url, { method: 'HEAD' }, (res) => {
      resolve({
        url,
        status: res.statusCode,
        ok: res.statusCode >= 200 && res.statusCode < 400
      });
    });
    
    req.on('error', (err) => {
      resolve({
        url,
        status: 0,
        ok: false,
        error: err.message
      });
    });
    
    req.setTimeout(10000, () => {
      req.destroy();
      resolve({
        url,
        status: 0,
        ok: false,
        error: 'timeout'
      });
    });
    
    req.end();
  });
}

/**
 * Parse a chapter file to extract moves with showVideo enabled
 */
function extractMovesFromChapter(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const moves = [];
  
  // Match MoveCard components with showVideo prop
  // Pattern 1: <MoveCard ... showVideo ... />
  // Pattern 2: <MoveCard ... showVideo>...</MoveCard>
  
  // Find all MoveCard components that have showVideo (not showVideo={false})
  const moveCardRegex = /<MoveCard[\s\S]*?(?:\/>|<\/MoveCard>)/g;
  const matches = content.matchAll(moveCardRegex);
  
  for (const match of matches) {
    const moveCardContent = match[0];
    
    // Check if showVideo is present and not explicitly false
    const hasShowVideo = /showVideo(?!\s*=\s*\{?\s*false)/.test(moveCardContent);
    if (!hasShowVideo) continue;
    
    // Extract videoId if specified (takes priority)
    const videoIdMatch = moveCardContent.match(/videoId=["']([^"']+)["']/);
    const videoIdArrayMatch = moveCardContent.match(/videoId=\{?\[([^\]]+)\]?\}/);
    
    // Extract input from move object or direct prop
    const inputMatch = moveCardContent.match(/input:\s*['"]([^'"]+)['"]/);
    const directInputMatch = moveCardContent.match(/input=["']([^"']+)["']/);
    
    if (videoIdMatch) {
      moves.push(videoIdMatch[1]);
    } else if (videoIdArrayMatch) {
      // Parse array of videoIds
      const ids = videoIdArrayMatch[1].split(',').map(s => s.trim().replace(/['"]/g, ''));
      moves.push(...ids);
    } else if (inputMatch) {
      moves.push(inputMatch[1]);
    } else if (directInputMatch) {
      moves.push(directInputMatch[1]);
    }
  }
  
  return moves;
}

/**
 * Get all character directories
 */
function getCharacters() {
  return fs.readdirSync(CHARACTERS_DIR)
    .filter(dir => {
      const fullPath = path.join(CHARACTERS_DIR, dir);
      return fs.statSync(fullPath).isDirectory() && 
             fs.existsSync(path.join(fullPath, 'chapters'));
    });
}

/**
 * Get all moves for a character by scanning their chapters
 */
function getCharacterMoves(character) {
  const chaptersDir = path.join(CHARACTERS_DIR, character, 'chapters');
  if (!fs.existsSync(chaptersDir)) {
    return [];
  }
  
  const allMoves = [];
  const chapterFiles = fs.readdirSync(chaptersDir)
    .filter(file => file.endsWith('.tsx') && file.startsWith('Chapter'));
  
  for (const file of chapterFiles) {
    const filePath = path.join(chaptersDir, file);
    const moves = extractMovesFromChapter(filePath);
    allMoves.push(...moves);
  }
  
  // Remove duplicates
  return [...new Set(allMoves)];
}

async function checkCharacter(character, moves) {
  console.log(`\n${'='.repeat(60)}`);
  console.log(`Checking ${character.toUpperCase()} (${moves.length} moves with videos)`);
  console.log('='.repeat(60) + '\n');
  
  if (moves.length === 0) {
    console.log('  No moves with showVideo found in chapters.');
    return { character, results: [], resolved: [], failed: [] };
  }
  
  const results = [];
  
  for (const move of moves) {
    const url = getVideoUrl(character, move);
    process.stdout.write(`  Checking: ${move.padEnd(20)} ... `);
    
    const result = await checkUrl(url);
    result.move = move;
    result.character = character;
    results.push(result);
    
    if (result.ok) {
      console.log(`✓ OK (${result.status})`);
    } else {
      console.log(`✗ FAILED (${result.status || result.error})`);
    }
  }
  
  const resolved = results.filter(r => r.ok);
  const failed = results.filter(r => !r.ok);
  
  return { character, results, resolved, failed };
}

async function main() {
  const args = process.argv.slice(2);
  
  // Parse --exclude flags
  const excludeFlags = args.filter(a => a.startsWith('--exclude='));
  const excluded = excludeFlags.map(f => f.replace('--exclude=', '').toLowerCase());
  
  // Get character arguments (non-flag arguments)
  const charArgs = args.filter(a => !a.startsWith('--'));
  
  // Get all available characters
  let allCharacters = getCharacters();
  
  // Filter characters based on arguments
  let charactersToCheck;
  if (charArgs.length > 0) {
    charactersToCheck = charArgs.filter(c => allCharacters.includes(c.toLowerCase()));
  } else {
    charactersToCheck = allCharacters;
  }
  
  // Apply exclusions
  charactersToCheck = charactersToCheck.filter(c => !excluded.includes(c.toLowerCase()));
  
  console.log('╔════════════════════════════════════════════════════════════╗');
  console.log('║     Okizeme Video URL Checker for Character Guides         ║');
  console.log('╚════════════════════════════════════════════════════════════╝');
  console.log(`\nCharacters to check: ${charactersToCheck.join(', ')}`);
  if (excluded.length > 0) {
    console.log(`Excluded: ${excluded.join(', ')}`);
  }
  
  const allResults = [];
  
  for (const character of charactersToCheck) {
    const moves = getCharacterMoves(character);
    const result = await checkCharacter(character, moves);
    allResults.push(result);
  }
  
  // Overall summary
  console.log('\n' + '═'.repeat(60));
  console.log('OVERALL SUMMARY');
  console.log('═'.repeat(60));
  
  let totalMoves = 0;
  let totalResolved = 0;
  let totalFailed = 0;
  
  for (const { character, results, resolved, failed } of allResults) {
    totalMoves += results.length;
    totalResolved += resolved.length;
    totalFailed += failed.length;
    
    const status = failed.length === 0 ? '✓' : '✗';
    console.log(`  ${status} ${character.padEnd(15)} ${resolved.length}/${results.length} videos OK`);
  }
  
  console.log('-'.repeat(60));
  console.log(`  TOTAL: ${totalResolved}/${totalMoves} videos resolved`);
  
  // Detailed failures
  const allFailed = allResults.flatMap(r => r.failed);
  if (allFailed.length > 0) {
    console.log('\n' + '═'.repeat(60));
    console.log('FAILED VIDEOS (need attention)');
    console.log('═'.repeat(60));
    
    for (const { character, failed } of allResults) {
      if (failed.length === 0) continue;
      
      console.log(`\n  ${character.toUpperCase()}:`);
      for (const r of failed) {
        console.log(`    • ${r.move}`);
        console.log(`      URL: ${r.url}`);
        console.log(`      Status: ${r.status || r.error}`);
      }
    }
  }
  
  // Exit with error code if any failed
  process.exit(totalFailed > 0 ? 1 : 0);
}

main().catch(console.error);
