# SoccerRandom.me 游戏网站

## 项目简介
SoccerRandom.me 是一个专注于在线小游戏的平台，首发游戏为 Soccer Random，后续将持续添加更多优质游戏。网站设计风格参考 [decker.com](https://decker.com/)，追求极简、现代、动感的用户体验，并严格遵循 SEO 最佳实践，确保网站在搜索引擎中有良好表现。

## 主要功能
- 首页：品牌介绍、主打游戏推荐、SEO优化文本
- 游戏页：嵌入游戏 iframe，配合详细的游戏介绍、玩法说明、攻略、FAQ、相关游戏推荐
- 后续可扩展：游戏列表页、分类页、排行榜、用户评论等

## 设计风格
- 参考 decker.com，极简、现代、动感
- 大面积留白、简洁排版、响应式设计
- 重点突出游戏内容和品牌

## 技术选型
- 前端框架：Next.js（React，支持SSR/SSG，利于SEO）
- 样式：Tailwind CSS（快速实现现代响应式设计）
- 部署：Vercel/Netlify（自动SSL、CDN、极速访问）
- 内容管理：支持 Markdown/MDX，便于内容维护

## SEO 优化
- 每页独立 title/description/meta 标签
- 丰富的原生文本内容（游戏介绍、玩法、攻略等）
- 结构化数据（JSON-LD）
- 图片 alt、iframe title、可访问性标签
- 懒加载 iframe，提升页面速度
- 完善 404、sitemap、robots.txt

## 网站标识管理 (Logo 和 Favicon)
- **Favicon (浏览器标签图标)**:
    - 文件位置: `public/favicon.ico`
    - 如何更新: 替换此文件即可。浏览器可能需要清除缓存或强制刷新 (Cmd+Shift+R 或 Ctrl+Shift+R)才能看到更新。
    - 显示位置: 在 `pages/_app.js` 文件中通过 `<link rel="icon" href="/favicon.ico" />` 设置。
- **网站 Logo (页面左上角)**:
    - 文件位置: `public/logo.svg`
    - 如何更新: 替换此文件即可。同样，浏览器可能需要清除缓存或强制刷新。
    - 显示位置: 当前主要在首页 (`pages/index.js`) 的左上角通过 `<img src="/logo.svg" ... />` 显示。如果需要在其他页面显示，可以复用此方式或创建共享的 Header 组件。

## 如何添加新游戏
1. 在 `/games` 目录下为新游戏创建独立页面
2. 填写游戏介绍、玩法、攻略等原创内容
3. 嵌入游戏 iframe，并完善 SEO 相关标签
4. 在首页和游戏列表页添加新游戏入口

## 部署与维护
- 推荐使用 Vercel 部署，自动化构建与发布
- 持续监控网站性能和 SEO 表现，定期优化
- 收集用户反馈，持续完善内容和体验

## 未来规划
- 增加更多优质小游戏，丰富内容生态
- 引入用户评论、排行榜、社区等互动功能
- 持续优化 SEO，提升网站权重和流量

---

如有建议或合作意向，请联系站长。 