import LRU from 'lru-cache'
const cache = new LRU<string, {ts:number,count:number}>({ max: 5000 });
export function rateLimit(key: string, limit = 20, windowMs = 60_000){
  const now = Date.now();
  const rec = cache.get(key) || { ts: now, count: 0 };
  if (now - rec.ts > windowMs){ rec.ts = now; rec.count = 0 }
  rec.count++;
  cache.set(key, rec);
  return rec.count <= limit;
}
