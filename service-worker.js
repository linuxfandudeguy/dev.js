// service-worker.js

self.addEventListener('install', (event) => {
  console.log('Service Worker installing.');
  // You can cache assets here if needed
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activating.');
  // Clean up old caches if necessary
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
