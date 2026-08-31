'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "af6ceb758fdbe3d10f9aed527972a8c8",
"assets/AssetManifest.bin.json": "4fdf939a6fefd5b295fc7056ba0c4b75",
"assets/assets/icons/login_brand_mark.svg": "f06ad3a7be16e30b29c7d182f08b853f",
"assets/assets/icons/logo.jpg": "9ccea5e1d993858e38656c1285fcc21e",
"assets/assets/icons/play.png": "e719edc97e1df1d69ddd520a02a5e855",
"assets/assets/icons/pwa_install_add.svg": "f9672be77d9cccbdeeefe100ec90b947",
"assets/assets/icons/pwa_install_phone.svg": "e1cfc220382bf3906a97d3568a7df322",
"assets/assets/icons/pwa_install_share.svg": "36a3509ad08f3131b220be53dabe3649",
"assets/assets/icons/splash.svg": "682821c96052a5635318c2cb66f67009",
"assets/assets/icons/splash2.svg": "4a108965468213f2e5d83eebeecdaf3d",
"assets/assets/icons/url.svg": "8b471b0bc5a3b92099bc00fb5f20ac59",
"assets/assets/images/c2c/purchase/icon_checkbox_selected.svg": "b29447aef7cd5902c534c4c8a5395393",
"assets/assets/images/c2c/purchase/icon_checkbox_unselected.svg": "a982555769ec9f500a159575c031672a",
"assets/assets/images/explore/close.svg": "12007d1ecdea13b9cd08ffc6ed3609fb",
"assets/assets/images/explore/medical_services_stack.svg": "3a85c3e4dea2ec8f11d6ca0d8f2e6d3d",
"assets/assets/images/explore/patient_recommendation_banner.png": "775cdd07937c4a7d912dd708fff0a31f",
"assets/assets/images/logo.png": "a55e447484961eeac5c0b598cd7d3d65",
"assets/assets/images/message/chat_message_read.svg": "4b00076c6d14d596fcfa5edd9037c411",
"assets/assets/images/message/chat_message_unread.svg": "02f70ec06e38383066f482965517d4b6",
"assets/assets/images/message/group_message_readers_placeholder.svg": "403d9bd2944bcd49d87b2fdd2c325b62",
"assets/assets/images/message/group_message_read_frame.svg": "af08990d7c6dde74ba9d6aae065a2f9b",
"assets/assets/images/message/group_message_read_overflow.svg": "b8b6546f4c38a83a880a1e3fd8f7442f",
"assets/assets/images/message/network_error_placeholder.svg": "b1dee8269ee2d30e65dc9dc649ad7277",
"assets/assets/images/message/notice.svg": "a59d3642756c4295e2b5bc919d860491",
"assets/assets/images/message/notice_center_chevron.svg": "afd4246a84d990979267588f991016a7",
"assets/assets/images/profile/account_eye_open.svg": "5f639faff454e8870268ffddf9c2758c",
"assets/assets/images/profile/account_eye_outline.svg": "a55bf5162f03aca4905cdb8da82c95e8",
"assets/assets/images/profile/account_eye_pupil.svg": "384190d7765c34d1ab845efbc8d9e0fa",
"assets/assets/images/profile/change_account_nav_back.svg": "e93aff3b379241fdbd275938d10b7f20",
"assets/assets/images/profile/icon_forgot_code.svg": "197629c26fce0cb1d3ad9e5e34feeee5",
"assets/assets/images/profile/icon_forgot_email.svg": "fde345fd1d83abebb7d873b90fba42a2",
"assets/assets/images/profile/icon_forgot_lock_body.svg": "5f298c0495d53652ce3141b2bbf99d63",
"assets/assets/images/profile/icon_forgot_lock_keyhole.svg": "c7ddcc403c9c757f7a93a50749bdbd22",
"assets/assets/images/profile/invite.png": "75bda822b220a38e8059f0b8cda3e2bd",
"assets/assets/images/profile/my_account_hero.svg": "9f0ced0d904b76eb734cf416128dcfa2",
"assets/assets/images/xhjPlaylet.png": "adf5682f39062862d40b6e36ccdb61d8",
"assets/assets/images/xhjVideo.png": "02d4c40505f6673c294191914f9c66e5",
"assets/assets/sounds/notice.mp3": "17ccc6b78388c9e0733f49653ab6f6dc",
"assets/FontManifest.json": "df7941d7f1471ba664695d864ca1b139",
"assets/fonts/MaterialIcons-Regular.otf": "009af8f554445793ccbdb526090406a0",
"assets/fonts/Roboto-Bold.ttf": "a0dfeb5d15101b6933df056d25bf1f3d",
"assets/fonts/Roboto-Regular.ttf": "c967730c06373ac1b27c087a3b3a0d06",
"assets/NOTICES": "267d0af643edfb5d14299f081c9d59b7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/netease_callkit_ui/assets/audios/avchat_connecting.mp3": "4a5d1afe44f07a0d789a46e52e3687ed",
"assets/packages/netease_callkit_ui/assets/audios/avchat_ring.mp3": "6c1508631168790b6bed55f5a0fe6fbe",
"assets/packages/netease_callkit_ui/assets/images/add_user.png": "6399e534e247f0d895a87e91363b7403",
"assets/packages/netease_callkit_ui/assets/images/arrow.png": "7d7d20720b1b2f5e0b4e17e051bf39c8",
"assets/packages/netease_callkit_ui/assets/images/audio_unavailable.png": "7e7cc8cb37653b04efc36fbd1a848bcf",
"assets/packages/netease_callkit_ui/assets/images/audio_unavailable_grey.png": "d70c279dc70fab3dd2c702748ad9d5d1",
"assets/packages/netease_callkit_ui/assets/images/blur_background_accept.png": "31ecd85968337e6d61c023c013402146",
"assets/packages/netease_callkit_ui/assets/images/blur_background_waiting_disable.png": "dead9ae533d46a55c212f70f6d7f65f1",
"assets/packages/netease_callkit_ui/assets/images/blur_background_waiting_enable.png": "e43613472fd314813956fda352d3f3ec",
"assets/packages/netease_callkit_ui/assets/images/camera_off.png": "36990b162868f5a9dac47cd7ab8108cd",
"assets/packages/netease_callkit_ui/assets/images/camera_on.png": "caf4d0fa5f5ebb2c9fc998ee03ea636d",
"assets/packages/netease_callkit_ui/assets/images/check_box_group_selected.png": "79316096f767602ddb7ac68c018a687d",
"assets/packages/netease_callkit_ui/assets/images/check_box_group_unselected.png": "bb4fc328e70273945feb37713816fda5",
"assets/packages/netease_callkit_ui/assets/images/dialing.png": "ed23abfde97d28036502095c071264e6",
"assets/packages/netease_callkit_ui/assets/images/dialing_video.png": "eeb01ce8ca84a9f5a749c5d88babcea4",
"assets/packages/netease_callkit_ui/assets/images/floating_button.png": "9b81c3741ca4c1dad47864b58c2cc72c",
"assets/packages/netease_callkit_ui/assets/images/handsfree.png": "577d6fe7390f9d26d36e31fb01070145",
"assets/packages/netease_callkit_ui/assets/images/handsfree_on.png": "b55e9b0ddbe7c607f6b725154e8f927e",
"assets/packages/netease_callkit_ui/assets/images/hangup.png": "e2ca6c0b7a35174efde6e3ec7eaf1609",
"assets/packages/netease_callkit_ui/assets/images/join_group_call.png": "bb2459d3663e870b697a3c40096f86a5",
"assets/packages/netease_callkit_ui/assets/images/join_group_compress.png": "a36ff6076967c72cfc7bafb40c2e44d8",
"assets/packages/netease_callkit_ui/assets/images/join_group_expand.png": "44b028813d7da2597f24eac4ad46e72d",
"assets/packages/netease_callkit_ui/assets/images/loading.gif": "9d0e89898974f657af212ed26eeebb34",
"assets/packages/netease_callkit_ui/assets/images/mute.png": "ea4f5db8c4872e65f5a6aa69a8d72316",
"assets/packages/netease_callkit_ui/assets/images/mute_on.png": "79a93858c66ca0d1d6bad3c85706e261",
"assets/packages/netease_callkit_ui/assets/images/network_bad.png": "3783ff89a0caabaaf7d1248bf11b0d70",
"assets/packages/netease_callkit_ui/assets/images/speaking.png": "fe2fbcb3497786015a580c723d3a6241",
"assets/packages/netease_callkit_ui/assets/images/switch_camera.png": "f681ce8fdc32689ef5a491a80c8eeefc",
"assets/packages/netease_callkit_ui/assets/images/switch_camera_group.png": "d4a16408abd38d2f1320753548a49ee2",
"assets/packages/netease_callkit_ui/assets/images/user_icon.png": "23f8841079dceeb9ae7babc308d704bd",
"assets/packages/netease_callkit_ui/assets/images/virtual_background.png": "6bfd8bf190926c17649d606fe20dc723",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/wakelock_plus/assets/no_sleep.js": "74499cf34f37daae14b51e3a23cd9f7a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"device_code_bridge.js": "c34926276da3fb7efc591349f5413c02",
"favicon.png": "d91237e87c23368ba999c4ee14bb1aab",
"fingerprintjs.iife.min.js": "762eb7650c78302191ed5f6fd95ada4d",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "2b9e52ca8951a650867d114a7f8a27b8",
"icons/Icon-192.png": "b621b43203e72be1a1b657f17707b94e",
"icons/Icon-512.png": "fd63c6a9cbb864911424dd5e021fad52",
"icons/Icon-maskable-192.png": "b621b43203e72be1a1b657f17707b94e",
"icons/Icon-maskable-512.png": "fd63c6a9cbb864911424dd5e021fad52",
"index.html": "fe69ee9e97304dae920b56aa60b81833",
"/": "fe69ee9e97304dae920b56aa60b81833",
"logo.png": "e6656ba073ce3649fec1e6f735f0b5d0",
"main.dart.js": "035dd3526f46aa5299fa0dc8730967e8",
"manifest.json": "94d13eb1b576640bc82292eaa5be2e71",
"popop_client_shell.html": "60cdbb3254b10f1dfabb9a35407ef05e",
"pwa_install_bridge.js": "048d6e153ad188c2efae7a98b2fa930d",
"version.json": "1483918b1d397c695e8856c110df814e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
