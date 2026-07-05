// 使用统一的配置文件
// 所有配置信息现在都在 config.js 文件中，请修改 config.js 而不是这里
const appConfig = {
    manifestUrl: CONFIG.MANIFEST_URL,
    appName: CONFIG.APP_NAME,
    version: CONFIG.VERSION
};

// 获取当前域名（用于生成manifest.plist的URL）
function getBaseUrl() {
    return window.location.origin;
}

// 检测是否为iOS设备
function isIOSDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    return /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
}

// 检测是否为Safari浏览器
function isSafariBrowser() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = isIOSDevice();
    
    if (isIOS) {
        // iOS设备上的浏览器检测
        // Safari的User-Agent通常包含"Safari"但不包含其他浏览器的标识
        const isChrome = /CriOS/i.test(userAgent);
        const isFirefox = /FxiOS/i.test(userAgent);
        const isUC = /UCBrowser/i.test(userAgent);
        const isQQ = /QQBrowser/i.test(userAgent);
        const isWeChat = /MicroMessenger/i.test(userAgent);
        const isEdge = /EdgiOS/i.test(userAgent);
        const isOpera = /OPiOS/i.test(userAgent);
        
        // 如果检测到其他浏览器，肯定不是Safari
        if (isChrome || isFirefox || isUC || isQQ || isWeChat || isEdge || isOpera) {
            return false;
        }
        
        // iOS Safari的User-Agent通常包含"Safari"和"Version"，但不包含"CriOS"等
        // 或者通过检查navigator.vendor来判断（Safari的vendor通常是"Apple Computer, Inc."）
        const vendor = navigator.vendor || '';
        const isAppleVendor = /apple/i.test(vendor);
        const hasSafari = /Safari/i.test(userAgent);
        const hasVersion = /Version/i.test(userAgent);
        
        // iOS Safari通常满足：vendor包含Apple，User-Agent包含Safari和Version
        return isAppleVendor && hasSafari && hasVersion;
    }
    
    // 非iOS设备上的Safari检测
    const isSafari = /^((?!chrome|android).)*safari/i.test(userAgent);
    return isSafari;
}

// 生成安装URL（使用itms-services协议）
function generateInstallUrl() {
    // 获取当前域名
    const baseUrl = getBaseUrl();
    
    // 从URL参数中获取渠道信息
    const urlParams = new URLSearchParams(window.location.search);
    const channel = urlParams.get('channel') || '1'; // 默认为渠道1
    
    // 根据渠道选择不同的manifest文件
    const manifestMap = {
        '1': 'manifest_channel1.plist',
        '2': 'manifest_channel2.plist',
        '3': 'manifest_channel3.plist',
    };
    const manifestFile = manifestMap[channel] || manifestMap['1'];
    const manifestUrl = baseUrl + '/' + manifestFile;
    
    // 使用itms-services协议实现一键安装
    const installUrl = `itms-services://?action=download-manifest&url=${encodeURIComponent(manifestUrl)}`;
    return installUrl;
}

// 显示信任提示弹窗
function showTrustModal() {
    const modal = document.getElementById('trustModal');
    if (modal) {
        modal.style.display = 'flex';
        // 防止背景滚动
        document.body.style.overflow = 'hidden';
    }
}

// 隐藏信任提示弹窗
function hideTrustModal() {
    const modal = document.getElementById('trustModal');
    if (modal) {
        modal.style.display = 'none';
        // 恢复背景滚动
        document.body.style.overflow = '';
    }
}

// 显示信任说明弹窗
function showTrustGuideModal() {
    const modal = document.getElementById('trustGuideModal');
    if (modal) {
        modal.style.display = 'flex';
        // 防止背景滚动
        document.body.style.overflow = 'hidden';
    }
}

// 隐藏信任说明弹窗
function hideTrustGuideModal() {
    const modal = document.getElementById('trustGuideModal');
    if (modal) {
        modal.style.display = 'none';
        // 恢复背景滚动
        document.body.style.overflow = '';
    }
}

// 显示iOS安装引导模态框（整合安装指南）
function showIosInstallGuideModal(isSafari = false) {
    const modal = document.getElementById('iosInstallGuideModal');
    if (!modal) return;
    
    // 统一显示所有按钮，不再根据浏览器类型隐藏
    modal.style.display = 'flex';
    // 防止背景滚动
    document.body.style.overflow = 'hidden';
}

// 隐藏iOS安装引导模态框
function hideIosInstallGuideModal() {
    const modal = document.getElementById('iosInstallGuideModal');
    if (modal) {
        modal.style.display = 'none';
        // 恢复背景滚动
        document.body.style.overflow = '';
    }
}

// 跳转到Safari浏览器
function openInSafari() {
    let currentUrl = window.location.href;
    const isIOS = isIOSDevice();
    
    if (!isIOS) {
        // 非iOS设备，提示用户
        alert('此功能仅支持iOS设备');
        return;
    }
    
    // 在URL中添加自动下载参数
    const urlObj = new URL(currentUrl);
    urlObj.searchParams.set('autoInstall', 'true');
    currentUrl = urlObj.toString();
    
    // iOS设备：尝试打开Safari浏览器
    // 注意：iOS上无法直接检测协议是否成功，所以尝试多种协议
    const urlWithoutProtocol = currentUrl.replace(/^https?:\/\//, '');
    
    // 方法1：使用 x-safari-https:// 协议（iOS 9+，最常用）
    try {
        window.location.href = 'x-safari-https://' + urlWithoutProtocol;
    } catch (e1) {
        // 方法2：使用 safari-https:// 协议
        try {
            window.location.href = 'safari-https://' + urlWithoutProtocol;
        } catch (e2) {
            // 方法3：使用 safari:// 协议
            try {
                window.location.href = 'safari://' + currentUrl;
            } catch (e3) {
                // 如果所有方法都失败，提示用户手动打开
                alert('无法自动跳转到Safari浏览器，请手动打开Safari浏览器访问此页面。');
            }
        }
    }
}

// 复制当前页面链接到剪贴板
function copyCurrentLink() {
    const currentUrl = window.location.href;
    
    // 使用现代Clipboard API
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(currentUrl).then(function() {
            // 显示复制成功提示
            showCopySuccessTip();
        }).catch(function(err) {
            console.error('复制失败:', err);
            // 如果Clipboard API失败，使用备用方法
            fallbackCopyTextToClipboard(currentUrl);
        });
    } else {
        // 使用备用方法
        fallbackCopyTextToClipboard(currentUrl);
    }
}

// 备用复制方法
function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopySuccessTip();
        } else {
            alert('复制失败，请手动复制链接：' + text);
        }
    } catch (err) {
        console.error('复制失败:', err);
        alert('复制失败，请手动复制链接：' + text);
    }
    
    document.body.removeChild(textArea);
}

// 显示复制成功提示
function showCopySuccessTip() {
    // 创建提示元素
    const tip = document.createElement('div');
    tip.textContent = '链接已复制到剪贴板！';
    tip.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        font-size: 16px;
        z-index: 10002;
        animation: fadeInOut 2s ease;
    `;
    
    // 添加动画样式
    if (!document.getElementById('copyTipStyle')) {
        const style = document.createElement('style');
        style.id = 'copyTipStyle';
        style.textContent = `
            @keyframes fadeInOut {
                0% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
                20% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                80% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
                100% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(tip);
    
    // 2秒后移除提示
    setTimeout(function() {
        if (tip.parentNode) {
            tip.parentNode.removeChild(tip);
        }
    }, 2000);
}

// 打开iOS设置
function openSettings() {
    // iOS 8+ 可以使用 App-Prefs 协议打开设置
    // 但更可靠的方式是提示用户手动打开
    try {
        // 尝试打开设置应用
        window.location.href = 'App-Prefs:root=General&path=ManagedConfigurationList';
    } catch (e) {
        // 如果失败，显示提示
        alert('请手动打开"设置"应用，然后进入"通用 > VPN与设备管理"');
    }
    hideTrustModal();
}

// 初始化安装按钮
function setupInstallButton() {
    const installBtn = document.getElementById('installBtn');
    if (!installBtn) {
        console.error('未找到安装按钮');
        return;
    }
    
    installBtn.addEventListener('click', function() {
        const isIOS = isIOSDevice();
        
        if (!isIOS) {
            // 非iOS设备显示提示
            alert('此应用仅支持iOS设备，请使用iPhone访问');
            return;
        }
        
        // iOS设备：检测浏览器类型
        const isSafari = isSafariBrowser();
        
        if (isSafari) {
            // Safari浏览器：直接触发安装
            const installUrl = generateInstallUrl();
            try {
                triggerIOSInstall(installUrl);
            } catch (e) {
                console.error('安装失败:', e);
                alert('安装失败，请重试');
            }
        } else {
            // 其他浏览器：显示弹窗提示
            showIosInstallGuideModal();
        }
    });
}

// 初始化弹窗按钮
function setupModalButtons() {
    const closeModal = document.getElementById('closeModal');
    const openSettingsBtn = document.getElementById('openSettings');
    const modal = document.getElementById('trustModal');
    
    if (closeModal) {
        closeModal.addEventListener('click', hideTrustModal);
    }
    
    if (openSettingsBtn) {
        openSettingsBtn.addEventListener('click', function() {
            openSettings();
        });
    }
    
    // 点击遮罩层关闭弹窗
    if (modal) {
        const overlay = modal.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', hideTrustModal);
        }
    }
}

// 初始化信任说明弹窗按钮
function setupTrustGuideModalButtons() {
    const closeTrustGuideModal = document.getElementById('closeTrustGuideModal');
    const trustKnowBtn = document.getElementById('trustKnowBtn');
    const trustGuideModal = document.getElementById('trustGuideModal');
    
    if (closeTrustGuideModal) {
        closeTrustGuideModal.addEventListener('click', hideTrustGuideModal);
    }
    
    if (trustKnowBtn) {
        trustKnowBtn.addEventListener('click', hideTrustGuideModal);
    }
    
    // 点击遮罩层关闭弹窗
    if (trustGuideModal) {
        const overlay = trustGuideModal.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', hideTrustGuideModal);
        }
    }
}

// 初始化iOS安装引导模态框按钮
function setupIosInstallGuideModalButtons() {
    const closeIosInstallGuideModal = document.getElementById('closeIosInstallGuideModal');
    const directInstallBtn = document.getElementById('directInstallBtn');
    const tryInstallBtn = document.getElementById('tryInstallBtn');
    const openSafariBtn = document.getElementById('openSafariBtn');
    const copyLinkBtn2 = document.getElementById('copyLinkBtn2');
    const iosInstallGuideModal = document.getElementById('iosInstallGuideModal');
    
    if (closeIosInstallGuideModal) {
        closeIosInstallGuideModal.addEventListener('click', hideIosInstallGuideModal);
    }
    
    // 立即下载按钮
    if (directInstallBtn) {
        directInstallBtn.addEventListener('click', function() {
            // 防止重复点击
            if (directInstallBtn.disabled) {
                return;
            }
            
            const installUrl = generateInstallUrl();
            let downloadSuccess = false;
            let timeoutId = null;
            let handlersRemoved = false;
            const originalText = directInstallBtn.textContent;
            
            // 设置按钮为加载状态
            const setLoadingState = function() {
                directInstallBtn.disabled = true;
                directInstallBtn.style.opacity = '0.7';
                directInstallBtn.style.cursor = 'not-allowed';
                directInstallBtn.textContent = '下载中...';
            };
            
            // 恢复按钮状态
            const resetButtonState = function() {
                directInstallBtn.disabled = false;
                directInstallBtn.style.opacity = '';
                directInstallBtn.style.cursor = '';
                directInstallBtn.textContent = originalText;
            };
            
            // 清理函数
            const cleanup = function() {
                if (!handlersRemoved) {
                    document.removeEventListener('visibilitychange', visibilityHandler);
                    window.removeEventListener('blur', blurHandler);
                    handlersRemoved = true;
                }
                if (timeoutId) {
                    clearTimeout(timeoutId);
                    timeoutId = null;
                }
            };
            
            // 检测下载是否成功的标志
            const checkDownloadSuccess = function() {
                // 如果页面变为不可见，可能表示下载成功（系统弹出了安装对话框）
                if (document.hidden) {
                    downloadSuccess = true;
                    cleanup();
                    // 下载成功，恢复按钮状态
                    resetButtonState();
                }
            };
            
            // 监听页面可见性变化
            const visibilityHandler = function() {
                checkDownloadSuccess();
            };
            
            // 监听窗口失去焦点
            const blurHandler = function() {
                checkDownloadSuccess();
            };
            
            // 设置加载状态
            setLoadingState();
            
            // 添加事件监听器
            document.addEventListener('visibilitychange', visibilityHandler);
            window.addEventListener('blur', blurHandler);
            
            try {
                // 触发安装
                triggerIOSInstall(installUrl);
                
                // 6秒后检测是否成功
                timeoutId = setTimeout(function() {
                    cleanup();
                    
                    // 恢复按钮状态
                    resetButtonState();
                    
                    // 如果6秒后仍然没有成功，提示用户
                    if (!downloadSuccess) {
                        // 显示提示，引导用户使用 Safari
                        const isSafari = isSafariBrowser();
                        if (!isSafari) {
                            // 如果不是Safari浏览器，提示用户使用Safari
                            if (confirm('当前浏览器可能不支持直接安装。\n\n是否跳转到Safari浏览器进行安装？')) {
                                // 用户确认，跳转到Safari
                                hideIosInstallGuideModal();
                                openInSafari();
                            }
                        } else {
                            // 如果是Safari但仍然失败，提示用户
                            alert('下载可能未成功启动。\n\n请检查网络连接，或稍后重试。\n\n您也可以点击"点击跳转Safari浏览器下载"按钮重试。');
                        }
                    }
                }, 6000);
                
            } catch (e) {
                cleanup();
                resetButtonState();
                
                console.error('安装失败:', e);
                // 如果捕获到错误，直接提示用户
                const isSafari = isSafariBrowser();
                if (!isSafari) {
                    if (confirm('当前浏览器不支持直接安装。\n\n是否跳转到Safari浏览器进行安装？')) {
                        hideIosInstallGuideModal();
                        openInSafari();
                    }
                } else {
                    alert('安装失败，请重试');
                }
            }
        });
    }
    
    // 跳转Safari浏览器下载按钮
    if (openSafariBtn) {
        openSafariBtn.addEventListener('click', function() {
            const isIOS = isIOSDevice();
            const isSafari = isSafariBrowser();
            
            if (!isIOS) {
                // 非iOS设备，提示用户
                alert('此功能仅支持iOS设备');
                return;
            }
            
            if (isSafari) {
                // 如果已经是Safari浏览器，直接触发下载
                const installUrl = generateInstallUrl();
                try {
                    triggerIOSInstall(installUrl);
                    // 关闭弹窗
                    hideIosInstallGuideModal();
                } catch (e) {
                    console.error('安装失败:', e);
                    alert('安装失败，请重试');
                }
            } else {
                // 如果不是Safari浏览器，关闭弹窗并尝试跳转到Safari
                hideIosInstallGuideModal();
                // 尝试跳转到Safari浏览器
                openInSafari();
            }
        });
    }
    
    // 复制链接按钮
    if (copyLinkBtn2) {
        copyLinkBtn2.addEventListener('click', function() {
            copyCurrentLink();
        });
    }
    
    // 点击遮罩层关闭弹窗
    if (iosInstallGuideModal) {
        const overlay = iosInstallGuideModal.querySelector('.modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', hideIosInstallGuideModal);
        }
    }
}

// 设置安装按钮状态（保持按钮为"免费安装"）
function setInstallButtonState(state) {
    const mobileInstallBtn = document.getElementById('mobileInstallBtn');
    if (!mobileInstallBtn) return;
    
    // 按钮始终显示"免费安装"
    mobileInstallBtn.textContent = '免费安装';
    mobileInstallBtn.disabled = false;
    localStorage.removeItem('installStatus');
}

// 触发iOS安装（使用a标签点击方式，确保能弹出系统安装弹框）
function triggerIOSInstall(installUrl) {
    // 创建一个隐藏的a标签并触发点击
    const link = document.createElement('a');
    link.href = installUrl;
    link.style.display = 'none';
    document.body.appendChild(link);
    
    // 触发点击事件
    link.click();
    
    // 清理：延迟移除元素，确保点击事件完成
    setTimeout(function() {
        document.body.removeChild(link);
    }, 100);
}

// 初始化移动端底部按钮
function setupMobileButtons() {
    const mobileInstallBtn = document.getElementById('mobileInstallBtn');
    const mobileTrustBtn = document.getElementById('mobileTrustBtn');
    
    // 免费安装按钮
    if (mobileInstallBtn) {
        mobileInstallBtn.addEventListener('click', function() {
            const isIOS = isIOSDevice();
            
            if (!isIOS) {
                // 非iOS设备，跳转Android下载
                if (typeof CONFIG !== 'undefined' && CONFIG.ANDROID_DOWNLOAD_URL) {
                    window.location.href = CONFIG.ANDROID_DOWNLOAD_URL;
                } else {
                    alert('此应用仅支持iOS设备，请使用iPhone访问');
                }
                return;
            }
            
            // iOS设备：检测浏览器类型
            const isSafari = isSafariBrowser();
            
            if (isSafari) {
                // Safari浏览器：直接触发安装
                const installUrl = generateInstallUrl();
                try {
                    triggerIOSInstall(installUrl);
                } catch (e) {
                    console.error('安装失败:', e);
                    alert('安装失败，请重试');
                }
            } else {
                // 其他浏览器：显示弹窗提示，同时尝试触发下载
                const installUrl = generateInstallUrl();
                try {
                    // 尝试通过隐藏<a>标签触发下载
                    triggerIOSInstall(installUrl);
                } catch (e) {
                    console.error('尝试下载失败:', e);
                    // 即使失败也继续显示弹窗
                }
                // 显示弹窗提示
                showIosInstallGuideModal();
            }
        });
    }
    
    // 去信任按钮
    if (mobileTrustBtn) {
        mobileTrustBtn.addEventListener('click', function() {
            showTrustGuideModal();
        });
    }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('安装页面加载完成');
    
    // 检测设备类型
    const isIOS = isIOSDevice();
    const isSafari = isSafariBrowser();
    
    // 检查URL参数，如果是自动安装模式且在Safari浏览器中，自动触发下载
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('autoInstall') === 'true' && isIOS && isSafari) {
        // 延迟一下，确保页面完全加载
        setTimeout(function() {
            const installUrl = generateInstallUrl();
            try {
                triggerIOSInstall(installUrl);
                console.log('自动触发下载');
            } catch (e) {
                console.error('自动下载失败:', e);
            }
        }, 500);
    }
    
    if (!isIOS) {
        // 非iOS设备显示提示
        const installBtn = document.getElementById('installBtn');
        const installTip = document.querySelector('.install-tip');
        
        if (installBtn) {
            installBtn.style.opacity = '0.6';
            installBtn.style.cursor = 'not-allowed';
        }
        
        if (installTip) {
            installTip.textContent = '此应用仅支持iOS设备，请使用iPhone访问';
            installTip.style.color = '#ff9800';
        }
    }
    
    // 初始化按钮
    setupInstallButton();
    setupModalButtons();
    setupTrustGuideModalButtons();
    setupIosInstallGuideModalButtons();
    setupMobileButtons();
    
    // 检查URL参数，如果是从安装后返回的，可以显示特殊提示
    if (urlParams.get('installed') === 'true') {
        setTimeout(function() {
            showTrustModal();
        }, 1000);
    }
});

// 处理用户点击itms-services弹框安装后的状态变化
function handleInstallConfirm() {
    const waitingForConfirm = sessionStorage.getItem('waitingForInstallConfirm');
    
    if (waitingForConfirm === 'true') {
        // 用户已经在itms-services弹框中点击了安装，现在返回页面
        // 显示iOS安装引导弹窗
        showIosInstallGuideModal();
        // 清除等待标记
        sessionStorage.removeItem('waitingForInstallConfirm');
        return true; // 表示已经处理了安装确认
    }
    return false;
}

// 处理页面可见性变化（用户切换应用后返回）
document.addEventListener('visibilitychange', function() {
    if (!document.hidden) {
        // 页面重新可见时，检查是否等待用户点击安装确认
        handleInstallConfirm();
    }
});

// 处理窗口焦点变化（备用检测方式）
window.addEventListener('focus', function() {
    // 延迟一下，避免与visibilitychange事件重复处理
    setTimeout(function() {
        // 如果visibilitychange已经处理了，这里不会重复处理
        if (!document.hidden) {
            handleInstallConfirm();
        }
    }, 100);
});

