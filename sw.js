/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["agenda/index.html","a5e467b312662b4013d9cc4e8f0b66d3"],["assets/css/style.css","42f943b01015ef72ebf61cdbce599cd5"],["assets/img/book-cinco.jpg","cae63e3dbe20f3fd281714e7f9f393cf"],["assets/img/book-dois.jpg","cbcfb714f6e1b63b0ea745f796d824d1"],["assets/img/book-oito.jpg","a44e086026d3cd9e7743ad4c5fe4490f"],["assets/img/book-quatro.png","131b043ce8f398b1d8df9c4c93cc4052"],["assets/img/book-seis.png","37249c87c6a7b83a6b0bbcb32cae6900"],["assets/img/book-sete.png","f9abb38491dc73d75988c21f08fd514b"],["assets/img/book-tres.png","26464a232697c6b8e9eb3101d75292ec"],["assets/img/book-um.jpg","037fbeaffe0d56f82f3862a11be7350d"],["assets/img/icon_art.png","0fb99f5446a0d40243d620fab05eee93"],["assets/img/icon_art_w.png","54ad41c0d3e5ad33015367d9d376ead7"],["assets/img/icon_bio.png","e06b1823a013a46da0bc8c30ce916fb6"],["assets/img/icon_bio_w.png","4f188e4b8efdbd69733df043d42a4906"],["assets/img/icon_edf.png","71752c976f638599211a3959325940c8"],["assets/img/icon_edf_w.png","349052b92fa384f09e7b5d815cb5d10c"],["assets/img/icon_esp.png","4eaeb653e687feeaea155a9879e02e3f"],["assets/img/icon_esp_w.png","6846f81f74ef7e91abbd16570e6c77fa"],["assets/img/icon_fil.png","3904ef076d0855840736a40cbdf536a6"],["assets/img/icon_fil_w.png","1fc03f6dfc2e16a8a1820d9871ec6301"],["assets/img/icon_fis.png","ffd9396392add8ae11975bba8baf32d2"],["assets/img/icon_fis_w.png","4727bdc399e6968764c69163a24187a2"],["assets/img/icon_geo.png","5ccbe8582f9771bdaef08196ca7af122"],["assets/img/icon_geo_w.png","cdd57e8719907ea1cee945901945af0c"],["assets/img/icon_his.png","9f9660caabc9983035178d416ef18956"],["assets/img/icon_his_w.png","36312730aa78396c8f10d840066a136b"],["assets/img/icon_ing.png","1a8e2d2afc737558235ff538e5b8c7ee"],["assets/img/icon_ing_w.png","94d90b9cf76ca33f737e7d1e146286d8"],["assets/img/icon_lit.png","f6ce5a26daeb9371c05f0268112744d4"],["assets/img/icon_lit_w.png","291c3730716d84023f3636cae7df012e"],["assets/img/icon_mat.png","c6b1ef63e48a0482f064fd5820b3bb43"],["assets/img/icon_mat_w.png","208833519c08cea1a9a267e065ef50af"],["assets/img/icon_por.png","5e3a7cca1d53957d73ddf0739255b5f2"],["assets/img/icon_por_w.png","9eafc4ef8a915c894537418da8dbca6d"],["assets/img/icon_qui.png","2876b87f39d53cbbe16a9ced49ee9870"],["assets/img/icon_qui_w.png","20ef806890f7201e768ff0b4d6608f34"],["assets/img/icon_red.png","c2fa4ba9e07f113167160b42597e8bb5"],["assets/img/icon_red_w.png","1cee5f58d77bbb82e2504be0dd1acb54"],["assets/img/icon_site.png","42631d0d52ef33dfbd7b63ca152b084a"],["assets/img/icon_soc.png","9c97b4a521f03671c1c5b55c79d0bd73"],["assets/img/icon_soc_w.png","7f22a135cc320eebf70f30406435716d"],["assets/img/menu-book.png","32fe56d926f21e37c5b699c3cc0d857c"],["assets/img/menu-calendar.png","03a3a9bf0ea8f6dc17e786d6c4a989e5"],["assets/img/menu-conteudox.png","55713491d859eb63cd09dafe97406707"],["assets/js/main.js","1e570f07076c45f2f540469e2a165eb5"],["conteudo/primeiro/materia/arte.html","50a4491451e4ec021417dbbd5553fea4"],["conteudo/primeiro/materia/biologia.html","6775eef6073d18ae366c3b2047e4dd88"],["conteudo/primeiro/materia/edfis.html","95a0df8ad7cfae3d99527eb5c6543375"],["conteudo/primeiro/materia/espanhol.html","e7e3519f9ca3ed32bec453bcdd9d4eda"],["conteudo/primeiro/materia/filosofia.html","e6e9d8aa5ff8639a895539b4c8e7d64e"],["conteudo/primeiro/materia/fisica.html","a3b8279b922d791cb9c703725ffbb020"],["conteudo/primeiro/materia/geografia.html","e88817133fd2d54956e924cfbad9faff"],["conteudo/primeiro/materia/historia.html","39c8ddaa5b409d6b0c372b476e483d75"],["conteudo/primeiro/materia/ingles.html","9c4d3e55f1966af8aa85c8cdc01aaab6"],["conteudo/primeiro/materia/literatura.html","e13f2f195a6cac2f30a8fd3efc9b94f9"],["conteudo/primeiro/materia/matematica.html","2caf06da07cbdb8451f3437522c7b290"],["conteudo/primeiro/materia/portugues.html","9f49c382b10381f0920e7005ed75ba17"],["conteudo/primeiro/materia/quimica.html","7a10408a33c88d63f18c59f9847eb7e0"],["conteudo/primeiro/materia/redacao.html","501f6892a816a0487440cacd9dcb12eb"],["conteudo/primeiro/materia/sociologia.html","8eb9c224d54080c1de5ced918e8a7e4c"],["conteudo/segundo/materia/arte.html","ab229134ba365fdac42f1025dc3b6d89"],["conteudo/segundo/materia/biologia.html","fdae501971a8f5c1888d6a41938862d8"],["conteudo/segundo/materia/edfis.html","17b654351c29dda9e64edd8b800da2a8"],["conteudo/segundo/materia/espanhol.html","45cf3fb586bfc6954bc65ab4a438eb06"],["conteudo/segundo/materia/filosofia.html","f231361816ff96041489b22999a428b1"],["conteudo/segundo/materia/fisica.html","a941a36bfaf22e2caa8ba1602b5833c8"],["conteudo/segundo/materia/geografia.html","f9a6c9be89d93c51b4c1d27f99bacb75"],["conteudo/segundo/materia/historia.html","b7333e1c3df8c7c1f7d08fb3385b2ae8"],["conteudo/segundo/materia/ingles.html","0075f451b1343df1e467754169d17d2f"],["conteudo/segundo/materia/literatura.html","106a8955af14670447c559c1a5c89504"],["conteudo/segundo/materia/matematica.html","84dfe0b3273250d6669564866e8ee813"],["conteudo/segundo/materia/portugues.html","bf00e97dec0cefd4fa22f1addedd8098"],["conteudo/segundo/materia/quimica.html","15178cd53e08c413474deef9f68b260d"],["conteudo/segundo/materia/redacao.html","2ccd22117c03ddceec74bebfd1d9d3fa"],["conteudo/segundo/materia/sociologia.html","a499806b3f02653f3b599c09e802d110"],["index.html","aef2bcf850ab8827398754955e0ffe02"],["manifest.json","0d88f1b23d1b367d9cdbaee5c3167ccf"],["materia/arte.html","715e12346fbaaee944362f1024d5775d"],["materia/biologia.html","ae686f2d513584047c310520c217cdfa"],["materia/educacaoFisica.html","18562b4ba9d10e712f7eb6f8bb3d5b28"],["materia/filosofia.html","03cf43fccecea1ad3236b607692cfc18"],["materia/fisica.html","fb0dc52d74c8dba0106e6f5f4c0b9dd5"],["materia/geografia.html","f368943044bcf67e6ae772ef7bbd9a5e"],["materia/historia.html","eedf86f6d1b2b268cbca510002f8cb7c"],["materia/linguaEspanhola.html","4fc01add5300462bfa57789c49bdf91e"],["materia/linguaInglesa.html","8383a08ff1b5e46c2cc144897683825f"],["materia/linguaPortuguesa.html","84dfbd74dfb336758f7ffcd96473613e"],["materia/literatura.html","c17b12a142782b0c522af4344cdac511"],["materia/matematica.html","0cc9014a645fa7ee2c01761e152edc17"],["materia/quimica.html","90cbc090d5ac3e6727cb01dac96a486f"],["materia/redacao.html","7ddbef882a100545c07c54f3d74d78bf"],["materia/sociologia.html","6ef21be203a73f46e2131dd463d8a97f"],["matter.json","85fbae7dda5ab3942d63753f688a3cf8"],["package-lock.json","dd0ccbd3aff8f947aa8c4434eb12b964"],["package.json","1c92e6e8e6f4b347189e30085958b70b"],["tests.json","29137c16504005577c0faab9f5db7d77"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







