# Panabit App Store

Panabit 应用商店前端项目，用于展示和管理 Panabit 兼容的第三方应用。

## 在线访问

https://defawong.github.io/panabit-apps/

## 功能特性

- **应用浏览** - 分类展示所有可用的 Panabit 应用
- **应用详情** - 查看应用介绍、版本、更新日志和下载链接
- **架构支持** - 支持 arm64、x86、universal 多种架构
- **应用提交** - 通过 GitHub Issues 提交新应用

## 技术栈

- React 19 + TypeScript 5.9
- Vite 7.3
- Tailwind CSS 4.2

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

访问 http://localhost:5173/panabit-apps/

## 构建部署

```bash
# 构建生产版本
npm run build
```

项目使用 GitHub Actions 自动部署到 GitHub Pages，推送代码到 main 分支即可触发自动构建和部署。

## 添加新应用

1. 将应用包文件放入 `public/apps/{应用ID}/downloads/` 目录
2. 将应用图标放入 `public/apps/{应用ID}/icon.png`
3. 在 `src/data/apps.ts` 中添加应用信息
4. 提交 Pull Request 或在 GitHub Issues 中提交应用信息

## 应用列表

| 应用 | 描述 | 作者 |
|------|------|------|
| AdGuard Home | DNS 广告拦截与隐私保护 | AdGuard |
| SmartDNS | 智能 DNS 分流 | pymumu |
| 直播网关 | RTMP 推流/拉流分发 | panabit-community |
| Dynamic Sync | 域名/IP 动态同步 | panabit-community |
| iPerf3 | 网络性能测试 | ESnet |
