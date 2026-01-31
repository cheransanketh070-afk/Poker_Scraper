
import fs from 'fs';
import { createObjectCsvWriter } from 'csv-writer';

export async function writeCSV(rows) {
  fs.mkdirSync('output', { recursive: true });
  const csvWriter = createObjectCsvWriter({
    path: 'output/venues.csv',
    header: Object.keys(rows[0] || {}).map(k => ({ id: k, title: k }))
  });
  await csvWriter.writeRecords(rows);
}
