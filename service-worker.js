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
    "revision": "3c9041259e3a439f3881224f99cb0a93"
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
    "url": "assets/js/14.c3fe61c4.js",
    "revision": "de67f9ed0c8de5dd9c0b37ec17997cf6"
  },
  {
    "url": "assets/js/15.78f96bd9.js",
    "revision": "e55cfe7d458dcba8aaa7ee4a81d44cd9"
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
    "url": "assets/js/app.4c8cde2f.js",
    "revision": "99e7d1c5dc06eea058417c3d8212354e"
  },
  {
    "url": "assets/js/vuejs-paginate.3d07f62b.js",
    "revision": "4cb6f1aaafd78c3b901b3626310ba8f3"
  },
  {
    "url": "index.html",
    "revision": "b62fa8913c86435e66e9dfe66b901a05"
  },
  {
    "url": "post/how-to-join-mc/index.html",
    "revision": "cd09e77840ecafedc1739c07c834ef85"
  },
  {
    "url": "post/update-17/index.html",
    "revision": "66e360a87aea6c35fa93b6c4b8efabcc"
  },
  {
    "url": "projects/index.html",
    "revision": "ff50b22ea15cd559097c3593e6675545"
  },
  {
    "url": "projects/serqet-bot/index.html",
    "revision": "f3fd86adf657e3c175b15e4ac469c75d"
  },
  {
    "url": "tag/index.html",
    "revision": "f3701f755aeaa2fe9cd3da8f78767b25"
  },
  {
    "url": "tag/ديسكورد/index.html",
    "revision": "a48adb324e80b0bfd7ebf06033ec2ef2"
  },
  {
    "url": "tag/ماين كرافت/index.html",
    "revision": "b2299f3973b10d7375c86f2a6b6f8803"
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
