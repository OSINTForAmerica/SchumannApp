self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('schumann-cache').then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/icon-512.png',
        '/icon-192.png',
        '/manifest.json',
        'https://cdn.tailwindcss.com',
        'https://unpkg.com/dayjs/dayjs.min.js',
        'https://unpkg.com/dayjs/plugin/utc.js',
        'https://unpkg.com/dayjs/plugin/timezone.js',
        'https://cdn.jsdelivr.net/npm/glightbox/dist/css/glightbox.min.css',
        'https://cdn.jsdelivr.net/npm/glightbox/dist/js/glightbox.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      return cachedResponse || fetch(e.request);
    })
  );
});
