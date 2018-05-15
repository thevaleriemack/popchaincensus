// Set caching to true for production
var doCache = false;

var CACHE_NAME = 'popchain-census-cache-v1';

// delete old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(keyList =>
        Promise.all(keyList.map(key => {
          if (!cacheWhitelist.includes(key)) {
            console.log('Deleting cache: ' + key)
            return caches.delete(key);
          }
        }))
      )
  );
});

// first time user starts the app
self.addEventListener('install', function(event) {
  if (doCache) {
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          fetch("asset-manifest.json")
            .then(response => {
              response.json()
            })
            .then(assets => {
              const urlsToCache = ["/"]
              cache.addAll(urlsToCache);
              console.log('Cached');
            })
        })
    );
  }
});

// intercept the fetch to serve cached files
self.addEventListener('fetch', funciton(event) {
  if (doCache) {
    event.respondWith(
      caches.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
  }
});
