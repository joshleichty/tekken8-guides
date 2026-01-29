#!/usr/bin/env node

/**
 * Script to check which Okizeme video URLs resolve correctly
 * Run with: node scripts/check-videos.js
 */

import https from 'https';
import http from 'http';

// All move inputs from Jin's MoveCards with showVideo enabled
const jinMoves = [
  // Chapter 2 - First Buttons
  '1',
  '1,2',
  '2,1',
  'df+1',
  
  // Chapter 3 - Core Mids & Lows
  'f+4',
  'df+3',
  'd+4',
  'db+4',
  
  // Chapter 4 - Jab String Extensions
  '1,2,3',
  '1,2,4',
  '1,2,1',
  '2,1,4',
  '2,1,4~4',
  '2,4',
  
  // Chapter 6 - The Electric
  'f,n,d,df+2',   // WGF
  'f,n,d,df:2',   // EWHF
  'f,n,d,df+1',   // CD1
  
  // Chapter 7 - ZEN Stance
  'ZEN.3+4',
  'ZEN.4',
  'ZEN.1,2',
  'ZEN.u+1',
  'ZEN.2',
  'ZEN.1+2',
  
  // Chapter 11 - Defense & Parry
  'b+1+3',           // Parry (videoId override for "b+1+3 or b+2+4")
  'b+1+2',
  'uf+4',
  // 'ZEN.u+1',  // duplicate from Chapter 7
  'uf+2',
  '4~3',
  'd+1',
  // 'ZEN.2',    // duplicate from Chapter 7
];

// Remove duplicates
const uniqueMoves = [...new Set(jinMoves)];

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

async function main() {
  console.log('Checking Jin video URLs from Okizeme CDN...\n');
  console.log(`Total unique moves: ${uniqueMoves.length}\n`);
  
  const results = [];
  
  for (const move of uniqueMoves) {
    const url = getVideoUrl('jin', move);
    process.stdout.write(`Checking: ${move.padEnd(20)} ... `);
    
    const result = await checkUrl(url);
    result.move = move;
    results.push(result);
    
    if (result.ok) {
      console.log(`✓ OK (${result.status})`);
    } else {
      console.log(`✗ FAILED (${result.status || result.error})`);
    }
  }
  
  // Summary
  const resolved = results.filter(r => r.ok);
  const failed = results.filter(r => !r.ok);
  
  console.log('\n' + '='.repeat(60));
  console.log('SUMMARY');
  console.log('='.repeat(60));
  console.log(`Total moves checked: ${results.length}`);
  console.log(`Resolved: ${resolved.length}`);
  console.log(`Failed: ${failed.length}`);
  
  if (failed.length > 0) {
    console.log('\n' + '-'.repeat(60));
    console.log('FAILED VIDEOS (need attention):');
    console.log('-'.repeat(60));
    failed.forEach(r => {
      console.log(`  ${r.move}`);
      console.log(`    URL: ${r.url}`);
      console.log(`    Status: ${r.status || r.error}`);
    });
  }
  
  if (resolved.length > 0) {
    console.log('\n' + '-'.repeat(60));
    console.log('RESOLVED VIDEOS:');
    console.log('-'.repeat(60));
    resolved.forEach(r => {
      console.log(`  ✓ ${r.move}`);
    });
  }
  
  // Exit with error code if any failed
  process.exit(failed.length > 0 ? 1 : 0);
}

main().catch(console.error);
