function swData() {
  d = new Date()
  year = d.getFullYear()
  month = d.getMonth() + 1
  day = d.getDate()
  hour = d.getHours()
  minute = d.getMinutes()

  return year + '-' + month + '-' + day + '-' + hour + '-' + minute
}

const staticCacheName = 'SchoolX-' + swData();

const filesToCache = [
  'index.html',
  'materia/arte.html',
  'materia/biologia.html',
  'materia/educacaoFisica.html',
  'materia/filosofia.html',
  'materia/fisica.html',
  'materia/geografia.html',
  'materia/historia.html',
  'materia/linguaEspanhola.html',
  'materia/linguaInglesa.html',
  'materia/linguaPortuguesa.html',
  'materia/literatura.html',
  'materia/matematica.html',
  'materia/quimica.html',
  'materia/redacao.html',
  'materia/sociologia.html',
  'assets/css/style.css',
  'assets/js/main.js'
];

// Cache on install
this.addEventListener("install", event => {
  this.skipWaiting();

  event.waitUntil(
    caches.open(staticCacheName)
      .then(cache => {
        return cache.addAll(filesToCache);
    })
  )
});

// Clear cache on activate
this.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(cacheName => (cacheName.startsWith('SchoolX-')))
          .filter(cacheName => (cacheName !== staticCacheName))
          .map(cacheName => caches.delete(cacheName))
      );
    })
  );
});

// Serve from Cache
this.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
      .catch(() => {
        return caches.match('index.html');
      })
  )
});