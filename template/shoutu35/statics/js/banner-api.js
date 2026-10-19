(function (window) {
    'use strict';

    var XhjBanner = window.XhjBanner || {};

    XhjBanner.config = {
        externalApi: 'https://app.xhj.im/api/v1/common/explore-list',
        imageBase: 'https://app.xhj.im',
        proxyApi: (window.maccms && window.maccms.path ? window.maccms.path : '') + '/api.php/explore/banner_list/'
    };

    function isValidUrl(url) {
        return typeof url === 'string' && /^https?:\/\//i.test(url.trim());
    }

    function resolveImage(image) {
        if (!image) {
            return '';
        }
        if (/^https?:\/\//i.test(image)) {
            return image;
        }
        return XhjBanner.config.imageBase.replace(/\/$/, '') + '/' + String(image).replace(/^\//, '');
    }

    function normalizeUrl(url) {
        return isValidUrl(url) ? url.trim() : '';
    }

    function filterBannerItems(items) {
        if (!Array.isArray(items)) {
            return [];
        }

        return items
            .filter(function (item) {
                return item
                    && item.position === 'idxBanner'
                    && item.image
                    && String(item.image).trim() !== '';
            })
            .sort(function (a, b) {
                return (parseInt(b.sort, 10) || 0) - (parseInt(a.sort, 10) || 0);
            })
            .map(function (item) {
                return {
                    id: parseInt(item.id, 10) || 0,
                    title: item.title || '',
                    image: resolveImage(item.image),
                    url: normalizeUrl(item.url || '')
                };
            });
    }

    function parseItemsPayload(data) {
        if (!data || typeof data !== 'object') {
            return [];
        }
        if (Array.isArray(data.items)) {
            return data.items;
        }
        if (data.data && Array.isArray(data.data.items)) {
            return data.data.items;
        }
        if (data.code === 1 && Array.isArray(data.list)) {
            return data.list;
        }
        return [];
    }

    XhjBanner.openExternal = function (url) {
        if (!isValidUrl(url)) {
            return;
        }
        try {
            if (window.PopopApp) {
                if (typeof window.PopopApp.openExternal === 'function') {
                    window.PopopApp.openExternal(url);
                    return;
                }
                if (typeof window.PopopApp.openBrowser === 'function') {
                    window.PopopApp.openBrowser(url);
                    return;
                }
                if (typeof window.PopopApp.openUrl === 'function') {
                    window.PopopApp.openUrl(url);
                    return;
                }
            }
        } catch (e) {}
        window.open(url, '_blank');
    };

    function fetchExternal() {
        return fetch(XhjBanner.config.externalApi, {
            method: 'POST',
            mode: 'cors',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json'
            },
            body: '{}'
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            return filterBannerItems(parseItemsPayload(data));
        });
    }

    function fetchProxy() {
        return fetch(XhjBanner.config.proxyApi, {
            method: 'GET',
            credentials: 'same-origin'
        }).then(function (response) {
            return response.json();
        }).then(function (data) {
            if (data && data.code === 1 && Array.isArray(data.list) && data.list.length) {
                return data.list;
            }
            return [];
        });
    }

    function fetchBannerList() {
        return fetchExternal().catch(function () {
            return [];
        }).then(function (items) {
            if (items.length) {
                return items;
            }
            return fetchProxy();
        }).catch(function () {
            return [];
        });
    }

    function renderCarousel(carousel, items) {
        var track = carousel.querySelector('.xhj-carousel__track');
        var dotsHost = carousel.querySelector('.xhj-carousel__dots');
        if (!track) {
            return;
        }

        track.innerHTML = '';
        if (dotsHost) {
            dotsHost.innerHTML = '';
        }

        if (!items.length) {
            carousel.style.display = 'none';
            return;
        }

        carousel.style.display = '';
        carousel.classList.remove('is-loading');

        items.forEach(function (item, index) {
            var slide = document.createElement('div');
            slide.className = 'xhj-carousel__slide' + (index === 0 ? ' is-active' : '');

            var img = document.createElement('img');
            img.src = item.image;
            img.alt = item.title || '轮播图';
            slide.appendChild(img);

            if (isValidUrl(item.url)) {
                slide.setAttribute('data-url', item.url);
                slide.setAttribute('data-title', item.title || '');
                slide.classList.add('is-clickable');
                slide.addEventListener('click', function () {
                    XhjBanner.openExternal(item.url);
                });
            }

            track.appendChild(slide);
        });
    }

    function initAll() {
        var carousels = document.querySelectorAll('[data-banner-api]');
        if (!carousels.length) {
            return;
        }

        carousels.forEach(function (carousel) {
            carousel.classList.add('is-loading');
        });

        fetchBannerList().then(function (items) {
            carousels.forEach(function (carousel) {
                renderCarousel(carousel, items);
                if (window.XhjCarousel && typeof window.XhjCarousel.init === 'function') {
                    window.XhjCarousel.init(carousel);
                }
            });
        });
    }

    document.addEventListener('DOMContentLoaded', initAll);

    window.XhjBanner = XhjBanner;
})(window);
