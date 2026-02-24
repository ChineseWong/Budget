var CACHE='budget-v3';
var URLS=['./','./index.html','./manifest.json','https://unpkg.com/react@18.2.0/umd/react.production.min.js','https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(URLS)}).then(function(){return self.skipWaiting()}))});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(keys){return Promise.all(keys.filter(function(k){return k!==CACHE}).map(function(k){return caches.delete(k)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener('fetch',function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request).then(function(res){if(res.ok){var clone=res.clone();caches.open(CACHE).then(function(c){c.put(e.request,clone)})}return res}).catch(function(){return caches.match('./index.html')})}))});
