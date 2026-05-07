const CACHE_NAME = 'offline-maps-v1';

self.addEventListener('fetch', event => {
    const url = event.request.url;

    // Intercepte les tuiles locales
    if (url.includes('/local-tiles/')) {
        event.respondWith(
            caches.match(event.request)
                .then(response => {
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                })
        );
    }
});
