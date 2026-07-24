(function () {
  const DEFAULT_LOCALE = 'zh-CN'
  const LOCALE_STORAGE_KEY = 'xhj_locale'

  function normalizeLocale(value) {
    return typeof value === 'string' && value.toLowerCase().startsWith('zh') ? 'zh-CN' : 'en-US'
  }

  function readLocale() {
    const queryLocale = new URLSearchParams(window.location.search).get('lang')

    if (queryLocale) {
      return normalizeLocale(queryLocale)
    }

    try {
      const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY)

      if (storedLocale === 'zh-CN' || storedLocale === 'en-US') {
        return storedLocale
      }
    } catch {
      return DEFAULT_LOCALE
    }

    return normalizeLocale(window.navigator.language || DEFAULT_LOCALE)
  }

  function persistLocale(locale) {
    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, locale)
    } catch {
      // Ignore storage failures to keep static pages usable.
    }
  }

  function updateCurrentUrl(locale) {
    const url = new URL(window.location.href)
    url.searchParams.set('lang', locale)
    window.history.replaceState({}, '', `${url.pathname}${url.search}${url.hash}`)
  }

  function withLocaleHref(href, locale) {
    const url = new URL(href, window.location.origin)
    url.searchParams.set('lang', locale)
    return `${url.pathname}${url.search}${url.hash}`
  }

  window.createXhjPageI18n = function createXhjPageI18n(config) {
    let locale = readLocale()

    function apply() {
      const content = config.messages[locale]
      document.documentElement.lang = locale
      persistLocale(locale)
      updateCurrentUrl(locale)
      config.render(content, {
        locale,
        withLocaleHref: (href) => withLocaleHref(href, locale),
        getQueryParam: (name) => new URLSearchParams(window.location.search).get(name),
        switchLabel: locale === 'zh-CN' ? '英文' : 'Chinese',
        switchAriaLabel: locale === 'zh-CN' ? '切换到英文' : 'Switch to Chinese',
      })
    }

    function toggle() {
      locale = locale === 'zh-CN' ? 'en-US' : 'zh-CN'
      apply()
    }

    window.addEventListener('DOMContentLoaded', () => {
      const toggleButton = document.getElementById('lang-toggle')

      if (toggleButton) {
        toggleButton.addEventListener('click', toggle)
      }

      apply()
    })
  }
})()
