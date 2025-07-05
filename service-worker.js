self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('roadmap-cache').then(function(cache) {
      return cache.addAll([
        '/index.html',
        '/style.css',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
