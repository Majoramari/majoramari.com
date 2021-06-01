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
    "revision": "e29650e2b5307370f26180e9d5319809"
  },
  {
    "url": "assets/css/0.styles.39511da4.css",
    "revision": "2b26149865c4b939694d2da801d2cbff"
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
    "url": "assets/js/10.1a2e59a0.js",
    "revision": "f121aff2e3d06604b84e081054e830a0"
  },
  {
    "url": "assets/js/11.8ca1d78e.js",
    "revision": "f5e5b20755b750c4e4728726dca30299"
  },
  {
    "url": "assets/js/12.987b1abb.js",
    "revision": "5e170f4543e3e90cb29b5b4e8ef0ecb1"
  },
  {
    "url": "assets/js/13.0be4541f.js",
    "revision": "bb81d484c2254fe3aede392d67d90400"
  },
  {
    "url": "assets/js/14.af917346.js",
    "revision": "5ee03eeaea9f8afd2b69bc5284e95f24"
  },
  {
    "url": "assets/js/15.973983b8.js",
    "revision": "e97f0b49152797bf2ba341bd384d9e6c"
  },
  {
    "url": "assets/js/16.18207f26.js",
    "revision": "2eedba48927e6c9dda396bd86df64c5c"
  },
  {
    "url": "assets/js/3.64de4868.js",
    "revision": "ce73aef8d324ab37a01879155f401ac3"
  },
  {
    "url": "assets/js/4.9446a38b.js",
    "revision": "c25becdbfad10eda9ca12e00d0fbb935"
  },
  {
    "url": "assets/js/5.24dce097.js",
    "revision": "e78597c01c9df0e7c7d206e6e6cb1dca"
  },
  {
    "url": "assets/js/6.7172a159.js",
    "revision": "d3fcfeec9596e0c7ce67b6056a1ba17e"
  },
  {
    "url": "assets/js/7.0992cad6.js",
    "revision": "c8e42d7c8beda1ca0d243bb37dcd00da"
  },
  {
    "url": "assets/js/8.809d0053.js",
    "revision": "d496b7237cdc61b16551e214c72513e7"
  },
  {
    "url": "assets/js/9.41d9c555.js",
    "revision": "5a05a41b049e0fbabcf733ff07849497"
  },
  {
    "url": "assets/js/app.db2787ba.js",
    "revision": "7a992c43bbc15f1a3a9ce283347a4799"
  },
  {
    "url": "assets/js/vuejs-paginate.3d07f62b.js",
    "revision": "4cb6f1aaafd78c3b901b3626310ba8f3"
  },
  {
    "url": "index.html",
    "revision": "69eb7d7c16ef5ad69e0987004516640c"
  },
  {
    "url": "post/blog-post/index.html",
    "revision": "00702a0919eff8e5f81fa2c7ae29affb"
  },
  {
    "url": "post/test-markdown/index.html",
    "revision": "6f40c9bdf9cc177ed67bc20164a1cf2d"
  },
  {
    "url": "projects/index.html",
    "revision": "8361a487b4413bf313a7cbacf6d19bc8"
  },
  {
    "url": "projects/project/index.html",
    "revision": "a70779341d8dafe6d8a21466b20eb697"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "51d3e5480412e6ab9717c515378a4453"
  },
  {
    "url": "tag/index.html",
    "revision": "06c0d6904a53cc49022139a99451fa70"
  },
  {
    "url": "tag/python/index.html",
    "revision": "1a5f3a5b4d0c284bc8bc620416fe39da"
  },
  {
    "url": "tag/vue.js/index.html",
    "revision": "254133e28cc23b9b01740cd59f7a8000"
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
