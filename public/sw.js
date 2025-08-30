/**
 * Service Worker for BoostDevSpeed
 * Implements advanced caching strategies for optimal performance
 */

const CACHE_VERSION = 'v1.0.0';
const CACHE_NAME = `boostdevspeed-${CACHE_VERSION}`;
const RUNTIME_CACHE = `runtime-${CACHE_VERSION}`;

// Assets to cache immediately (critical resources)
const PRECACHE_ASSETS = [
  '/',
  '/blog',
  '/tools',
  '/manifest.json',
  '/icon.svg',
  '/favicon-32.svg',
  '/favicon-16.svg',
  '/apple-icon.svg',
];

// Cache strategies for different asset types
const CACHE_STRATEGIES = {
  // Cache first, network fallback (for static assets)
  cacheFirst: [
    /\.(?:png|jpg|jpeg|svg|gif|webp|avif|ico)$/,
    /\.(?:woff|woff2|ttf|otf|eot)$/,
    /\/_next\/static\//,
    /\/fonts\//,
  ],
  
  // Network first, cache fallback (for HTML pages)
  networkFirst: [
    /\/$/,
    /\.html$/,
    /\/api\//,
  ],
  
  // Stale while revalidate (for CSS and JS)
  staleWhileRevalidate: [
    /\.(?:js|css)$/,
    /\/_next\//,
  ],
};

// Install event - precache critical assets
self.addEventListener('install', (event) => {
  console.log('[ServiceWorker] Installing...');
  
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('[ServiceWorker] Precaching assets');
        return cache.addAll(PRECACHE_ASSETS);
      })
      .then(() => {
        console.log('[ServiceWorker] Skip waiting');
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('[ServiceWorker] Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== CACHE_NAME && cacheName !== RUNTIME_CACHE;
            })
            .map((cacheName) => {
              console.log('[ServiceWorker] Deleting old cache:', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('[ServiceWorker] Claiming clients');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }
  
  // Skip chrome-extension and other non-http(s) protocols
  if (!url.protocol.startsWith('http')) {
    return;
  }
  
  // Determine caching strategy
  let strategy = null;
  
  // Check cache-first patterns
  for (const pattern of CACHE_STRATEGIES.cacheFirst) {
    if (pattern.test(url.pathname)) {
      strategy = 'cacheFirst';
      break;
    }
  }
  
  // Check network-first patterns
  if (!strategy) {
    for (const pattern of CACHE_STRATEGIES.networkFirst) {
      if (pattern.test(url.pathname)) {
        strategy = 'networkFirst';
        break;
      }
    }
  }
  
  // Check stale-while-revalidate patterns
  if (!strategy) {
    for (const pattern of CACHE_STRATEGIES.staleWhileRevalidate) {
      if (pattern.test(url.pathname)) {
        strategy = 'staleWhileRevalidate';
        break;
      }
    }
  }
  
  // Default to network-first for everything else
  if (!strategy) {
    strategy = 'networkFirst';
  }
  
  // Apply the appropriate strategy
  switch (strategy) {
    case 'cacheFirst':
      event.respondWith(cacheFirstStrategy(request));
      break;
    case 'networkFirst':
      event.respondWith(networkFirstStrategy(request));
      break;
    case 'staleWhileRevalidate':
      event.respondWith(staleWhileRevalidateStrategy(request));
      break;
  }
});

// Cache-first strategy
async function cacheFirstStrategy(request) {
  const cache = await caches.open(CACHE_NAME);
  const cachedResponse = await cache.match(request);
  
  if (cachedResponse) {
    return cachedResponse;
  }
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    console.error('[ServiceWorker] Fetch failed:', error);
    throw error;
  }
}

// Network-first strategy
async function networkFirstStrategy(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  
  try {
    const networkResponse = await fetch(request);
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }
    throw error;
  }
}

// Stale-while-revalidate strategy
async function staleWhileRevalidateStrategy(request) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cachedResponse = await cache.match(request);
  
  const fetchPromise = fetch(request).then((networkResponse) => {
    if (networkResponse.ok) {
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  });
  
  return cachedResponse || fetchPromise;
}

// Handle background sync for offline support
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-analytics') {
    event.waitUntil(syncAnalytics());
  }
});

async function syncAnalytics() {
  // Sync any queued analytics events when back online
  console.log('[ServiceWorker] Syncing analytics...');
}

// Handle push notifications (if needed in future)
self.addEventListener('push', (event) => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/icon.svg',
    badge: '/badge.svg',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };
  
  event.waitUntil(
    self.registration.showNotification('BoostDevSpeed', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow('https://boostdevspeed.com')
  );
});

// Message handler for cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            return caches.delete(cacheName);
          })
        );
      })
    );
  }
});
