(function (window) {
    'use strict';

    var PopopGrowth = window.PopopGrowth || {};

    PopopGrowth.config = PopopGrowth.config || {
        enabled: true,
        limitSeconds: 15 * 60,
        uaToken: 'Popop_Client',
        downloadUrl: 'https://xhj.im',
        appName: '小火箭',
        title: '试看已结束',
        closable: true,
        replayWithinLimit: true,
        showModalOnReplay: true,
        showBarOnDismiss: true
    };

    PopopGrowth.isInsideApp = function () {
        if (!PopopGrowth.config.enabled) {
            return true;
        }
        try {
            if (typeof window.PopopApp !== 'undefined') {
                return true;
            }
            if (typeof top.PopopApp !== 'undefined') {
                return true;
            }
        } catch (e) {}
        var token = PopopGrowth.config.uaToken || 'Popop_Client';
        return navigator.userAgent.indexOf(token) > -1;
    };

    PopopGrowth.showModal = function () {
        var modal = document.getElementById('app-growth-modal');
        if (!modal) {
            return;
        }
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    };

    PopopGrowth.hideModal = function () {
        if (PopopGrowth.config.closable === false) {
            return;
        }
        var modal = document.getElementById('app-growth-modal');
        if (!modal) {
            return;
        }
        modal.style.display = 'none';
        document.body.style.overflow = '';
        if (PopopGrowth.config.showBarOnDismiss) {
            PopopGrowth.showBar();
        }
    };

    PopopGrowth.showBar = function () {
        var bar = document.getElementById('app-growth-bar');
        if (bar) {
            bar.style.display = 'block';
        }
    };

    PopopGrowth.hideBar = function () {
        var bar = document.getElementById('app-growth-bar');
        if (bar) {
            bar.style.display = 'none';
        }
    };

    PopopGrowth.goDownload = function () {
        window.location.href = PopopGrowth.config.downloadUrl || 'https://xhj.im';
    };

    PopopGrowth.notifyLimitReached = function () {
        var cfg = PopopGrowth.config;
        if (!cfg.showModalOnReplay && PopopGrowth._hasShownModal) {
            PopopGrowth.showBar();
            return;
        }
        PopopGrowth._hasShownModal = true;
        PopopGrowth.showModal();
    };

    window.addEventListener('message', function (e) {
        if (e.data && e.data.type === 'popop:trysee-limit') {
            PopopGrowth.notifyLimitReached();
        }
    });

    window.PopopGrowth = PopopGrowth;
})(window);
