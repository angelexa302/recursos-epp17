const CACHE_NAME = 'recursos-adosac-v1';
const urlsToCache = ['/'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  if (event.request.url.includes('script.google.com')) return;
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
