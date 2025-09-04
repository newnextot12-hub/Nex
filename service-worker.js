self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('nex-ai').then((cache) => {
      return cache.addAll(['/', '/index.html', '/buddy.js', '/manifest.json']);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
