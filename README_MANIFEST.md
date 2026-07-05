# Manifest.plist 动态生成方案

## 问题说明

当项目部署在多个域名下时，静态的 `manifest.plist` 文件中的 IPA 下载链接无法自动适配不同域名，导致安装失败。

## 解决方案

提供了三种方案，根据你的服务器环境选择：

### 方案 1：PHP 动态生成（推荐）

**适用场景：** 服务器支持 PHP（大多数虚拟主机都支持）

**使用方法：**

1. 确保 `manifest.php` 文件在网站根目录
2. 在 `apple/config.js` 中设置：
   ```javascript
   MANIFEST_TYPE: 'php'
   ```
3. 确保 `enterprise_im.ipa` 文件在网站根目录

**优点：**
- 自动适配当前域名
- 无需手动配置
- 支持多域名部署

### 方案 2：Node.js 动态生成

**适用场景：** 使用 Node.js 服务器（Express、Koa 等）

**使用方法：**

1. 在 Express 应用中添加路由：
   ```javascript
   const { generateManifest } = require('./manifest.js');
   
   app.get('/manifest.plist', (req, res) => {
       generateManifest(req, res);
   });
   ```

2. 在 `apple/config.js` 中设置：
   ```javascript
   MANIFEST_TYPE: 'node'
   ```

**优点：**
- 自动适配当前域名
- 适合 Node.js 项目

### 方案 3：静态文件（不推荐多域名）

**适用场景：** 单域名部署，或服务器不支持 PHP/Node.js

**使用方法：**

1. 手动编辑 `manifest.plist`，将 IPA URL 改为完整 HTTPS URL：
   ```xml
   <string>https://your-domain.com/enterprise_im.ipa</string>
   ```

2. 在 `apple/config.js` 中设置：
   ```javascript
   MANIFEST_TYPE: 'static'
   ```

**缺点：**
- 每个域名需要单独配置
- 不适合多域名部署

## 配置说明

在 `apple/config.js` 中修改 `MANIFEST_TYPE` 来选择方案：

```javascript
const CONFIG = {
    MANIFEST_TYPE: 'php',  // 'php' | 'node' | 'static'
    // ... 其他配置
};
```

## 文件说明

- `manifest.php` - PHP 动态生成脚本（方案 1）
- `manifest.js` - Node.js 动态生成脚本（方案 2）
- `manifest.plist` - 静态 manifest 文件（方案 3，备用）

## 注意事项

1. **HTTPS 要求**：iOS 要求 manifest.plist 和 IPA 文件必须通过 HTTPS 提供
2. **文件路径**：确保 `enterprise_im.ipa` 文件在网站根目录，或修改脚本中的路径
3. **版本号**：如果更新应用版本，需要同时更新：
   - `apple/config.js` 中的 `VERSION`
   - `manifest.php` 或 `manifest.js` 中的版本号
   - `manifest.plist`（如果使用静态方案）

## 测试方法

1. 访问 `https://your-domain.com/manifest.php`（PHP 方案）
2. 检查返回的 XML 中 IPA URL 是否正确
3. 在 iOS 设备上测试安装流程

