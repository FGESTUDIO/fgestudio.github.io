# FGESTUDIO Website

FGESTUDIO（梦幻起源欢娱工作室）官方网站，使用静态 HTML、CSS 与 JavaScript 构建，并通过 GitHub Pages 发布到 `https://fgestudio.my/`。

## 主要页面

- `/`：业务入口首页
- `/design/`：平面设计服务与配套
- `/mcn/`：游戏创作者合作与频道资料
- `/about/`：公司介绍
- `/privacy-policy/`：隐私政策
- `/terms-and-conditions/`：服务条款
- `/portfolio/`：尚未公开的作品集页面
- `/404.html`：品牌化错误页面

旧网址 `about.html`、`mcn.html`、`privacy/` 与 `terms/` 只保留为 `noindex` 跳转页，避免重复内容。项目不提供公开管理后台；请直接通过版本控制修改内容。

## 本地预览

在项目根目录运行：

```bash
python3 -m http.server 8080
```

然后打开 `http://localhost:8080/`。不要只双击 HTML 文件，因为浏览器可能会阻止本地 JSON 请求。

## 内容与联系方式

- `script.js`：三语文案、语言按钮、设备语言识别、地区价格、WhatsApp、Email、动画和互动逻辑
- `content.json`：可覆盖的联系资料、马来西亚／国际价格与部分公共文案
- `design/index.html`：公开服务与配套结构，以及马来西亚价格的结构化数据
- `data/youtube-stats.json`：已保存的 YouTube 公开频道数据

修改公开价格或配套名称时，必须同步检查：

1. `content.json` 的 `marketPricing.malaysia` 与 `marketPricing.international`。
2. `design/index.html` 的中文、英文和马来文服务／配套卡片结构。
3. 同一文件中的 `OfferCatalog` JSON-LD（该结构化数据保留马来西亚 MYR 定价）。
4. `script.js` 的 `marketPricing` 默认值与 `updatePackageCopy()`。

所有 WhatsApp 按钮在 HTML 中都有可用的备用网址；JavaScript 加载后会加入对应语言和服务名称。

## 图片

- `images/fgestudio-logo-transparent.webp`：页面 Logo
- `images/social/*-og.jpg`：1200×630 社交分享图
- `images/portfolio/fgestudio/*.webp`：设计服务展示图
- `images/packages/*.webp`：设计配套图
- `images/creators/*.webp`：创作者头像

原始 PNG 文件保留作源文件。新增网页图片时，应优先提供 WebP，并写明 `width`、`height`、有意义的 `alt`；首屏以下图片使用 `loading="lazy"`。

## YouTube 数据自动更新

`scripts/update-youtube-stats.mjs` 会读取 YouTube Data API，并更新 `data/youtube-stats.json`。GitHub Actions workflow 位于 `.github/workflows/`。

Repository secret：

```text
YOUTUBE_API_KEY
```

不要把 API key 写入 HTML、JavaScript、JSON、README 或提交记录。

## 发布与检查

网站由 `main` 分支通过 GitHub Pages 发布。合并前至少检查：

```bash
node --check script.js
jq empty content.json data/youtube-stats.json
```

并确认：

- 中文、English、Bahasa Melayu 可通过语言按钮切换；首次访问会按设备语言选定可用语言。
- 马来西亚访问显示 MYR，其他国家显示独立设定的 USD 价格。
- WhatsApp、Email、Facebook 和内部链接可用。
- 手机菜单、配套横向浏览、FAQ 与固定咨询按钮可用。
- `/404.html`、旧网址跳转、Canonical、robots 与 sitemap 正确。
- 隐私政策与实际使用的第三方服务一致。

法律条款中的订金、退款、修改次数和附加费用属于业务规则；没有负责人确认时，不要自行更改。
