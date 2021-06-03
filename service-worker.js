/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6ac0d738a9ffb58a2c6a373b6fcfed9f"
  },
  {
    "url": "assets/css/0.styles.f48ab21d.css",
    "revision": "ef4f2f5efc303e267212602276b9c11b"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/js/10.293bf025.js",
    "revision": "f5f90ded0f47abfb41baca38e1133ac0"
  },
  {
    "url": "assets/js/11.a55b617a.js",
    "revision": "f5e5b20755b750c4e4728726dca30299"
  },
  {
    "url": "assets/js/12.8b0c6758.js",
    "revision": "94c0fd83a85148d0add3d2757b58b771"
  },
  {
    "url": "assets/js/13.a4ad73be.js",
    "revision": "c22274bd421693a084e354c0d58ccd63"
  },
  {
    "url": "assets/js/14.ef84118e.js",
    "revision": "52d85cf98d76c9a7200c69f986c03d7f"
  },
  {
    "url": "assets/js/15.c756fc14.js",
    "revision": "8dfa685ff18dfbf05ff2f7608c55c3f6"
  },
  {
    "url": "assets/js/3.bde2ee9c.js",
    "revision": "6bc6592981f3e806c593a098c608c358"
  },
  {
    "url": "assets/js/4.cc810973.js",
    "revision": "300907837bbf73e02ae40dcf271df5d8"
  },
  {
    "url": "assets/js/5.3695fa24.js",
    "revision": "9dc66611ee89c25f9692491aa9a40726"
  },
  {
    "url": "assets/js/6.206c79d1.js",
    "revision": "d3fcfeec9596e0c7ce67b6056a1ba17e"
  },
  {
    "url": "assets/js/7.106aea0e.js",
    "revision": "f15a4185c8255bb778de390bc5142351"
  },
  {
    "url": "assets/js/8.d0a25fbd.js",
    "revision": "d496b7237cdc61b16551e214c72513e7"
  },
  {
    "url": "assets/js/9.480ef8d6.js",
    "revision": "a7f0558698cf3c328df1dd7e4a4d1b31"
  },
  {
    "url": "assets/js/app.8847ed43.js",
    "revision": "8d55247be006d21036c8e95830a3580a"
  },
  {
    "url": "assets/js/vuejs-paginate.3d07f62b.js",
    "revision": "4cb6f1aaafd78c3b901b3626310ba8f3"
  },
  {
    "url": "index.html",
    "revision": "8a222ce7a9decd278a632641277916d1"
  },
  {
    "url": "post/how-to-join-mc/index.html",
    "revision": "b1a1678f7f1ada7329efb3f0f4ce2c4e"
  },
  {
    "url": "projects/index.html",
    "revision": "4505915e3578b498d439d9c60f707d09"
  },
  {
    "url": "projects/serqet-bot/index.html",
    "revision": "fa96326e74ff3308158a8568e4767d1c"
  },
  {
    "url": "tag/index.html",
    "revision": "6e56bb6281a5be4b89a7f6d29abdbdf4"
  },
  {
    "url": "tag/ديسكورد/index.html",
    "revision": "b9cc8ab7d3c1aeb81ca8122a935b07b7"
  },
  {
    "url": "tag/ماين كرافت/index.html",
    "revision": "dbcab209bdb5938630d8976663e63611"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
