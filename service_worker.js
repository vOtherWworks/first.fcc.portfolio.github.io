'use strict';
// chrome://inspect/#service-workers


let version = vastted.freecodecamp.v=1.0.0;
let addToCache = __filesAddToCache__;



//───────────────────────────────────Check serviceWorker
self.addEventListener('install', event => {
    console.log('WORKER: install event in progress');

    event.waitUntil(
        caches
            .open(version)
            .then(cache => cache.addAll(addToCache))
            .then(() => console.log('WORKER: install completed'))
            .then(() => self.skipWaiting()) //
            .then(() => console.log('WORKER: active')) //
    );
});
//───────────────────────────────────Check serviceWorker



//───────────────────────────────────Check serviceWorker
self.addEventListener('activate', event => {
    console.log('\r\nWORKER: activate event in progress');

    event.waitUntil(
        caches
            .keys()
            .then(keys => {
                return Promise.all(
                    keys
                        .filter(key => !key.startsWith(version))
                        .map(key => caches.delete(key))
                );
            })
            .then(() => console.log('WORKER: activate completed'))
    );
});
//───────────────────────────────────Check serviceWorker



//───────────────────────────────────Check serviceWorker
self.addEventListener('fetch', event => {
    console.log('\r\nWORKER: fetch event in progress');

    if (event.request.method !== 'GET') {
        console.log(`WORKER: fetch event ignored\r\n  ${event.request.method}\r\n  ${event.request.url}`);
        return;
    }

    event.respondWith(
        caches
            .match(event.request)
            .then(cached => {
                const fetchedFromNetwork = response => {
                    let cacheCopy = response.clone();
                    console.log(`WORKER: fetch response from network. ${event.request.url}`);
                    caches
                        .open(version)
                        .then(cache => cache.put(event.request, cacheCopy))
                        .then(() => console.log(`WORKER: fetch response stored in cache. ${event.request.url}`));
                    return response;
                }

                const unableToResolve = () => {
                    console.log('WORKER: fetch request failed in both cache and network');
                    return new Response('<h1>Service Unavailable</h1>', {
                        status: 503,
                        statusText: 'Service Unavailable',
                        headers: new Headers({
                            'Content-Type': 'text/html'
                        })
                    });
                }
                


                let networked = fetch(event.request)
                    .then(fetchedFromNetwork, unableToResolve)
                    .catch(unableToResolve);

                console.log(`WORKER: fetch event ${cached ? '(cached)' : '(network)'}\r\n  ${event.request.url}`);
                return cached || networked;
            })
    );
});
//───────────────────────────────────Check serviceWorker
//# sourceMappingURL=_service_worker.js.map
