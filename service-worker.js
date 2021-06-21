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
    "revision": "5d7a957e5ee83c7d553065d7ebf9db2a"
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
    "url": "assets/js/14.f1cc15b7.js",
    "revision": "80d4084818ce445b60d09d6b1e877c83"
  },
  {
    "url": "assets/js/15.bb343657.js",
    "revision": "a2b6f724b9a789807346fabcb1404a03"
  },
  {
    "url": "assets/js/16.ac2b185e.js",
    "revision": "c3feca393289262fc749acd20c9ae222"
  },
  {
    "url": "assets/js/3.f48aba4e.js",
    "revision": "26aa99606774eec0ccd8b0039f2d4702"
  },
  {
    "url": "assets/js/4.eb8ff108.js",
    "revision": "c64fb00f78af859783967588428b68d5"
  },
  {
    "url": "assets/js/5.6e0d8c13.js",
    "revision": "e78597c01c9df0e7c7d206e6e6cb1dca"
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
    "url": "assets/js/app.05a7ffda.js",
    "revision": "ab848d05ca27120d44419ef5076d79fd"
  },
  {
    "url": "assets/js/vuejs-paginate.3d07f62b.js",
    "revision": "4cb6f1aaafd78c3b901b3626310ba8f3"
  },
  {
    "url": "index.html",
    "revision": "8233a255f146c9b1d607acd4986ba0ce"
  },
  {
    "url": "post/_17-update/index.html",
    "revision": "eadd1fc75460ded031dd8256e387730f"
  },
  {
    "url": "post/how-to-join-mc/index.html",
    "revision": "9c64e4ca3ce84166bdb963770a31e702"
  },
  {
    "url": "projects/index.html",
    "revision": "4ea189e10e6bd1ad67d04b4ff23c5f7e"
  },
  {
    "url": "projects/serqet-bot/index.html",
    "revision": "296f4dcea347b244a44c89827e70a204"
  },
  {
    "url": "tag/index.html",
    "revision": "3fbae678197d17edeb366a93e12f3f32"
  },
  {
    "url": "tag/ديسكورد/index.html",
    "revision": "84d423a3d2ca1a6e1272f7d76f6e639c"
  },
  {
    "url": "tag/ماين كرافت/index.html",
    "revision": "8bef27f0d909cc59ed4b62c8703d9c6d"
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
