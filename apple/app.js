// 使用统一的配置文件
// 所有配置信息现在都在 config.js 文件中，请修改 config.js 而不是这里
const appConfig = CONFIG;

// 获取当前域名（用于生成manifest.plist的URL）
function getBaseUrl() {
    return window.location.origin;
}

function isMobileDevice() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /Android/i.test(userAgent);
    return isIOS || isAndroid;
}

// 生成二维码（优先使用在线API，更可靠）
function generateQRCode() {
    const canvas = document.getElementById('qrcode');
    if (!canvas) {
        console.error('找不到二维码canvas元素');
        return;
    }
    
    const installUrl = generateInstallUrl();
    console.log('生成二维码，URL:', installUrl);
    
    // 直接使用在线API生成二维码（更可靠，避免库加载问题）
    generateQRCodeWithAPI(installUrl);
}

// 使用在线API生成二维码（主要方案）
function generateQRCodeWithAPI(installUrl) {
    const canvas = document.getElementById('qrcode');
    if (!canvas) return;
    
    // 隐藏canvas，使用img显示二维码
    canvas.style.display = 'none';
    
    // 检查是否已经创建了img
    const qrcodeBlock = document.querySelector('.qrcode-block');
    if (!qrcodeBlock) return;
    
    let qrImg = qrcodeBlock.querySelector('.qrcode-img');
    if (!qrImg) {
        qrImg = document.createElement('img');
        qrImg.className = 'qrcode-img';
        qrImg.style.cssText = 'width: 200px; height: 200px; display: block; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px;';
        qrcodeBlock.insertBefore(qrImg, canvas);
    }
    
    // 使用在线二维码API
    const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&margin=10&data=${encodeURIComponent(installUrl)}`;
    qrImg.src = qrApiUrl;
    qrImg.alt = '二维码';
    
    qrImg.onload = function() {
        console.log('二维码生成成功');
        qrImg.style.display = 'block';
    };
    
    qrImg.onerror = function() {
        console.error('在线API生成二维码失败，尝试备用方案');
        // 如果在线API失败，尝试使用本地库
        tryGenerateWithLocalLibrary(installUrl);
    };
}

// 尝试使用本地QRCode库生成二维码（备用方案）
function tryGenerateWithLocalLibrary(installUrl) {
    const canvas = document.getElementById('qrcode');
    if (!canvas) return;
    
    // 检查QRCode库是否已加载
    if (typeof QRCode === 'undefined') {
        console.error('QRCode库未加载，显示备用链接');
        showFallbackLink(installUrl);
        return;
    }
    
    try {
        // 尝试不同的API方式
        if (typeof QRCode.toDataURL === 'function') {
            // 使用toDataURL方式
            QRCode.toDataURL(installUrl, {
                width: 200,
                margin: 2,
                color: {
                    dark: '#000000',
                    light: '#FFFFFF'
                }
            }, function (error, url) {
                if (error) {
                    console.error('二维码生成失败:', error);
                    showFallbackLink(installUrl);
                    return;
                }
                const img = document.querySelector('.qrcode-img');
                if (img) {
                    img.src = url;
                    img.style.display = 'block';
                    console.log('使用本地库生成二维码成功');
                }
            });
        } else {
            console.error('QRCode库API不支持');
            showFallbackLink(installUrl);
        }
    } catch (e) {
        console.error('本地库生成二维码异常:', e);
        showFallbackLink(installUrl);
    }
}

// 显示备用安装链接
function showFallbackLink(installUrl) {
    const qrcodeBlock = document.querySelector('.qrcode-block');
    if (qrcodeBlock) {
        // 检查是否已经添加了备用链接
        if (qrcodeBlock.querySelector('.fallback-link')) {
            return;
        }
        
        const fallbackDiv = document.createElement('div');
        fallbackDiv.className = 'fallback-link';
        fallbackDiv.style.cssText = 'margin-top: 15px; padding: 10px; background: #f0f0f0; border-radius: 8px;';
        fallbackDiv.innerHTML = `
            <div style="font-size: 12px; color: #666; margin-bottom: 5px;">或点击下方链接安装：</div>
            <a href="${installUrl}" style="font-size: 14px; color: #667eea; word-break: break-all; text-decoration: none;">${installUrl}</a>
        `;
        qrcodeBlock.appendChild(fallbackDiv);
    }
}

// 生成安装URL（二维码扫描后跳转到安装页面）
function generateInstallUrl() {
    // 扫描二维码后跳转到的下载安装页面
    // 使用完整URL，包含域名
    const baseUrl = getBaseUrl();
    
    // 从URL参数中获取渠道信息，并传递给install.html
    const urlParams = new URLSearchParams(window.location.search);
    const channel = urlParams.get('channel') || '1'; // 默认为渠道1
    
    let installPageUrl = baseUrl + '/apple/install.html';
    if (channel) {
        installPageUrl += '?channel=' + channel;
    }
    
    return installPageUrl;
}

// 一键安装功能
function setupInstallButton() {
    const installBtn = document.getElementById('installBtn');
    if (!installBtn) {
        console.log('未找到安装按钮，跳过按钮初始化');
        return;
    }
    
    installBtn.addEventListener('click', function() {
        const installUrl = generateInstallUrl();
        
        // 检测设备类型
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
        
        if (isIOS) {
            // iOS设备直接跳转到IPA下载链接
            try {
                window.location.href = installUrl;
                showMessage('正在开始下载安装...', 'info');
            } catch (e) {
                console.error('安装失败:', e);
                showMessage('安装失败，请检查网络连接或联系管理员', 'error');
            }
        } else {
            // 非iOS设备显示提示
            showMessage('请使用iPhone扫描二维码进行安装', 'warning');
        }
    });
}

// 显示消息提示
function showMessage(message, type = 'info') {
    // 创建提示元素
    const messageEl = document.createElement('div');
    messageEl.className = `message message-${type}`;
    messageEl.textContent = message;
    
    // 根据类型设置背景色
    let bgColor = '#4caf50'; // 默认info
    if (type === 'warning') bgColor = '#ff9800';
    if (type === 'error') bgColor = '#f44336';
    
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        font-size: 14px;
        animation: slideDown 0.3s ease;
        max-width: 90%;
        text-align: center;
    `;
    
    document.body.appendChild(messageEl);
    
    // 3秒后自动移除
    setTimeout(() => {
        messageEl.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(messageEl);
        }, 300);
    }, 3000);
}

// 添加CSS动画
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// 不再需要等待QRCode库，直接生成二维码（使用在线API）

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面加载完成，开始初始化...');
    
    // 检查canvas元素
    const canvas = document.getElementById('qrcode');
    if (canvas) {
        console.log('找到canvas元素');
    } else {
        console.error('未找到canvas元素');
    }
    
    // 根据设备类型决定展示：PC显示二维码；手机显示下载按钮
    const mobileInstallSection = document.getElementById('mobileInstallSection');
    const qrcodeBlock = document.querySelector('.qrcode-block');
    const isMobile = isMobileDevice();

    if (isMobile) {
        if (qrcodeBlock) qrcodeBlock.style.display = 'none';
        if (mobileInstallSection) mobileInstallSection.style.display = 'block';
    } else {
        if (qrcodeBlock) qrcodeBlock.style.display = 'block';
        if (mobileInstallSection) mobileInstallSection.style.display = 'none';
        // 仅PC端生成二维码（使用在线API，无需等待库加载）
        setTimeout(function() {
            generateQRCode();
        }, 100);
    }
    
    setupInstallButton();
    
    // 检测是否在iOS设备上
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    
    if (isIOS) {
        // 在iOS设备上，可以显示额外的安装提示
        const installTip = document.querySelector('.install-tip');
        if (installTip) {
            installTip.textContent = '点击按钮即可直接安装到您的设备';
        }
    }
});

// 页面完全加载后再次尝试（防止脚本加载顺序问题）
window.addEventListener('load', function() {
    console.log('窗口完全加载');
    // 检查二维码是否已生成
    const qrImg = document.querySelector('.qrcode-img');
    const canvas = document.getElementById('qrcode');
    if (!qrImg && canvas && canvas.width === 0) {
        console.log('检测到二维码未生成，重新生成...');
        setTimeout(function() {
            generateQRCode();
        }, 200);
    }
});

