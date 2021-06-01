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
    "url": "2019/10/14/blog-post/index.html",
    "revision": "f800fe8cf98852bc00ad2a413424a4ed"
  },
  {
    "url": "2019/10/14/test-markdown/index.html",
    "revision": "9394620388c874e755383c7f57bfcaa4"
  },
  {
    "url": "404.html",
    "revision": "d53eb677693112f8a0a5f9e959260dca"
  },
  {
    "url": "assets/css/0.styles.93907491.css",
    "revision": "aebcc05bf79bb487b57174543c71b008"
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
    "url": "assets/js/10.1fadba32.js",
    "revision": "4bc4975878d643c1e79244c68bf9b740"
  },
  {
    "url": "assets/js/11.07c6f091.js",
    "revision": "9dd75d625f21b8b04b0cfa8a253b90b4"
  },
  {
    "url": "assets/js/12.f38451b2.js",
    "revision": "70f691ec1e1fabe0d2422892706223cd"
  },
  {
    "url": "assets/js/13.952e334c.js",
    "revision": "57204b86cf46a9261939ceb2bfaa0802"
  },
  {
    "url": "assets/js/14.71c8a8f9.js",
    "revision": "10a4e14ee5496dec556b2a857d77f95b"
  },
  {
    "url": "assets/js/15.67a59567.js",
    "revision": "eebd928da4184601336cc302e0245b5a"
  },
  {
    "url": "assets/js/16.39d7d088.js",
    "revision": "85fa99e5c5ac2d78305b606cef3e3b7f"
  },
  {
    "url": "assets/js/17.ea6c3d85.js",
    "revision": "a3387d058e0c519a1b5f22b32d0300b8"
  },
  {
    "url": "assets/js/3.67d0dc0b.js",
    "revision": "144ccaf655237344e2088c6bb380b58a"
  },
  {
    "url": "assets/js/4.07df5710.js",
    "revision": "c7d0981d7562ed1a924f6676454dabb9"
  },
  {
    "url": "assets/js/5.4b9ed5e8.js",
    "revision": "16a3049eb6a192b98650ee4bdc670fcf"
  },
  {
    "url": "assets/js/6.d0621b43.js",
    "revision": "67bc6dc35efe495195d1893a717aa4ba"
  },
  {
    "url": "assets/js/7.24900499.js",
    "revision": "8bf36117da57f119536810597635bec6"
  },
  {
    "url": "assets/js/8.15661584.js",
    "revision": "4f9b89ee231f38b63b85aaa30ac5408d"
  },
  {
    "url": "assets/js/9.296f4d56.js",
    "revision": "a6069f5a50f51d1e378747300361e96b"
  },
  {
    "url": "assets/js/app.5cffa93b.js",
    "revision": "02b19611ed803ce4fa62c9527e32bae6"
  },
  {
    "url": "assets/js/vuejs-paginate.542164a2.js",
    "revision": "688ee9acf25a5af2dca8cd8ac2006e39"
  },
  {
    "url": "index.html",
    "revision": "a205c8f5feddf651f4e91f7a22db2d73"
  },
  {
    "url": "projects/index.html",
    "revision": "8bba9be0a349e6ce5d45ec598902bdcf"
  },
  {
    "url": "projects/project/index.html",
    "revision": "db15f050483dab3eed23443e1bc13476"
  },
  {
    "url": "tag/blog/index.html",
    "revision": "5c31ad1f432240be2da251a81111bdf5"
  },
  {
    "url": "tag/index.html",
    "revision": "b74b75e15369f5e636835d4815bb59bd"
  },
  {
    "url": "tag/python/index.html",
    "revision": "b21656d9a5061d3658424cbd1e92fd3d"
  },
  {
    "url": "tag/vue.js/index.html",
    "revision": "b69366cf2d397aa53c1b0f8d0ff5dd6d"
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
