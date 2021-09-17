'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "manifest.json": "8cc0840472a804f64a48f3fc25720992",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.json": "5c49f3a0385bee91f39e43fa7e1471ad",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/assets/icons/ic_promotion.png": "9dc0bc8c99fdac2799aadcb95f78e816",
"assets/assets/icons/Spar-logo.svg.png": "aa28ee09786d8df2fe88b19ee49bbd96",
"assets/assets/icons/low.png": "6655be703a77276869229dcc119a96ce",
"assets/assets/icons/heart%2520(copy%25201).svg": "bb6dbdef095c56cb2fa2357c15a93b76",
"assets/assets/icons/Spar-logo.svg": "aa28ee09786d8df2fe88b19ee49bbd96",
"assets/assets/icons/admin/cutted.png": "50af26b98a2bebc6db45e7fd652a3f61",
"assets/assets/icons/admin/sadin_icon.jpg": "5d768e84e1128907d751434e2a802d05",
"assets/assets/icons/admin/saidin_3.jpg": "603dc55436edae738faddae768730505",
"assets/assets/icons/Spar-logo.svg%2520(copy%2520).png": "aa28ee09786d8df2fe88b19ee49bbd96",
"assets/assets/icons/spar-1.svg": "0b4183a6d15b79d3c1306d43d6b79edd",
"assets/assets/icons/transparent_spar_logo.png": "9cfd313527fd71a8ab11cee5c7dd10f9",
"assets/assets/icons/spar-1%2520(copy%25201).svg": "0b4183a6d15b79d3c1306d43d6b79edd",
"assets/assets/icons/heart.svg": "bb6dbdef095c56cb2fa2357c15a93b76",
"assets/assets/ic_launcher(1).zip": "610ecb3c0100f852d2ef9bcade58fb76",
"assets/assets/spar_round.png": "9746515c2267636e88a2159f2ede95a9",
"assets/assets/images/pets/cat.png": "de037ba647104ab27de665d37979cf98",
"assets/assets/images/pets/parrot.png": "19f50eff9c17ae0e89e431e8b7531f06",
"assets/assets/images/pets/horse.png": "7bb1013d927d4b9e653ef407342891ce",
"assets/assets/images/pets/dog.png": "fa1e64cd80b270d2bfa497f6b3a746ee",
"assets/assets/images/pets/pet-cat2.png": "76b65e1994eb8ebad952c4de4c6f9862",
"assets/assets/images/pets/pet-cat1.png": "8d0a7de6f2fa896fbcb0748e1f53a0e7",
"assets/assets/images/pets/rabbit.png": "0df473885bfe8166e28f4d682be123fd",
"assets/assets/images/sprite.png": "a1798902e15c44724476440d9b43bc35",
"assets/assets/images/img_2.png": "818846b3ee152c1b8bb9f69243c14206",
"assets/assets/images/bg.png": "8a8000687d5aa217a4cb84c49a2b752f",
"assets/assets/images/peesi.png": "b7724c62d03669478716917fffd559e3",
"assets/assets/images/saidin_profile.png": "a1bc6019e562e3569cf4a9cd402da4d4",
"assets/assets/images/fresh_fruits.png": "7d00635a4100bd04f49fc3cb6a3cc8ec",
"assets/assets/images/meat_fish.png": "9bb79b50c0b0c64b09164393ced9ffd7",
"assets/assets/images/chicken.png": "5ebfe96c9ab40e888cf17661ebb85344",
"assets/assets/images/pepper.png": "2b758c950a2b1688549a883f20ed6066",
"assets/assets/images/pulses.png": "ff5aca1c68606fcc611d3a0cce5d1530",
"assets/assets/images/egg_red.png": "22c13a82cf5f39e6c54b1b7c3389b530",
"assets/assets/images/diary.png": "fea093b33432da9cbf6ca106d152e963",
"assets/assets/images/pasta.png": "3aff64cdc34fbe5b34d12dd9c6d0f808",
"assets/assets/images/profile.png": "bf02ea76c938720dd28292ad88899633",
"assets/assets/images/beef_bone.png": "aad3b90f0379af947e0927f36437b8c2",
"assets/assets/images/img_4.png": "7008bf7f6c57a8726dd3bcd4a0545a3a",
"assets/assets/images/bananas.png": "c15d44669a1e8674bbf8694bdc6fb190",
"assets/assets/images/mayonnais.png": "e6262f49577314f7a354479d39a8d563",
"assets/assets/images/img_1.png": "5dd4787378a6abe4e53813ff97102638",
"assets/assets/images/juice_apple.png": "fffeed069f65c6feb2aed10e8eed29e3",
"assets/assets/images/noodles.png": "b39925576ca19925cbef773f870eba43",
"assets/assets/images/sadin_icon.jpg": "5d768e84e1128907d751434e2a802d05",
"assets/assets/images/rice.png": "c772fdae2432734db4cc044e731ef512",
"assets/assets/images/noodles1.png": "ed2ffbd316357dc1647a075f3b6dc28b",
"assets/assets/images/juice_orange.png": "d8e066b06ff3a39e92b03c9a1c6c3474",
"assets/assets/images/beverages.png": "9328674316ba887e78bfd0db2145c042",
"assets/assets/images/done.png": "14a2c7f8ea08c7a4cdaafcd114a2aa5f",
"assets/assets/images/coca_cola.png": "8a8c0a9ba3c1ef6bfa6305fbde1be32e",
"assets/assets/images/vegs_banner.png": "974b3ae2fa486c615fad412a8d892112",
"assets/assets/images/cola_diet.png": "28c507c90f7218d09219f15c5bc7ce32",
"assets/assets/images/profile_2.png": "ce59444308b98a2e2e9f9f8a2d0e330b",
"assets/assets/images/egg_white.png": "c987309c1ec53794d2f3a2fb35c91447",
"assets/assets/images/img_3.png": "fb4d68d52862f9a07ef280c8b8b22881",
"assets/assets/images/ginger.png": "e41280dfcdfdff22b51189052ccfa9ab",
"assets/assets/images/oils.png": "dbc0dd78b8e1924851455b3b244ab41e",
"assets/assets/images/bakery.png": "aa9b3a0fb6bc2b26a4981361c0c82537",
"assets/assets/images/apples.png": "73ce4652bbc71dc18954ec304326df15",
"assets/assets/ic_launcher.zip": "7b0a9710a2f34121dbcbb42c54673275",
"assets/assets/tg.png": "dea7b94370ed5a1eea88a259657f3bf5",
"assets/assets/saidino_icon.png": "58d98c5fa9ab702ad4be3772078cf897",
"assets/assets/fonts/CircularStd-Bold.ttf": "ce2a6c4154de87815e8971d21a987403",
"assets/assets/fonts/CircularAir-Light.ttf": "809eb889c78777517a6d252fd1f76eac",
"assets/assets/fonts/CircularStd-Medium.ttf": "46d551dfd0caa61f1332d7c477f584c2",
"assets/NOTICES": "fa5079197dad85c8b211e6478ede6178",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/FontManifest.json": "4110b61c461a378009e99e3fd74fc270",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"version.json": "dd3aaf28b5109a7d767bcb269ab236dd",
"index.html": "6de7fbb3f22916d6ab270ee92784533f",
"/": "6de7fbb3f22916d6ab270ee92784533f",
"splash/img/light-background.png": "9746515c2267636e88a2159f2ede95a9",
"splash/style.css": "f38b46f4946aa7c41b459ed0f982f1a6",
"main.dart.js": "5499c620d272e33af219c3ed903c1f7f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
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
