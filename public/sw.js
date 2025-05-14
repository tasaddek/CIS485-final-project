const CACHE_NAME = 'bookcycle-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/components/book-component.js',
  '/styles.css'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(ASSETS))
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request)
      .then(response => response || fetch(e.request))
});