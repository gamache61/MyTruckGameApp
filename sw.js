// UPDATED: Version v2.0 to force the jump from 2D to 3D graphics
const CACHE_NAME = 'remi-truck-3d-v2.0';
const ASSETS = [
  './',
  './index.html',
  './manifest.json'
];

// Install the new 3D assets
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// FIXED: This part clears out the old 2D game files automatically
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});