"use strict";var precacheConfig=[["/index.html","ea395c372682cd82af7a9e7f9c5cb0e1"],["/static/css/main.c7704a76.css","4ba60fc35f8d079d823ad79ff3653d94"],["/static/js/main.da8d814d.js","22a11831da399ad5ccb1a3c4767576b4"],["/static/media/01.6bbb9293.jpg","6bbb9293ca9d927e69067213e6f1d45b"],["/static/media/02.a866b80b.jpg","a866b80b9b831b130d84683f2f732f7d"],["/static/media/Resume.b0ee19a8.pdf","b0ee19a8898c419a819ea7042bddc1a8"],["/static/media/asset00.8bda9611.jpg","8bda9611ddeffe5479e212ac99b0f9b0"],["/static/media/asset01.dbc75099.png","dbc75099e7a125898b2da9b132d51304"],["/static/media/asset02.52defa6f.jpg","52defa6fa09123c2c914557181e79e8e"],["/static/media/asset03.8ed495ec.jpg","8ed495ecb2450c266b5bec46d4f2b750"],["/static/media/asset04.b3426785.jpg","b3426785e314cad2e131fd81a26cadf1"],["/static/media/asset05.f877173d.jpg","f877173d43680646d0c94af2ed273d97"],["/static/media/logo.5d5d9eef.svg","5d5d9eefa31e5e13a6610d9fa7a283bb"],["/static/media/work01_thumbnail.fff8e9a2.jpg","fff8e9a2c2ae8f8ee2314129fe47235b"],["/static/media/work02_thumbnail.d2c40ecf.jpg","d2c40ecff2f600455c00d49c37b9046e"],["/static/media/work03_thumbnail.0788cff8.jpg","0788cff80b3215ca054bafb099304e8b"],["/static/media/work04_thumbnail.2b60f41a.jpg","2b60f41ae90b20d47eb2d39cd9d18331"],["/static/media/work05_thumbnail.5aea5654.jpg","5aea56542dbf2d45a1a252e76d99b21c"],["/static/media/work06_thumbnail.84171878.jpg","8417187853275990269cba5b9c52f2cd"],["/static/media/work07_thumbnail.331cba78.jpg","331cba78f0771c493c51dfddf53f5358"],["/static/media/work08_thumbnail.14b27c0d.jpg","14b27c0dc1b54d7ff5280bc5d1005d99"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});