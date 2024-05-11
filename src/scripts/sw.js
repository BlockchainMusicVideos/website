const version = "v1";

const addResourcesToCache = async (resources) => {
  const cache = await caches.open(version);
  await cache.addAll(resources);
};

self.addEventListener("install", (event) => {
  console.log(`${version} installing...`);

  event.waitUntil(
    addResourcesToCache([
      "index.html",
      "src/css/*.css",
      "src/scripts/*.js",
      "src/media/videos/*.mp4",
      "src/media/*",
    ])
  );
});

const putInCache = async (request, response) => {
  const cache = await caches.open(version);

  if (request.method !== "GET") {
    console.log("Cannot cache non-GET requests");
    return;
  }

  await cache.put(request, response);
};

const cacheFirst = async (request) => {
  const responseFromCache = await caches.match(request);

  if (responseFromCache) {
    return responseFromCache;
  }

  const responseFromNetwork = await fetch(request);

  // we need to clone the response because the response stream can only be read once
  putInCache(request, responseFromNetwork.clone());

  return responseFromNetwork;
};

self.addEventListener("fetch", (event) => {
  event.respondWith(cacheFirst(event.request));
});
