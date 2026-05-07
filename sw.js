const CACHE_NAME = 'offline-maps-v1';

self.addEventListener('fetch', event => {
    // On vérifie si l'URL contient notre dossier virtuel de tuiles
    if (event.request.url.includes('/local-tiles/')) {
        event.respondWith(
            caches.match(event.request).then(cached => {
                if (cached) {
                    return cached;
                }
                // Si pas en cache, on tente le réseau (au cas où)
                return fetch(event.request);
            })
        );
    }
});
