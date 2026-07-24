(function () {
  const IOS_AUTO_INSTALL_QUERY_KEY = 'autoInstall'
  const CHANNEL_QUERY_KEY = 'channel'
  const MANIFEST_PATHS = Object.freeze({
    '1': '/manifest_channel1.plist',
    '2': '/manifest_channel2.plist',
    '3': '/manifest_channel3.plist',
  })

  let hasHandledAutoInstall = false

  function getCurrentChannel() {
    return new URLSearchParams(window.location.search).get(CHANNEL_QUERY_KEY) || '1'
  }

  function getManifestPath(channel) {
    return MANIFEST_PATHS[channel] || '/manifest.plist'
  }

  function buildManifestUrl(channel) {
    return new URL(getManifestPath(channel), window.location.origin).toString()
  }

  function buildInstallUrl(channel) {
    return `itms-services://?action=download-manifest&url=${encodeURIComponent(buildManifestUrl(channel))}`
  }

  function buildCurrentInstallPageUrl(channel, locale, autoInstall) {
    const url = new URL(window.location.href)
    url.searchParams.set(CHANNEL_QUERY_KEY, channel)
    url.searchParams.set('lang', locale)

    if (autoInstall) {
      url.searchParams.set(IOS_AUTO_INSTALL_QUERY_KEY, 'true')
    } else {
      url.searchParams.delete(IOS_AUTO_INSTALL_QUERY_KEY)
    }

    return url.toString()
  }

  function isIOSDevice() {
    const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera || ''
    const isLegacyIOS = /iPad|iPhone|iPod/i.test(userAgent)
    const isModernIpad = window.navigator.platform === 'MacIntel' && window.navigator.maxTouchPoints > 1

    return (isLegacyIOS || isModernIpad) && !window.MSStream
  }

  function detectBrowserEnvironment() {
    const userAgent = window.navigator.userAgent || window.navigator.vendor || window.opera || ''
    const vendor = window.navigator.vendor || ''
    const isIOS = isIOSDevice()
    const browserFlags = {
      isChrome: /CriOS/i.test(userAgent),
      isFirefox: /FxiOS/i.test(userAgent),
      isUC: /UCBrowser/i.test(userAgent),
      isQQ: /(QQBrowser|MQQBrowser|QQ\/)/i.test(userAgent),
      isWeChat: /MicroMessenger/i.test(userAgent),
      isEdge: /EdgiOS/i.test(userAgent),
      isOpera: /OPiOS/i.test(userAgent),
    }
    const isSafari =
      isIOS &&
      !Object.values(browserFlags).some(Boolean) &&
      /apple/i.test(vendor) &&
      /Safari/i.test(userAgent) &&
      /Version/i.test(userAgent)

    let browserName = 'Browser'

    if (isSafari) {
      browserName = 'Safari'
    } else if (browserFlags.isWeChat) {
      browserName = 'WeChat'
    } else if (browserFlags.isQQ) {
      browserName = 'QQ Browser'
    } else if (browserFlags.isChrome) {
      browserName = 'Chrome'
    } else if (browserFlags.isFirefox) {
      browserName = 'Firefox'
    } else if (browserFlags.isEdge) {
      browserName = 'Edge'
    } else if (browserFlags.isOpera) {
      browserName = 'Opera'
    } else if (browserFlags.isUC) {
      browserName = 'UC Browser'
    }

    return {
      isIOS,
      isSafari,
      browserName,
    }
  }

  function triggerIOSInstall(channel) {
    const link = document.createElement('a')
    link.href = buildInstallUrl(channel)
    link.style.display = 'none'
    document.body.appendChild(link)
    link.click()

    window.setTimeout(() => {
      if (link.parentNode) {
        link.parentNode.removeChild(link)
      }
    }, 120)
  }

  function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.setAttribute('readonly', 'true')
    textArea.style.position = 'fixed'
    textArea.style.opacity = '0'
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }

  async function copyCurrentLink(locale, statusMessage) {
    const installPageUrl = buildCurrentInstallPageUrl(getCurrentChannel(), locale, true)

    if (window.navigator.clipboard?.writeText) {
      try {
        await window.navigator.clipboard.writeText(installPageUrl)
        return true
      } catch {
        // Fall back to textarea copy below when clipboard permissions are unavailable.
      }
    }

    try {
      fallbackCopyToClipboard(installPageUrl)
      return true
    } catch {
      return false
    } finally {
      if (statusMessage) {
        setStatus(statusMessage)
      }
    }
  }

  function openCurrentPageInSafari(channel, locale) {
    if (!isIOSDevice()) {
      return false
    }

    const currentUrl = buildCurrentInstallPageUrl(channel, locale, true)
    const urlWithoutProtocol = currentUrl.replace(/^https?:\/\//i, '')

    try {
      window.location.href = `x-safari-https://${urlWithoutProtocol}`
      return true
    } catch {
      try {
        window.location.href = `safari-https://${urlWithoutProtocol}`
        return true
      } catch {
        window.location.href = `safari://${currentUrl}`
        return true
      }
    }
  }

  function setStatus(message) {
    const statusNode = document.getElementById('status-message')

    if (statusNode) {
      statusNode.textContent = message || ''
    }
  }

  function createContent(environment, content, channel) {
    if (environment.isIOS && environment.isSafari) {
      return {
        channelLabel: content.channelLabel(channel),
        title: content.installReadyTitle,
        description: content.installReadyDescription(environment),
        envBanner: content.envBanner(environment),
        steps: content.readySteps,
        note: content.readyNote,
        primaryLabel: content.installNowLabel,
        copyLabel: content.copyLinkLabel,
        openSafariLabel: content.openSafariLabel,
        showOpenSafari: false,
        mode: 'ready',
      }
    }

    if (environment.isIOS) {
      return {
        channelLabel: content.channelLabel(channel),
        title: content.installSwitchTitle,
        description: content.installSwitchDescription(environment),
        envBanner: content.envBanner(environment),
        steps: content.switchSteps,
        note: content.switchNote,
        primaryLabel: content.tryInstallLabel,
        copyLabel: content.copyLinkLabel,
        openSafariLabel: content.openSafariLabel,
        showOpenSafari: true,
        mode: 'switch',
      }
    }

    return {
      channelLabel: content.channelLabel(channel),
      title: content.installDesktopTitle,
      description: content.installDesktopDescription,
      envBanner: content.desktopBanner,
      steps: content.desktopSteps,
      note: content.desktopNote,
      primaryLabel: content.copyPhoneLinkLabel,
      copyLabel: content.copyLinkLabel,
      openSafariLabel: content.openSafariLabel,
      showOpenSafari: false,
      mode: 'desktop',
    }
  }

  function bindActions(pageContent, locale, content) {
    const channel = getCurrentChannel()
    const primaryButton = document.getElementById('primary-action')
    const copyButton = document.getElementById('copy-link')
    const openSafariButton = document.getElementById('open-safari')
    const environment = detectBrowserEnvironment()

    primaryButton.onclick = async function () {
      if (pageContent.mode === 'desktop') {
        const copied = await copyCurrentLink(locale)
        setStatus(copied ? content.copySuccessStatus : content.copyFailureStatus)
        return
      }

      if (primaryButton.disabled) {
        return
      }

      let downloadSuccess = false
      let timeoutId = null
      let handlersRemoved = false
      const originalText = primaryButton.textContent
      const isSafari = environment.isSafari

      const setLoadingState = function () {
        primaryButton.disabled = true
        primaryButton.style.opacity = '0.7'
        primaryButton.style.cursor = 'not-allowed'
        primaryButton.textContent = content.installPendingLabel
      }

      const resetButtonState = function () {
        primaryButton.disabled = false
        primaryButton.style.opacity = ''
        primaryButton.style.cursor = ''
        primaryButton.textContent = originalText
      }

      const cleanup = function () {
        if (!handlersRemoved) {
          document.removeEventListener('visibilitychange', visibilityHandler)
          window.removeEventListener('blur', blurHandler)
          handlersRemoved = true
        }

        if (timeoutId) {
          window.clearTimeout(timeoutId)
          timeoutId = null
        }
      }

      const checkDownloadSuccess = function () {
        if (!document.hidden) {
          return
        }

        downloadSuccess = true
        cleanup()
        resetButtonState()
      }

      const visibilityHandler = function () {
        checkDownloadSuccess()
      }

      const blurHandler = function () {
        checkDownloadSuccess()
      }

      const promptFallback = function () {
        if (!isSafari) {
          if (window.confirm(content.unsupportedBrowserConfirm)) {
            openCurrentPageInSafari(channel, locale)
          }

          return
        }

        window.alert(content.installTimeoutAlert)
      }

      setLoadingState()
      document.addEventListener('visibilitychange', visibilityHandler)
      window.addEventListener('blur', blurHandler)

      try {
        triggerIOSInstall(channel)
        setStatus(content.installAttemptStatus)

        timeoutId = window.setTimeout(function () {
          cleanup()
          resetButtonState()

          if (!downloadSuccess) {
            setStatus(content.installFailureStatus)
            promptFallback()
          }
        }, 6000)
      } catch {
        cleanup()
        resetButtonState()
        setStatus(content.installFailureStatus)
        promptFallback()
      }
    }

    copyButton.onclick = async function () {
      const copied = await copyCurrentLink(locale)
      setStatus(copied ? content.copySuccessStatus : content.copyFailureStatus)
    }

    openSafariButton.onclick = function () {
      const opened = openCurrentPageInSafari(channel, locale)
      setStatus(opened ? content.openSafariStatus : content.onlyIOSStatus)
    }
  }

  function renderTrustSteps(content) {
    const trustList = document.getElementById('trust-list')
    trustList.innerHTML = ''

    content.trustSteps.forEach((step) => {
      const item = document.createElement('li')
      item.textContent = step
      trustList.appendChild(item)
    })
  }

  function renderStepList(steps) {
    const stepsList = document.getElementById('steps-list')
    stepsList.innerHTML = ''

    steps.forEach((step) => {
      const item = document.createElement('li')
      item.textContent = step
      stepsList.appendChild(item)
    })
  }

  function handleAutoInstallFromQuery() {
    if (hasHandledAutoInstall) {
      return
    }

    hasHandledAutoInstall = true

    const currentUrl = new URL(window.location.href)
    const shouldAutoInstall = currentUrl.searchParams.get(IOS_AUTO_INSTALL_QUERY_KEY) === 'true'

    if (!shouldAutoInstall) {
      return
    }

    const channel = currentUrl.searchParams.get(CHANNEL_QUERY_KEY) || '1'
    const environment = detectBrowserEnvironment()

    currentUrl.searchParams.delete(IOS_AUTO_INSTALL_QUERY_KEY)
    window.history.replaceState({}, '', `${currentUrl.pathname}${currentUrl.search}${currentUrl.hash}`)

    if (environment.isIOS && environment.isSafari) {
      window.setTimeout(() => {
        try {
          triggerIOSInstall(channel)
        } catch {
          // Leave the visible actions on the page so the user can retry manually.
        }
      }, 240)
    }
  }

  createXhjPageI18n({
    messages: {
      'zh-CN': {
        pageTitle: 'iOS 安装',
        installReadyTitle: 'Safari 已就绪，可以直接安装',
        installReadyDescription: () => '当前环境已满足 iOS 企业签安装要求，点击下方按钮即可直接尝试拉起安装。',
        installSwitchTitle: '请继续在 Safari 中完成安装',
        installSwitchDescription: (environment) =>
          `当前浏览器为 ${environment.browserName}。部分内嵌浏览器或第三方浏览器会拦截 itms-services 协议，建议优先切换到 Safari。`,
        installDesktopTitle: '请在 iPhone Safari 中继续安装',
        installDesktopDescription:
          '当前设备无法直接拉起 iOS 企业签安装。请把当前链接发送到 iPhone，并使用系统自带 Safari 打开。',
        envBanner: (environment) => `当前环境：iOS · ${environment.browserName}`,
        desktopBanner: '当前环境：非 iPhone 设备',
        readySteps: [
          '点击“立即安装”拉起系统安装流程。',
          '如安装后提示未受信任，请到“设置 > 通用 > VPN 与设备管理”完成证书信任。',
          '若点击后没有出现系统弹窗，可稍后重试一次。',
        ],
        switchSteps: [
          '先点击“先尝试安装”，部分浏览器仍可能直接拉起安装。',
          '如果没有反应，请点击“打开 Safari”或先复制当前链接，再到 Safari 中打开。',
          '安装完成后如提示未受信任，请到“设置 > 通用 > VPN 与设备管理”中完成信任。',
        ],
        desktopSteps: [
          '复制当前链接并发送到 iPhone。',
          '在系统自带 Safari 中打开该链接。',
          '页面会保留当前渠道参数，并在 Safari 中继续安装流程。',
        ],
        readyNote: '若当前网络较慢，系统安装弹窗可能会稍晚出现，请耐心等待几秒。',
        switchNote: '如果第三方浏览器静默拦截安装协议，复制链接后在 Safari 中打开通常最稳定。',
        desktopNote: '复制出的链接会自动附带当前渠道与自动安装参数，便于在手机上继续。',
        installNowLabel: '立即安装',
        tryInstallLabel: '先尝试安装',
        copyPhoneLinkLabel: '复制当前链接',
        copyLinkLabel: '复制当前链接',
        openSafariLabel: '打开 Safari',
        trustTitle: '安装后如何信任证书',
        trustSteps: [
          '打开“设置”。',
          '进入“通用”。',
          '打开“VPN 与设备管理”。',
          '找到对应企业开发者证书并点击“信任”。',
        ],
        backHomeLabel: '返回官网',
        channelLabel: (channel) => `iOS 渠道 ${channel}`,
        installAttemptStatus: '正在尝试拉起安装，请留意系统弹窗。',
        installFailureStatus: '安装没有成功拉起，请改用 Safari 或复制当前链接后重试。',
        installPendingLabel: '下载中...',
        unsupportedBrowserConfirm: '当前浏览器可能不支持直接安装。\n\n是否跳转到Safari浏览器进行安装？',
        installTimeoutAlert:
          '下载可能未成功启动。\n\n请检查网络连接，或稍后重试。\n\n您也可以点击“打开 Safari”按钮重试。',
        copySuccessStatus: '已复制当前链接，请到 Safari 中打开。',
        copyFailureStatus: '复制失败，请手动复制地址栏中的当前链接。',
        openSafariStatus: '正在尝试切换到 Safari。',
        onlyIOSStatus: '当前设备不是 iPhone，无法直接切换到 Safari 安装。',
      },
      'en-US': {
        pageTitle: 'iOS Installation',
        installReadyTitle: 'Safari is ready for direct install',
        installReadyDescription: () =>
          'This environment already meets the basic requirements for enterprise iOS installation. You can try launching the installer directly.',
        installSwitchTitle: 'Finish the install in Safari',
        installSwitchDescription: (environment) =>
          `You are currently in ${environment.browserName}. Embedded and third-party browsers often block the itms-services protocol, so Safari is usually the safest path.`,
        installDesktopTitle: 'Continue This in iPhone Safari',
        installDesktopDescription:
          'This device cannot launch the enterprise iOS installer directly. Send the current link to your iPhone and open it with the built-in Safari browser.',
        envBanner: (environment) => `Current environment: iOS in ${environment.browserName}`,
        desktopBanner: 'Current environment: not an iPhone',
        readySteps: [
          'Tap "Install Now" to launch the system install flow.',
          'If iOS later says the app is untrusted, complete trust setup in Settings > General > VPN & Device Management.',
          'If nothing appears immediately, wait a few seconds and try once more.',
        ],
        switchSteps: [
          'Tap "Try Install First" because some browsers can still launch the installer.',
          'If nothing happens, use "Open Safari" or copy the current link and continue there.',
          'If iOS later says the app is untrusted, finish trust setup in Settings > General > VPN & Device Management.',
        ],
        desktopSteps: [
          'Copy the current link and send it to your iPhone.',
          'Open that link in the built-in Safari browser.',
          'The page keeps the current channel so the same install flow continues in Safari.',
        ],
        readyNote: 'On a slower network, the iOS install prompt can take a few seconds to appear.',
        switchNote: 'If a third-party browser silently blocks the install protocol, copying the link into Safari is usually the most reliable fallback.',
        desktopNote: 'The copied link includes both the current channel and an auto-install flag for Safari.',
        installNowLabel: 'Install Now',
        tryInstallLabel: 'Try Install First',
        copyPhoneLinkLabel: 'Copy Current Link',
        copyLinkLabel: 'Copy Current Link',
        openSafariLabel: 'Open Safari',
        trustTitle: 'Trust the Certificate After Install',
        trustSteps: [
          'Open Settings.',
          'Go to General.',
          'Open VPN & Device Management.',
          'Find the matching enterprise certificate and trust it.',
        ],
        backHomeLabel: 'Back to Official Site',
        channelLabel: (channel) => `iOS Channel ${channel}`,
        installAttemptStatus: 'Trying to launch the installer. Watch for the iOS system prompt.',
        installFailureStatus: 'The installer did not launch successfully. Try Safari or copy the current link and continue there.',
        installPendingLabel: 'Downloading...',
        unsupportedBrowserConfirm:
          'This browser may not support direct installation.\n\nOpen Safari to continue installing?',
        installTimeoutAlert:
          'The download may not have started.\n\nPlease check your network connection or try again later.\n\nYou can also tap "Open Safari" to retry.',
        copySuccessStatus: 'The current link has been copied. Open it in Safari to continue.',
        copyFailureStatus: 'Copy failed. Please copy the current address from the browser bar manually.',
        openSafariStatus: 'Trying to hand this page off to Safari.',
        onlyIOSStatus: 'This is not an iPhone, so Safari handoff is not available.',
      },
    },
    render(content, helpers) {
      handleAutoInstallFromQuery()

      const environment = detectBrowserEnvironment()
      const channel = getCurrentChannel()
      const pageContent = createContent(environment, content, channel)
      const openSafariButton = document.getElementById('open-safari')

      document.documentElement.lang = helpers.locale
      document.title = content.pageTitle
      document.getElementById('page-title').textContent = pageContent.title
      document.getElementById('page-description').textContent = pageContent.description
      document.getElementById('channel-badge').textContent = pageContent.channelLabel
      document.getElementById('env-banner').textContent = pageContent.envBanner
      document.getElementById('note-text').textContent = pageContent.note
      document.getElementById('trust-title').textContent = content.trustTitle
      document.getElementById('primary-action').textContent = pageContent.primaryLabel
      document.getElementById('copy-link').textContent = pageContent.copyLabel
      openSafariButton.textContent = pageContent.openSafariLabel
      openSafariButton.hidden = !pageContent.showOpenSafari

      const toggleButton = document.getElementById('lang-toggle')
      toggleButton.textContent = helpers.switchLabel
      toggleButton.setAttribute('aria-label', helpers.switchAriaLabel)

      renderStepList(pageContent.steps)
      renderTrustSteps(content)
      bindActions(pageContent, helpers.locale, content)

      const homeLink = document.getElementById('home-link')
      homeLink.textContent = content.backHomeLabel
      homeLink.href = helpers.withLocaleHref('/')
    },
  })
})()
