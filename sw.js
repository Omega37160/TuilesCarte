const CACHE_NAME = 'offline-maps-v1';

self.addEventListener('fetch', event => {
    if (event.request.url.includes('/local-tiles/')) {
        event.respondWith(
            caches.match(event.request)
                .then(cached => cached || fetch(event.request))
        );
    }
});
