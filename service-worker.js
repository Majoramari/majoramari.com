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
    "revision": "c7d75411513d2b4e064c86b33c205ad9"
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
    "url": "assets/js/14.f4d3bb52.js",
    "revision": "4af75a53cf8fb8213d823399c12fcee3"
  },
  {
    "url": "assets/js/15.59262958.js",
    "revision": "08c635c92546f0b8b2ee8c050fb30dd3"
  },
  {
    "url": "assets/js/16.797ad110.js",
    "revision": "7e2757b61c1f7332413f8eaeb54494b3"
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
    "url": "assets/js/app.0d05e634.js",
    "revision": "be6d6391030baabc4bf19bcd7f56f839"
  },
  {
    "url": "assets/js/vuejs-paginate.3d07f62b.js",
    "revision": "4cb6f1aaafd78c3b901b3626310ba8f3"
  },
  {
    "url": "index.html",
    "revision": "c0b3340d113772f97d565b3855fd6378"
  },
  {
    "url": "post/_1-17-update/index.html",
    "revision": "cf3c46f4eae03d42ffee8d23e01a93cf"
  },
  {
    "url": "post/how-to-join-mc/index.html",
    "revision": "33115a2411faab19c6bf72b7d5f9d996"
  },
  {
    "url": "projects/index.html",
    "revision": "30f549ba97ebd8305545c3b1161addcc"
  },
  {
    "url": "projects/serqet-bot/index.html",
    "revision": "eeca6414f05926b42b1bcbd973a36bcf"
  },
  {
    "url": "tag/index.html",
    "revision": "2ab2314d9ebf1c4c1b9bb416895a61d2"
  },
  {
    "url": "tag/ديسكورد/index.html",
    "revision": "0292fe32f4cbf1561c5f7fda0a7038f8"
  },
  {
    "url": "tag/ماين كرافت/index.html",
    "revision": "9826f1252cc6e4fda22f6dc7ff3b155e"
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
