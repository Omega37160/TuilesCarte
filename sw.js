const cacheName = 'offline-maps-v1';

self.addEventListener('fetch', (event) => {
    // On intercepte uniquement les requêtes vers nos tuiles locales
    if (event.request.url.includes('/local-tiles/')) {
        event.respondWith(
            caches.open(cacheName).then((cache) => {
                return cache.match(event.request).then((response) => {
                    // Si on trouve dans le cache, on renvoie, sinon on tente le réseau
                    return response || fetch(event.request);
                });
            })
        );
    }
});
