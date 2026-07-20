// Service worker mínimo: solo existe para que el navegador
// permita "Agregar a pantalla de inicio". No cachea nada,
// así los kinesiólogos siempre ven la biblioteca de ejercicios
// más reciente de Firestore.

const CACHE_NAME = 'pauta-heal-v1';

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

// Passthrough: deja pasar todas las peticiones a la red tal cual,
// sin interceptar ni cachear (los datos de Firestore deben ser siempre frescos).
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
