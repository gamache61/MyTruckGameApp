const CACHE_NAME = 'remi-semi-v1';
// UPDATED: Added level2.html to the cache list
const assetsToCache = [
  '/',
  '/index.html',
  '/level1.html',
  '/level2.html', 
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(assetsToCache))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});
