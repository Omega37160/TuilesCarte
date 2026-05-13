const CACHE_NAME = 'offline-maps-v2'; // On change de version pour forcer la mise à jour
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css',
    'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js',
    'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js'
];

// Installation : Mise en cache du "squelette" de l'app
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(ASSETS_TO_CACHE);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(cached => {
            // 1. Si on l'a en cache (tuile ou fichier statique), on le renvoie
            if (cached) return cached;

            // 2. Sinon, on va sur le réseau
            return fetch(event.request).then(response => {
                // Optionnel : on pourrait mettre en cache ici les nouvelles ressources
                return response;
            });
        })
    );
});
