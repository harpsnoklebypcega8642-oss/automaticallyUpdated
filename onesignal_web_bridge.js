(function () {
  const appId = '5c388e6f-badf-43a1-bc9f-b4f060e60e63';
  let initialized = null;
  let oneSignal = null;
  let currentExternalId = '';
  const sdkLoadTimeoutMs = 12000;

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

    const attempt = new Promise((resolve, reject) => {
      let settled = false;
      let script = null;
      let timeoutId = null;
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      const deferredInit = async function (sdk) {
        if (settled) return;
        try {
          await sdk.init({
            appId: appId,
            serviceWorkerPath: '/OneSignalSDKWorker.js',
            serviceWorkerParam: { scope: '/' },
            autoResubscribe: true,
            notifyButton: { enable: false },
          });
          oneSignal = sdk;
          settled = true;
          window.clearTimeout(timeoutId);
          resolve(asJson());
        } catch (error) {
          settled = true;
          window.clearTimeout(timeoutId);
          reject(error);
        }
      };
      window.OneSignalDeferred.push(deferredInit);

      function fail(error) {
        if (settled) return;
        settled = true;
        window.clearTimeout(timeoutId);
        const deferredIndex = window.OneSignalDeferred.indexOf(deferredInit);
        if (deferredIndex >= 0) window.OneSignalDeferred.splice(deferredIndex, 1);
        if (script) script.remove();
        reject(error);
      }

      script = document.createElement('script');
      script.src = 'https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js';
      script.async = true;
      script.onerror = () => fail(new Error('Unable to load OneSignal Web SDK'));
      document.head.appendChild(script);
      timeoutId = window.setTimeout(() => {
        fail(new Error('OneSignal Web SDK load timed out'));
      }, sdkLoadTimeoutMs);
    });

    initialized = attempt.catch((error) => {
      initialized = null;
      oneSignal = null;
      throw error;
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
    hideBootstrapSplash: () => {
      const splash = document.getElementById('xhj-bootstrap-splash');
      if (splash) {
        splash.classList.add('is-hidden');
        window.setTimeout(() => splash.remove(), 250);
      }
      window.dispatchEvent(new Event('xhj:flutter-first-frame'));
    },
  };
})();
