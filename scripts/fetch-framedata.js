#!/usr/bin/env node

/**
 * Fetch frame data from TekkenDocs for any character
 *
 * Usage:
 *   node scripts/fetch-framedata.js <character>        # Print to stdout as JSON
 *   node scripts/fetch-framedata.js <character> --save  # Save to data/framedata/<character>.json
 *   node scripts/fetch-framedata.js --list              # List available characters
 *
 * Examples:
 *   node scripts/fetch-framedata.js jin
 *   node scripts/fetch-framedata.js dragunov --save
 *   node scripts/fetch-framedata.js devil-jin
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// TekkenDocs URL slugs for characters
const CHARACTER_SLUGS = {
  alisa: "alisa",
  anna: "anna",
  "armor-king": "armor-king",
  asuka: "asuka",
  azucena: "azucena",
  bryan: "bryan",
  claudio: "claudio",
  clive: "clive",
  "devil-jin": "devil-jin",
  dragunov: "dragunov",
  eddy: "eddy",
  fahkumram: "fahkumram",
  feng: "feng",
  heihachi: "heihachi",
  hwoarang: "hwoarang",
  "jack-8": "jack-8",
  jin: "jin",
  jun: "jun",
  kazuya: "kazuya",
  king: "king",
  kuma: "kuma",
  lars: "lars",
  law: "law",
  lee: "lee",
  leo: "leo",
  leroy: "leroy",
  lidia: "lidia",
  lili: "lili",
  nina: "nina",
  panda: "panda",
  paul: "paul",
  raven: "raven",
  reina: "reina",
  shaheen: "shaheen",
  steve: "steve",
  victor: "victor",
  xiaoyu: "xiaoyu",
  yoshimitsu: "yoshimitsu",
  zafina: "zafina",
};

/**
 * Parse TekkenDocs' React Router turbo-stream format.
 *
 * The page embeds data as a flat array inside a streamController.enqueue() call.
 * For objects, each entry `_N: M` means key = data[N], value = data[M].
 * Arrays hold indices that each resolve to their target values.
 * Strings and numbers are literal leaf values.
 */
function parseTurboStream(data) {
  const cache = new Map();

  function resolve(index) {
    if (cache.has(index)) return cache.get(index);

    const val = data[index];
    if (val === undefined || val === null) return val;
    if (typeof val === "string" || typeof val === "number") return val;

    // Placeholder to handle circular refs
    let result;

    if (Array.isArray(val)) {
      result = [];
      cache.set(index, result);
      for (const ref of val) {
        result.push(resolve(ref));
      }
    } else if (typeof val === "object") {
      result = {};
      cache.set(index, result);
      for (const [rawKey, valueRef] of Object.entries(val)) {
        const keyIndex = parseInt(rawKey.replace(/^_/, ""), 10);
        const keyName = data[keyIndex];
        // Negative refs are sentinel values (e.g. -5 for undefined)
        if (typeof valueRef === "number" && valueRef < 0) {
          result[keyName] = null;
          continue;
        }
        result[keyName] = resolve(valueRef);
      }
    } else {
      result = val;
    }

    cache.set(index, result);
    return result;
  }

  return resolve(0);
}

/**
 * Extract frame data rows from the resolved turbo-stream object.
 * Maps each row against the headers to produce clean objects.
 */
function extractMoves(resolved) {
  const loaderData = resolved?.loaderData;
  if (!loaderData) throw new Error("Could not find loaderData in page data");

  // The character route data is under a dynamic key
  const routeData =
    loaderData["routes/_mainLayout.t8_.$character"] ||
    Object.values(loaderData).find((v) => v?.tables);
  if (!routeData?.tables)
    throw new Error("Could not find tables in route data");

  const tables = routeData.tables;
  const allMoves = [];

  // tables is an array (usually one table for normal moves)
  const tableList = Array.isArray(tables) ? tables : [tables];

  for (const table of tableList) {
    const headers = table.headers;
    const rows = table.rows;
    if (!headers || !rows) continue;

    for (const row of rows) {
      const move = {};
      for (let i = 0; i < headers.length && i < row.length; i++) {
        const key = headers[i];
        move[key] = row[i] ?? "";
      }
      allMoves.push(move);
    }
  }

  return {
    character: routeData.characterName,
    game: routeData.game,
    editUrl: routeData.editUrl,
    moveCount: allMoves.length,
    moves: allMoves,
  };
}

async function fetchFrameData(characterSlug) {
  const url = `https://tekkendocs.com/t8/${characterSlug}`;
  console.error(`Fetching: ${url}`);

  const res = await fetch(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${url}`);
  }

  const html = await res.text();

  // Extract the turbo-stream data from the streamController.enqueue call.
  // The data is a JS string literal containing JSON — we extract the raw
  // escaped content and use JSON.parse('"..."') to properly unescape it.
  const marker = 'streamController.enqueue("';
  const start = html.indexOf(marker);
  if (start === -1) {
    throw new Error(
      "Could not find streamController.enqueue data in page HTML"
    );
  }

  const contentStart = start + marker.length;
  let pos = contentStart;
  while (pos < html.length) {
    if (html[pos] === "\\" && pos + 1 < html.length) {
      pos += 2; // skip escaped character
      continue;
    }
    if (html[pos] === '"') break;
    pos++;
  }
  const raw = html.slice(contentStart, pos);

  // Unescape the JS string literal, then parse the resulting JSON
  const jsonStr = JSON.parse('"' + raw + '"');
  const data = JSON.parse(jsonStr);

  const resolved = parseTurboStream(data);
  return extractMoves(resolved);
}

// --- Main ---

const args = process.argv.slice(2);

if (args.includes("--help") || args.length === 0) {
  console.log(`
Usage: node scripts/fetch-framedata.js <character> [--save]

Fetch frame data from TekkenDocs for any Tekken 8 character.

Options:
  --save   Save output to data/framedata/<character>.json
  --list   List available character slugs

Examples:
  node scripts/fetch-framedata.js jin
  node scripts/fetch-framedata.js dragunov --save
  node scripts/fetch-framedata.js devil-jin
`);
  process.exit(0);
}

if (args.includes("--list")) {
  console.log("Available characters:");
  Object.keys(CHARACTER_SLUGS)
    .sort()
    .forEach((c) => console.log(`  ${c}`));
  process.exit(0);
}

const characterArg = args.find((a) => !a.startsWith("--"));
const shouldSave = args.includes("--save");

if (!characterArg) {
  console.error("Error: No character specified");
  process.exit(1);
}

const slug =
  CHARACTER_SLUGS[characterArg.toLowerCase()] || characterArg.toLowerCase();

try {
  const result = await fetchFrameData(slug);

  const output = JSON.stringify(result, null, 2);

  if (shouldSave) {
    const outDir = path.join(__dirname, "..", "data", "framedata");
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }
    const outPath = path.join(outDir, `${slug}.json`);
    fs.writeFileSync(outPath, output, "utf8");
    console.error(`Saved to: ${outPath}`);
    console.error(
      `${result.moveCount} moves for ${result.character} (${result.game})`
    );
  } else {
    console.log(output);
  }
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
