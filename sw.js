const CACHE_NAME = 'diario-de-bordo-v1';
const URLS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './assets/icon.svg'
];

// Instala o service worker e armazena os assets principais no cache.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache aberto e assets sendo cacheados');
        return cache.addAll(URLS_TO_CACHE);
      })
      .then(() => self.skipWaiting()) // Ativa o service worker imediatamente
  );
});

// Intercepta as requisições e serve os assets do cache primeiro.
// Se não encontrar no cache, busca na rede.
self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') {
        return;
    }
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Encontrado no cache - retorna a resposta do cache
        if (response) {
          return response;
        }

        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Verifica se a resposta é válida
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
  );
});

// Gerencia caches antigos para manter o app atualizado.
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deletando cache antigo:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
    .then(() => self.clients.claim()) // Garante que o novo SW assuma o controle
  );
});