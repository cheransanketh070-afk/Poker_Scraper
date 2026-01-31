
import { scrapeBravo } from './scrapers/bravo.js';
import { scrapeAtlas } from './scrapers/pokeratlas.js';
import { writeCSV } from './output/csv.js';

(async () => {
  const bravoData = await scrapeBravo();
  const atlasData = await scrapeAtlas(bravoData);
  const merged = bravoData.map(v => ({ ...v, ...atlasData[v.name] }));
  await writeCSV(merged);
  console.log('CSV generated at output/venues.csv');
})();
