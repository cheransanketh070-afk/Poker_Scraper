
# Poker Data Scraper (Local, GitHub-Ready)

## What it does
- Runs locally
- Uses Playwright to collect live data from Bravo Poker Live + Poker Atlas (authenticated)
- Normalizes fields
- Outputs CSV

## Requirements
- Node.js 18+
- Playwright

## Setup
```bash
npm install
npx playwright install
```
1. Login once to each site using Playwright Codegen and save storage state to `auth/*.json`
2. Run:
```bash
node index.js
```
CSV will be written to `output/venues.csv`
