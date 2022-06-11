'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "a024dbd51e10fea997db9d34aad88fcd",
"assets/FontManifest.json": "3e22fd340403768020448339a896d11c",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/fonts/Spartan-Black.ttf": "01248c2acb090bd04e45309f76717513",
"assets/images/a.png": "f5f7836603f23ba66fa73d451bca37dd",
"assets/images/b.PNG": "51a8a236eba3a6ae2293e365cd8998f9",
"assets/images/c.PNG": "89894d3e8397f4837babc0a18f45c59b",
"assets/images/d.PNG": "aab57db752b2ba8dfdebee91bfdee3b1",
"assets/images/e.PNG": "6223a0a3a9eb2d327e2d26966d21035d",
"assets/images/f.PNG": "c26756f0b53da163ea05f39866ac5cd0",
"assets/images/g.PNG": "850fbcfd8aa042f212f427e95b229d70",
"assets/images/h.PNG": "0d77d7510572901f88f1d67d1f69a4e6",
"assets/images/i.PNG": "21efd12b5110285f2091165b9c7190e8",
"assets/images/j.PNG": "fd749de784479ef68f37ac0b7d56483e",
"assets/images/k.PNG": "eb14a34c33663e71e4080f1fb511d8ea",
"assets/images/l.PNG": "384cbaca5af36d17df511f1edcfbea83",
"assets/images/m.PNG": "5949dda06ed272df32c61f9a3085489f",
"assets/images/n.PNG": "d9d944ce2f46592d8354fdd529bd6221",
"assets/images/o.PNG": "add9dab294b7c1fc130dd766dd1832b6",
"assets/images/p.PNG": "2b1273aea5656896b024efb1ca303298",
"assets/images/q.PNG": "15129c5e585369b85ad77cc903e638b2",
"assets/images/r.PNG": "3abd74762ac718271b644614af44cb5d",
"assets/images/s.PNG": "7229de176f09bca2541b328d736dd0c1",
"assets/images/t.PNG": "1dd701d062ebcdf89e54d7354e81c2e5",
"assets/images/u.PNG": "1e06c03d6cb2f40d44aba5768eb530bc",
"assets/images/v.PNG": "bdb8b0632ae714bba83328a2e44ef7b3",
"assets/images/w.PNG": "211f5a77099fab00f72249126246bf25",
"assets/images/x.PNG": "5c6af05fbdb38a75cf3490c1fdf0b97e",
"assets/images/y.PNG": "ea83a83e38c645ad9a55e23d330f58ba",
"assets/images/z.PNG": "e0b2ed40f54c22c508d5d1526f5e4135",
"assets/NOTICES": "d364e40173caa1e462ce4e14e7b3c18f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/videos/a.mp4": "c84baca3311b94dfec9e844da164a270",
"assets/videos/b.mp4": "c3632ff884c739a488c5a4940a12e6d2",
"assets/videos/c.mp4": "b5fe7e9de86b19a663ec39f8d02acf31",
"assets/videos/d.mp4": "400c8771d971273e19ef6bdb51da21ae",
"assets/videos/e.mp4": "011154605e5c0518270fcaf43d065a58",
"assets/videos/f.mp4": "66d6e26a723e3539748873d3c200c9bf",
"assets/videos/g.mp4": "14e8093a29bbfb34380c8bc3586e6fa4",
"assets/videos/h.mp4": "af7b8faa09968463b261ab2d590398c2",
"assets/videos/i.mp4": "abfe1eb78223bed0b2c5f71397a9698c",
"assets/videos/j.mp4": "2929661825584034609969c07e4869c0",
"assets/videos/k.mp4": "2ad3a7369cb81f8849da1f993b844c27",
"assets/videos/l.mp4": "20dd3d486dcabdb5faf4e37de4aab3f8",
"assets/videos/m.mp4": "0a564b4aaf6b3b1568e35cb09cce5c3c",
"assets/videos/n.mp4": "b76532d628fe890f9b0078d9ac7b96b4",
"assets/videos/o.mp4": "c2b921f9d9e109fd88944fef4544ff6c",
"assets/videos/p.mp4": "b0eef80e5b8b7587d7787554cd38da30",
"assets/videos/q.mp4": "4f499fc3385c583b54e47e84c82d30c5",
"assets/videos/r.mp4": "b3d95842db59fe12620389c95e3d605b",
"assets/videos/s.mp4": "0075abeebf480c5c5327e7cea6df01b9",
"assets/videos/t.mp4": "cd3ce5999c4c7aaafc51fc70f0b4ffb5",
"assets/videos/u.mp4": "4a92be4fa2b3db58366263bb71dfcf9d",
"assets/videos/v.mp4": "b405817e08627b0d342e6be8af7667ea",
"assets/videos/w.mp4": "e892eee2b6c83a243c4f322a8a964738",
"assets/videos/x.mp4": "798abc95a57ce4dbe9eac0529c70d72d",
"assets/videos/y.mp4": "8c2618646a5fb6c6407a1984b53918f7",
"assets/videos/z.mp4": "c6e05176da0a99516739e729f0d0e01e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "872b8d5effc04d155e638091bc2d0fdd",
"/": "872b8d5effc04d155e638091bc2d0fdd",
"main.dart.js": "1351d24848ad7f0b586ce529709b179d",
"manifest.json": "f717eaa0e4cd2fafa0bc3762ded1dac7",
"version.json": "d2e21c801312cb0a4f55b6dd4754b272"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
