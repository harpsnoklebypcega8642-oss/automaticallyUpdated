// Start Dart before the service worker can complete its install/activation
// work. The worker is still registered for offline use and future visits, but
// a first-time visitor is not held behind that lifecycle.
{{flutter_js}}
{{flutter_build_config}}
_flutter.loader.load();

if ('serviceWorker' in navigator) {
  var serviceWorkerVersion = {{flutter_service_worker_version}};
  navigator.serviceWorker
    .register('flutter_service_worker.js?v=' + serviceWorkerVersion)
    .catch(function (error) {
      // Offline support is progressive enhancement. A registration failure
      // must never stop the login screen from loading.
      console.warn('Unable to register Flutter service worker.', error);
    });
}
