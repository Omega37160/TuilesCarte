const cacheName = 'offline-maps-v1';

self.addEventListener('install', (event) => {
    self.skipWaiting(); // Force le SW à s'activer immédiatement
});

self.addEventListener('fetch', (event) => {
    // On intercepte si l'URL contient 'local-tiles'
    if (event.request.url.includes('local-tiles')) {
        event.respondWith(
            caches.match(event.request).then((response) => {
                // Retourne le cache si trouvé, sinon va sur le réseau
                return response || fetch(event.request);
            })
        );
    }
});
