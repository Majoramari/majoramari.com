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
    "revision": "f86fd3a0a69af837ad0fe7b918063619"
  },
  {
    "url": "assets/css/0.styles.57818cda.css",
    "revision": "e6b8e0bce448b447abae1feb4351e686"
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
    "url": "assets/js/15.c3a90b9b.js",
    "revision": "a9d78fcad88a22c4cf3128c722d15512"
  },
  {
    "url": "assets/js/3.f48aba4e.js",
    "revision": "26aa99606774eec0ccd8b0039f2d4702"
  },
  {
    "url": "assets/js/4.cc810973.js",
    "revision": "300907837bbf73e02ae40dcf271df5d8"
  },
  {
    "url": "assets/js/5.47503dba.js",
    "revision": "122aab989d62428fff8578d6a56148e6"
  },
  {
    "url": "assets/js/6.206c79d1.js",
    "revision": "d3fcfeec9596e0c7ce67b6056a1ba17e"
  },
  {
    "url": "assets/js/7.b44aa754.js",
    "revision": "c8e42d7c8beda1ca0d243bb37dcd00da"
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
    "url": "assets/js/app.a3508997.js",
    "revision": "a132787b3644feca9c49edf40990cd84"
  },
  {
    "url": "assets/js/vuejs-paginate.3d07f62b.js",
    "revision": "4cb6f1aaafd78c3b901b3626310ba8f3"
  },
  {
    "url": "index.html",
    "revision": "99f5474951c868c3e651b70956d08a8b"
  },
  {
    "url": "post/how-to-join-mc/index.html",
    "revision": "a0ae5f02615b6a88b09ceb4b93748572"
  },
  {
    "url": "projects/index.html",
    "revision": "70965352531d8a109c921de13936bfdc"
  },
  {
    "url": "projects/serqet-bot/index.html",
    "revision": "916d36eb7a1becd4c6a17910fea3b3e3"
  },
  {
    "url": "tag/index.html",
    "revision": "6d21d88575e0c65ea737d453094d4a4f"
  },
  {
    "url": "tag/ديسكورد/index.html",
    "revision": "5d7043e22d0e3c16b93d27ab71366fc0"
  },
  {
    "url": "tag/ماين كرافت/index.html",
    "revision": "2d18938d9ef92d7d15c2a5e1c6ea8021"
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
