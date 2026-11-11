(function () {
  const appId = '5c388e6f-badf-43a1-bc9f-b4f060e60e63';
  let initialized = null;
  let oneSignal = null;
  let currentExternalId = '';

  function isIos() {
    return /iphone|ipad|ipod/i.test(navigator.userAgent || '');
  }

  function isStandalone() {
    return Boolean(navigator.standalone) ||
      (typeof window.matchMedia === 'function' &&
        window.matchMedia('(display-mode: standalone)').matches);
  }

  function status() {
    const subscription = oneSignal && oneSignal.User && oneSignal.User.PushSubscription;
    const permission = oneSignal && oneSignal.Notifications
      ? oneSignal.Notifications.permission
      : (typeof Notification === 'undefined' ? 'default' : Notification.permission);
    return {
      supported: window.isSecureContext && 'serviceWorker' in navigator && 'Notification' in window,
      isIos: isIos(),
      standalone: isStandalone(),
      canRequestPermission: !isIos() || isStandalone(),
      permission: permission || 'default',
      optedIn: Boolean(subscription && subscription.optedIn),
      subscriptionId: subscription && subscription.id ? String(subscription.id) : '',
      externalId: currentExternalId,
    };
  }

  function asJson() {
    return JSON.stringify(status());
  }

  function initialize() {
    if (initialized) return initialized;

    initialized = new Promise((resolve, reject) => {
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      window.OneSignalDeferred.push(async function (sdk) {
        try {
          await sdk.init({
            appId: appId,
            serviceWorkerPath: '/OneSignalSDKWorker.js',
            serviceWorkerParam: { scope: '/' },
            autoResubscribe: true,
            notifyButton: { enable: false },
          });
          oneSignal = sdk;
          resolve(asJson());
        } catch (error) {
          reject(error);
        }
      });

      const script = document.createElement('script');
      script.src = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
      script.defer = true;
      script.onerror = () => reject(new Error('Unable to load OneSignal Web SDK'));
      document.head.appendChild(script);
    });

    return initialized;
  }

  async function withSdk(action) {
    await initialize();
    await action(oneSignal);
    return asJson();
  }

  async function syncBadge(count) {
    const normalized = Math.max(0, Math.min(99999, Number(count) || 0));
    if (typeof navigator.setAppBadge === 'function') {
      if (normalized > 0) await navigator.setAppBadge(normalized);
      else if (typeof navigator.clearAppBadge === 'function') await navigator.clearAppBadge();
    }

    const registration = await navigator.serviceWorker.getRegistration('/');
    if (registration && registration.active) {
      registration.active.postMessage({ type: 'xhj:badge-sync', count: normalized });
    }
  }

  window.__xhjOneSignal = {
    initialize,
    getStatus: async () => {
      try {
        await initialize();
      } catch (_) {
        // Return the browser-visible state so Settings can surface the failure.
      }
      return asJson();
    },
    requestPermission: async () => {
      if (isIos() && !isStandalone()) return asJson();
      return withSdk(async (sdk) => sdk.Notifications.requestPermission());
    },
    login: (externalId) => withSdk(async (sdk) => {
      if (externalId) {
        await sdk.login(String(externalId));
        currentExternalId = String(externalId);
      }
    }),
    logout: () => withSdk(async (sdk) => {
      await sdk.logout();
      currentExternalId = '';
    }),
    syncBadge,
  };
})();
