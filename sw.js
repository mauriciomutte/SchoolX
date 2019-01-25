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

var precacheConfig = [["agenda/index.html","6bff3c0bbeb0535d927982f5959ae290"],["assets/css/style.css","dc80a087770a9dc97981986085e8cf70"],["assets/css/style.min.css","3bdf7b2e38f891f46be1699d70e717b9"],["assets/img/Artes.png","0fb99f5446a0d40243d620fab05eee93"],["assets/img/Artes_w.png","54ad41c0d3e5ad33015367d9d376ead7"],["assets/img/Biologia.png","e06b1823a013a46da0bc8c30ce916fb6"],["assets/img/Biologia_w.png","4f188e4b8efdbd69733df043d42a4906"],["assets/img/Educação Física.png","71752c976f638599211a3959325940c8"],["assets/img/Educação Física_w.png","349052b92fa384f09e7b5d815cb5d10c"],["assets/img/Espanhol.png","4eaeb653e687feeaea155a9879e02e3f"],["assets/img/Espanhol_w.png","6846f81f74ef7e91abbd16570e6c77fa"],["assets/img/Filosofia.png","3904ef076d0855840736a40cbdf536a6"],["assets/img/Filosofia_w.png","1fc03f6dfc2e16a8a1820d9871ec6301"],["assets/img/Física.png","ffd9396392add8ae11975bba8baf32d2"],["assets/img/Física_w.png","4727bdc399e6968764c69163a24187a2"],["assets/img/Geografia.png","5ccbe8582f9771bdaef08196ca7af122"],["assets/img/Geografia_w.png","cdd57e8719907ea1cee945901945af0c"],["assets/img/História.png","9f9660caabc9983035178d416ef18956"],["assets/img/História_w.png","36312730aa78396c8f10d840066a136b"],["assets/img/Inglês.png","1a8e2d2afc737558235ff538e5b8c7ee"],["assets/img/Inglês_w.png","94d90b9cf76ca33f737e7d1e146286d8"],["assets/img/Literatura.png","f6ce5a26daeb9371c05f0268112744d4"],["assets/img/Literatura_w.png","291c3730716d84023f3636cae7df012e"],["assets/img/Matemática.png","c6b1ef63e48a0482f064fd5820b3bb43"],["assets/img/Matemática_w.png","208833519c08cea1a9a267e065ef50af"],["assets/img/Português.png","5e3a7cca1d53957d73ddf0739255b5f2"],["assets/img/Português_w.png","9eafc4ef8a915c894537418da8dbca6d"],["assets/img/Química.png","2876b87f39d53cbbe16a9ced49ee9870"],["assets/img/Química_w.png","20ef806890f7201e768ff0b4d6608f34"],["assets/img/Redação.png","c2fa4ba9e07f113167160b42597e8bb5"],["assets/img/Redação_w.png","1cee5f58d77bbb82e2504be0dd1acb54"],["assets/img/Sociologia.png","9c97b4a521f03671c1c5b55c79d0bd73"],["assets/img/Sociologia_w.png","7f22a135cc320eebf70f30406435716d"],["assets/img/book-cinco.jpg","cae63e3dbe20f3fd281714e7f9f393cf"],["assets/img/book-dois.jpg","cbcfb714f6e1b63b0ea745f796d824d1"],["assets/img/book-oito.jpg","a44e086026d3cd9e7743ad4c5fe4490f"],["assets/img/book-quatro.png","131b043ce8f398b1d8df9c4c93cc4052"],["assets/img/book-seis.png","37249c87c6a7b83a6b0bbcb32cae6900"],["assets/img/book-sete.png","f9abb38491dc73d75988c21f08fd514b"],["assets/img/book-tres.png","26464a232697c6b8e9eb3101d75292ec"],["assets/img/book-um.jpg","037fbeaffe0d56f82f3862a11be7350d"],["assets/img/icon_site.png","42631d0d52ef33dfbd7b63ca152b084a"],["assets/img/menu-book.png","32fe56d926f21e37c5b699c3cc0d857c"],["assets/img/menu-calendar.png","03a3a9bf0ea8f6dc17e786d6c4a989e5"],["assets/img/menu-conteudox.png","55713491d859eb63cd09dafe97406707"],["assets/js/conteudox.js","e34c213b95af4e05b18acd182220e639"],["assets/js/cronograma.js","8e456ec874c733e9016f48d1aadef1a6"],["assets/js/leituras.js","dfa05ebe197aabd7c3a7905322746ce7"],["assets/js/main.js","d539838f66afdc7455ebd05acfaebbaf"],["assets/js/materia.js","9c79cede272f2d2a63733ce3117b774e"],["assets/js/provas.js","a435d5064fcefeecfc25149e63267139"],["index.html","25ce1d870285817305b3020024fe80b5"],["leituras.json","ba79a642f3ea0ab44a8f8a565ec7458d"],["manifest.json","0d88f1b23d1b367d9cdbaee5c3167ccf"],["matter.json","74d69e9c85954c70a62f0fd0bc47080b"],["package-lock.json","e9c7a765f6847356193bcdc398ba4da0"],["package.json","850de04263b5ac490390807df6a6e8e7"],["tests.json","31eab22238afe4d7f66e291eeecfbb71"]];
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







