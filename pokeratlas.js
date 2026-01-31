
export async function scrapeAtlas(venues) {
  const data = {};
  venues.forEach(v => {
    data[v.name] = {
      tables: null,
      games: null,
      promotions: null
    };
  });
  return data;
}
