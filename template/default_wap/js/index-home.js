(function (window) {
    'use strict';

    var initialized = new WeakSet();

    function initCarousel(carousel) {
        if (!carousel || initialized.has(carousel)) {
            return;
        }

        var track = carousel.querySelector('.xhj-carousel__track');
        var slides = carousel.querySelectorAll('.xhj-carousel__slide');
        var dotsHost = carousel.querySelector('.xhj-carousel__dots');
        var index = 0;
        var timer = null;
        var interval = parseInt(carousel.getAttribute('data-interval'), 10) || 4000;

        if (!track || !slides.length) {
            carousel.style.display = 'none';
            return;
        }

        carousel.style.display = '';

        if (slides.length === 1) {
            track.style.transform = 'translateX(0)';
            slides[0].classList.add('is-active');
            if (dotsHost) {
                dotsHost.innerHTML = '';
            }
            initialized.add(carousel);
            return;
        }

        if (!dotsHost) {
            return;
        }

        dotsHost.innerHTML = '';

        function render() {
            track.style.transform = 'translateX(-' + (index * 100) + '%)';

            slides.forEach(function (slide, slideIndex) {
                slide.classList.toggle('is-active', slideIndex === index);
            });

            dotsHost.querySelectorAll('button').forEach(function (button, buttonIndex) {
                button.classList.toggle('is-active', buttonIndex === index);
            });
        }

        function goTo(nextIndex) {
            index = (nextIndex + slides.length) % slides.length;
            render();
        }

        slides.forEach(function (_, slideIndex) {
            var button = document.createElement('button');
            button.type = 'button';
            button.setAttribute('aria-label', '切换到第' + (slideIndex + 1) + '张');
            button.addEventListener('click', function () {
                goTo(slideIndex);
                restart();
            });
            dotsHost.appendChild(button);
        });

        function start() {
            timer = window.setInterval(function () {
                goTo(index + 1);
            }, interval);
        }

        function stop() {
            if (timer) {
                window.clearInterval(timer);
                timer = null;
            }
        }

        function restart() {
            stop();
            start();
        }

        carousel.addEventListener('mouseenter', stop);
        carousel.addEventListener('mouseleave', start);
        carousel.addEventListener('touchstart', stop, { passive: true });
        carousel.addEventListener('touchend', start, { passive: true });

        render();
        start();
        initialized.add(carousel);
    }

    function initStaticCarousels() {
        document.querySelectorAll('[data-carousel]:not([data-banner-api])').forEach(function (carousel) {
            initCarousel(carousel);
        });
    }

    document.addEventListener('DOMContentLoaded', initStaticCarousels);

    window.XhjCarousel = {
        init: initCarousel
    };
})(window);
