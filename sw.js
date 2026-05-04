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
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Retourne la tuile du cache, sinon va sur internet
            return response || fetch(event.request);
        })
    );
});
