# iOS应用下载页面

一个支持企业签IPA包一键安装的iOS应用下载页面。

## 功能特性

- ✅ 支持企业签IPA包一键安装
- ✅ 二维码扫描下载
- ✅ 响应式设计，支持PC和移动端
- ✅ 美观的UI界面
- ✅ 自动检测iOS设备

## 使用说明

### 1. 配置应用信息

编辑 `app.js` 文件，修改以下配置：

```javascript
const appConfig = {
    ipaUrl: 'https://your-domain.com/path/to/app.ipa',  // 您的IPA文件URL
    appName: '小火箭',                                    // 应用名称
    bundleId: 'com.example.app',                        // Bundle ID
    version: '1.0.1',                                   // 版本号
    size: '44.17M'                                      // 应用大小
};
```

### 2. 配置manifest.plist

编辑 `manifest.plist` 文件，确保以下信息正确：

- `url`: IPA文件的下载地址（必须是HTTPS）
- `bundle-identifier`: 应用的Bundle ID
- `bundle-version`: 应用版本号
- `title`: 应用名称

### 3. 部署要求

**重要：** 企业签IPA安装需要满足以下条件：

1. **HTTPS协议**：manifest.plist和IPA文件必须通过HTTPS提供
2. **正确的MIME类型**：
   - `.plist` 文件需要设置 `Content-Type: application/x-plist`
   - `.ipa` 文件需要设置 `Content-Type: application/octet-stream`
3. **服务器配置**：确保服务器支持跨域访问（如果需要）

### 4. 服务器配置示例

#### Nginx配置

```nginx
location ~ \.plist$ {
    add_header Content-Type application/x-plist;
    add_header Access-Control-Allow-Origin *;
}

location ~ \.ipa$ {
    add_header Content-Type application/octet-stream;
    add_header Content-Disposition "attachment; filename=app.ipa";
    add_header Access-Control-Allow-Origin *;
}
```

#### Apache配置

在 `.htaccess` 文件中添加：

```apache
<FilesMatch "\.plist$">
    Header set Content-Type "application/x-plist"
    Header set Access-Control-Allow-Origin "*"
</FilesMatch>

<FilesMatch "\.ipa$">
    Header set Content-Type "application/octet-stream"
    Header set Content-Disposition "attachment; filename=app.ipa"
    Header set Access-Control-Allow-Origin "*"
</FilesMatch>
```

## 文件说明

- `index.html` - PC端主页面（包含二维码）
- `install.html` - 移动端安装页面（扫描二维码后跳转）
- `styles.css` - PC端样式文件
- `install.css` - 移动端样式文件
- `app.js` - PC端JavaScript功能代码
- `install.js` - 移动端安装逻辑代码
- `manifest.plist` - iOS安装清单文件
- `config.js` - 配置文件（可选）

## 安装流程

1. 用户访问下载页面（PC端）或扫描二维码（移动端）
2. **扫描二维码**：跳转到移动端安装页面（install.html）
3. **点击安装按钮**：在安装页面点击"立即安装"按钮
4. **信任提示**：系统会自动显示信任企业开发者的提示
5. iOS设备自动开始下载应用
6. 下载完成后，用户需要在"设置 > 通用 > VPN与设备管理"中信任企业开发者
7. 信任后即可正常使用应用

## 故障排除

### 证书无效错误

如果遇到"无法安装应用程序 因为null的证书无效"错误，请检查以下事项：

1. **IPA文件签名**
   - 确保IPA文件已使用有效的企业证书签名
   - 检查证书是否过期（企业证书有效期通常为1年）
   - 使用 `codesign -dvv` 命令验证IPA签名

2. **服务器配置**
   - 确保 `.plist` 文件的 MIME 类型为 `application/x-plist`
   - 确保 `.ipa` 文件的 MIME 类型为 `application/octet-stream`
   - 检查服务器是否正确返回这些 Content-Type 头

3. **manifest.plist 格式**
   - 确保 `manifest.plist` 文件格式正确
   - 检查所有 URL 都是 HTTPS（不能是 HTTP）
   - 验证 `bundle-identifier` 与 IPA 文件中的 Bundle ID 一致

4. **用户操作**
   - 下载完成后，用户需要在"设置 > 通用 > VPN与设备管理"中信任企业开发者
   - 如果证书已过期，需要重新签名 IPA 文件

### 验证命令

```bash
# 检查 IPA 签名信息
codesign -dvv YourApp.ipa

# 检查证书有效期
security find-identity -v -p codesigning
```

## 注意事项

1. **企业签名**：确保IPA包已使用有效的企业证书签名
2. **HTTPS**：所有资源必须通过HTTPS提供
3. **信任证书**：用户首次安装需要在设备设置中信任企业开发者证书
4. **测试**：建议在不同iOS版本和设备上测试安装流程
5. **证书有效期**：定期检查企业证书是否过期，及时更新

## 浏览器兼容性

- iOS Safari（推荐）
- Chrome（iOS）
- 其他支持itms-services协议的浏览器

## 许可证

MIT License

