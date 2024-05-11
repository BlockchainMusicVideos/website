// The name of my cache
const cacheName = "my-pwa-shell-v1.0";
//The files I'm going to cache
const filesToCache = [
  "index.html",
  "src/css/*.css",
  "src/scripts/*.ts",
  "src/media/videos/*.mp4",
  "src/media/*",
];

self.addEventListener("install", (e: any) => {
  console.log("[ServiceWorker] - Install");
  e.waitUntil(
    (async () => {
      const cache = await caches.open(cacheName);
      console.log("[ServiceWorker] - Caching app shell");
      await cache.addAll(filesToCache);
    })()
  );
});

self.addEventListener("activate", (e: any) => {
  e.waitUntil(
    (async () => {
      // Get a list of all your caches in your app
      const keyList = await caches.keys();
      await Promise.all(
        keyList.map((key) => {
          console.log(key);
          /*
          Compare the name of your current cache you are iterating through
          and your new cache name
        */
          if (key !== cacheName) {
            console.log("[ServiceWorker] - Removing old cache", key);
            return caches.delete(key);
          }
        })
      );
    })()
  );
  e.waitUntil((self as any).clients.claim());
});
