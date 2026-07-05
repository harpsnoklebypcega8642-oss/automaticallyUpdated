// 应用配置文件
// 请根据实际情况修改以下配置
// 
// 重要说明：
// 1. 修改此文件后，app.js、install.js 和 HTML 文件会自动使用新的配置
// 2. manifest.plist 是静态 XML 文件，需要手动更新以下信息：
//    - <string>IPA_URL</string> 中的 URL
//    - <key>bundle-identifier</key> 中的 BUNDLE_ID
//    - <key>bundle-version</key> 中的 VERSION
//    - <key>title</key> 中的 APP_NAME

const CONFIG = {
    // manifest.plist文件URL（必须是HTTPS）
    MANIFEST_URL: '../manifest.plist',
    // 应用信息
    APP_NAME: '小火箭',
    BUNDLE_ID: 'com.xiaohuojian.im',  // 注意：manifest.plist中使用的真实Bundle ID
    VERSION: '1.1.6',
    SIZE: '44.17M',
    LANGUAGE: '简体中文',
    
    // 应用元数据
    AGE_RATING: '4+',
    PRICE: '免费',
    COPYRIGHT: '©2025',
    
    // 评分
    RATING: 5.0,
    RATING_COUNT: '1.2万',  // 评分次数
    RANKING: '第1名',       // 排行榜
    
    // 应用描述
    DESCRIPTION: '小火箭是一款优秀的网络工具应用，为您提供稳定快速的网络体验。',
    
    // 评论信息
    COMMENT: {
        author: 'Jennifer Lee',
        date: '31 December 2025',
        rating: 5,
        text: '这款应用真的非常出色！运行流畅无卡顿，画面细腻清晰，操作直观便捷，玩法丰富且极具趣味性。身边的同事都在使用，朋友们不妨也试试看，相信你会爱上它！强烈推荐！'
    },
    
    // Apple授权信息
    APPLE_AUTHORIZED: '已授权',
    RECOMMENDED_RANKING: '推荐榜第1名',  // 榜单推荐
    
    // Android下载链接
    ANDROID_DOWNLOAD_URL: 'https://download.xhj.im/im.apk'
};

// 导出配置（如果在Node.js环境中）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

