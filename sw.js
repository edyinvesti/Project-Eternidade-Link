const CACHE = 'el-v1';
const FILES = [
  '/index.html',
  '/dashboard.html',
  '/nodes.html',
  '/language.html',
  '/install.html',
  '/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
