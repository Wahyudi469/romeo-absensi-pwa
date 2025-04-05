self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('absensi-cache').then(function(cache) {
      return cache.addAll([
        'absensi_2.html',
        'manifest.json',
        'icon-a.png'
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
