#!/usr/bin/env node

/**
 * Download Applay's Tekken 8 Library spreadsheets as CSV files
 * 
 * Usage: 
 *   node scripts/download-sheets.js              # Download all sheets
 *   node scripts/download-sheets.js Jin          # Download only Jin
 *   node scripts/download-sheets.js Jin Kazuya   # Download multiple
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Base spreadsheet ID
const SPREADSHEET_ID = '2PACX-1vTsgbCJNSTKajMNlJvQleJOl0eTiEcV-PbeU0obDg1lsSqmz0lTtcD2k6NzfTPt7Db9Ua2dz1o_34Sv';

// Correct GIDs from Applay's Tekken 8 Library
const SHEETS = {
  'INFO': 867994933,
  'Alisa': 1419847996,
  'Anna': 300402052,
  'Armor King': 1255979928,
  'Asuka': 1070483520,
  'Azucena': 369640386,
  'Bryan': 1575327614,
  'Claudio': 2066867905,
  'Clive': 1635195170,
  'Devil Jin': 1285910743,
  'Dragunov': 1782505865,
  'Eddy': 773892732,
  'Fahkumram': 861365955,
  'Feng': 1999913945,
  'Heihachi': 304689825,
  'Hwoarang': 2063376992,
  'Jack 8': 1837655975,
  'Jin': 1608972874,
  'Jun': 581366255,
  'Kazuya': 373336732,
  'King': 888951708,
  'Kuma': 1300144693,
  'Lars': 704056810,
  'Law': 2052536430,
  'Lee': 909199485,
  'Leo': 1978796608,
  'Leroy': 1311246375,
  'Lidia': 1468789295,
  'Lili': 230377724,
  'Miary Zo': 1211853943,
  'Nina': 89269959,
  'Panda': 1253883386,
  'Paul': 1982556343,
  'Raven': 1970071769,
  'Reina': 646015324,
  'Shaheen': 1288773701,
  'Steve': 822375764,
  'Victor': 653376276,
  'Xiaoyu': 835262040,
  'Yoshimitsu': 455982320,
  'Zafina': 219886330,
};

// Output directory
const OUTPUT_DIR = path.join(__dirname, '..', 'data', 'applay-sheets');

async function downloadSheet(name, gid) {
  const url = `https://docs.google.com/spreadsheets/d/e/${SPREADSHEET_ID}/pub?gid=${gid}&single=true&output=csv`;
  
  console.log(`Downloading: ${name}...`);
  
  const response = await fetch(url, {
    redirect: 'follow',
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
    }
  });
  
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }
  
  const data = await response.text();
  
  const filename = `${name.toLowerCase().replace(/\s+/g, '-')}.csv`;
  const filepath = path.join(OUTPUT_DIR, filename);
  
  fs.writeFileSync(filepath, data, 'utf8');
  console.log(`  ✓ Saved: ${filename} (${data.length} bytes)`);
  
  return { name, filepath, size: data.length };
}

async function main() {
  const args = process.argv.slice(2);
  
  // Help
  if (args.includes('--help')) {
    console.log(`
Usage: node download-sheets.js [character...]

Examples:
  node download-sheets.js              # Download all sheets
  node download-sheets.js Jin          # Download only Jin
  node download-sheets.js Jin Kazuya   # Download Jin and Kazuya

Available characters:
${Object.keys(SHEETS).join(', ')}
`);
    process.exit(0);
  }
  
  // Create output directory
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  
  // Filter sheets if specific characters requested
  let sheetsToDownload = { ...SHEETS };
  
  if (args.length > 0) {
    sheetsToDownload = {};
    args.forEach(arg => {
      const key = Object.keys(SHEETS).find(k => k.toLowerCase() === arg.toLowerCase());
      if (key) {
        sheetsToDownload[key] = SHEETS[key];
      } else {
        console.warn(`Warning: Unknown character "${arg}". Available: ${Object.keys(SHEETS).join(', ')}`);
      }
    });
  }
  
  if (Object.keys(sheetsToDownload).length === 0) {
    console.error('No sheets to download.');
    process.exit(1);
  }
  
  console.log(`Downloading ${Object.keys(sheetsToDownload).length} sheets from Applay's Tekken 8 Library...\n`);
  
  const results = [];
  const errors = [];
  
  // Download sheets sequentially
  for (const [name, gid] of Object.entries(sheetsToDownload)) {
    try {
      const result = await downloadSheet(name, gid);
      results.push(result);
      await new Promise(r => setTimeout(r, 300));
    } catch (error) {
      console.error(`  ✗ Error: ${error.message}`);
      errors.push({ name, error: error.message });
    }
  }
  
  console.log('\n--- Summary ---');
  console.log(`Downloaded: ${results.length} sheets`);
  console.log(`Errors: ${errors.length}`);
  console.log(`Output: ${OUTPUT_DIR}`);
}

main().catch(console.error);
