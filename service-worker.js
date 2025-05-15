self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('diagjet-store').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/amm-data.json',
        '/wdm-data.json',
        '/manifest.json'
      ]);
    })
  );
});
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});