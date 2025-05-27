self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('FMV-pwa-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/FMV-pwa/index.html',
                '/FMV-pwa/manifest.json',
                '/FMV-pwa/css/syle.css',
                '/FMV-pwa/logo_s.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
