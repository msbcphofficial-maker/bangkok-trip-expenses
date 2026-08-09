// Minimal service worker, present only so browsers treat this as an
// installable app. Intentionally does not cache anything — this app relies
// on live Supabase data, and stale cached data would show wrong balances.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
