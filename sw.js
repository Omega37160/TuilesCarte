const CACHE_NAME = 'offline-maps-v1';

// Installation : on met en cache le squelette de l'app
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['index.html', 'manifest.json']);
    })
  );
});

// Interception des requêtes
self.addEventListener('fetch', (event) => {
    const url = event.request.url;
    if (url.includes('/local-tiles/')) {
        event.respondWith(
            caches.open('offline-maps-v1').then((cache) => {
                return cache.match(event.request).then((response) => {
                    return response || fetch(event.request);
                });
            })
        );
    }
});
