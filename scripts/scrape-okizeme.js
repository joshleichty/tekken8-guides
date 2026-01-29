#!/usr/bin/env node

/**
 * Scrape valid video URLs from Okizeme.gg database
 * Run with: node scripts/scrape-okizeme.js <character>
 * Example: node scripts/scrape-okizeme.js clive
 * 
 * Requires: npm install puppeteer
 */

import puppeteer from 'puppeteer';

async function scrapeOkizeme(character) {
  console.log(`\nScraping Okizeme database for: ${character}\n`);
  
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  const url = `https://okizeme.gg/database/${character}?movesPerPage=200`;
  console.log(`Loading: ${url}\n`);
  
  await page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });
  
  // Wait for content to load
  await page.waitForSelector('video, [data-move]', { timeout: 10000 }).catch(() => {
    console.log('No video elements found directly, checking for move data...');
  });
  
  // Extract video sources from the page
  const videoUrls = await page.evaluate(() => {
    const urls = new Set();
    
    // Method 1: Find all video elements
    document.querySelectorAll('video source').forEach(source => {
      if (source.src && source.src.includes('.mp4')) {
        urls.add(source.src);
      }
    });
    
    // Method 2: Find video elements directly
    document.querySelectorAll('video').forEach(video => {
      if (video.src && video.src.includes('.mp4')) {
        urls.add(video.src);
      }
    });
    
    // Method 3: Check for data attributes that might contain video URLs
    document.querySelectorAll('[data-video], [data-src]').forEach(el => {
      const videoUrl = el.dataset.video || el.dataset.src;
      if (videoUrl && videoUrl.includes('.mp4')) {
        urls.add(videoUrl);
      }
    });
    
    return Array.from(urls);
  });
  
  // Also intercept network requests to find video URLs
  const networkVideos = [];
  
  // Navigate again with request interception
  await page.setRequestInterception(true);
  page.on('request', request => {
    const url = request.url();
    if (url.includes('.mp4') || url.includes('okizeme')) {
      networkVideos.push(url);
    }
    request.continue();
  });
  
  // Scroll through the page to trigger lazy loading
  await page.evaluate(async () => {
    await new Promise(resolve => {
      let totalHeight = 0;
      const distance = 500;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;
        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          resolve();
        }
      }, 200);
    });
  });
  
  // Wait a bit for any lazy-loaded content
  await new Promise(r => setTimeout(r, 3000));
  
  // Get final video URLs
  const finalUrls = await page.evaluate(() => {
    const urls = new Set();
    
    document.querySelectorAll('video source, video').forEach(el => {
      const src = el.src || el.querySelector('source')?.src;
      if (src && src.includes('.mp4')) {
        urls.add(src);
      }
    });
    
    return Array.from(urls);
  });
  
  await browser.close();
  
  const allUrls = [...new Set([...videoUrls, ...finalUrls, ...networkVideos.filter(u => u.includes('.mp4'))])];
  
  console.log(`Found ${allUrls.length} video URLs:\n`);
  
  // Extract move names from URLs
  const moves = allUrls.map(url => {
    const match = url.match(/\/([^/]+)\.mp4$/);
    return {
      url,
      move: match ? decodeURIComponent(match[1]) : 'unknown'
    };
  });
  
  moves.sort((a, b) => a.move.localeCompare(b.move));
  
  moves.forEach(({ move, url }) => {
    console.log(`  ${move}`);
    console.log(`    ${url}\n`);
  });
  
  // Output as JSON for easy use
  const outputPath = `./data/okizeme-videos/${character}.json`;
  const fs = await import('fs');
  const path = await import('path');
  
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, JSON.stringify(moves, null, 2));
  console.log(`\nSaved to: ${outputPath}`);
  
  return moves;
}

// Main
const character = process.argv[2];

if (!character) {
  console.error('Usage: node scripts/scrape-okizeme.js <character>');
  console.error('Example: node scripts/scrape-okizeme.js clive');
  process.exit(1);
}

scrapeOkizeme(character).catch(err => {
  console.error('Error:', err.message);
  process.exit(1);
});
