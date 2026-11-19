const CACHE_NAME = 'yakjo-pwa-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Пропускаем запросы к API напрямую в сеть
  event.respondWith(fetch(event.request));
});