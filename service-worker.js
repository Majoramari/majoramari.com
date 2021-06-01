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
    "revision": "d2a73dd65ecd39c92b9fbf565229aa42"
  },
  {
    "url": "assets/css/0.styles.4c3d2431.css",
    "revision": "bfbb7196e922dbf83fd9b55ec4769a91"
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
    "url": "assets/js/14.756e14c0.js",
    "revision": "52d85cf98d76c9a7200c69f986c03d7f"
  },
  {
    "url": "assets/js/15.828c8b4c.js",
    "revision": "b32402b389208ed55b16f112d0f5e1de"
  },
  {
    "url": "assets/js/3.35007d4e.js",
    "revision": "26aa99606774eec0ccd8b0039f2d4702"
  },
  {
    "url": "assets/js/4.169470d0.js",
    "revision": "300907837bbf73e02ae40dcf271df5d8"
  },
  {
    "url": "assets/js/5.12d6c576.js",
    "revision": "122aab989d62428fff8578d6a56148e6"
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
    "url": "assets/js/9.689922f4.js",
    "revision": "a7f0558698cf3c328df1dd7e4a4d1b31"
  },
  {
    "url": "assets/js/app.446744ce.js",
    "revision": "6d8746eebd9b1bd9bb92dab5350d9c7f"
  },
  {
    "url": "assets/js/vuejs-paginate.3d07f62b.js",
    "revision": "4cb6f1aaafd78c3b901b3626310ba8f3"
  },
  {
    "url": "index.html",
    "revision": "76965117bca7d42cc62cdc0054eeab67"
  },
  {
    "url": "post/how-to-join-mc/index.html",
    "revision": "c0e2967b6ab8b189edbdf826e9a6929a"
  },
  {
    "url": "projects/index.html",
    "revision": "e6de25ea79f2e2ede51ce1056f8e362e"
  },
  {
    "url": "projects/project/index.html",
    "revision": "de3a490c583fcc45f2d32a7784a1711d"
  },
  {
    "url": "tag/index.html",
    "revision": "b489a7f9ad224b5123f269adde043d97"
  },
  {
    "url": "tag/ديسكورد/index.html",
    "revision": "b1620b7880ffc2e2df0a8654c1180c6b"
  },
  {
    "url": "tag/ماين كرافت/index.html",
    "revision": "f7ecfc35b38e5fbdf8642d12cd4929ab"
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
