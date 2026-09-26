const C='grammarquest-v11';
const A=['index.html','rv2-core.js','manifest.json','favicon.svg','icon-192.png','icon-512.png','icon-maskable-512.png','icon.svg',
 'sprites/player_knight.png','sprites/player_sage.png','sprites/player_rogue.png','sprites/player_barbarian.png',
 'sprites/mon_slime.png','sprites/mon_ghost.png','sprites/mon_mimic.png','sprites/mon_skull.png',
 'sprites/mon_traveler.png','sprites/mon_boss.png','sprites/deco_chest_closed.png','sprites/deco_chest_open.png',
 'sprites/deco_torch.png','sprites/item_herb.png','sprites/item_water.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>c.addAll(A).catch(()=>{})))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x)))))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
self.addEventListener('message',e=>{if(e.data==='SKIP_WAITING'||e.data==='skipWaiting'||(e.data&&e.data.type==='SKIP_WAITING'))self.skipWaiting()});
