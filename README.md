# FGESTUDIO Website

这是 FANTASY GENESIS ENTERTAINMENT STUDIO / 梦幻起源欢娱工作室 的静态官方网站。

网站定位：

- `index.html`：平面设计服务主页面
- `mcn.html`：游戏内容创作者 MCN 孵化页面
- `about.html`：公司介绍与两大业务分类页面

网站特点：

- 免费部署到 GitHub Pages
- 不需要购买域名也能上线
- 不需要数据库
- 不需要后端服务器
- 不使用 WordPress、Wix、Webflow、Shopify
- 使用 HTML、CSS、JavaScript
- 支持中文、English、Bahasa Melayu 三语切换
- YouTube 频道数据可通过免费 YouTube Data API key + GitHub Action 定时更新

注意：API key 只放在 GitHub Repository Secret 里面，不会写进 `index.html`、`script.js`，也不会暴露给访客。

## 文件结构

```text
FGESTUDIO WEB/
├── index.html
├── mcn.html
├── about.html
├── admin.html
├── content.json
├── style.css
├── script.js
├── README.md
├── data/
│   └── youtube-stats.json
├── images/
│   ├── fgestudio-logo-transparent.png
│   └── fgestudio-logo-social.png
├── scripts/
│   └── update-youtube-stats.mjs
└── .github/
    └── workflows/
        └── update-youtube-stats.yml
```

## 1. 如何本地打开网站

最简单方式：

1. 打开这个项目文件夹。
2. 双击 `index.html`。
3. 网站会直接在浏览器打开。

如果你要测试 `data/youtube-stats.json` 自动读取，建议使用 VS Code 的免费 Live Server：

1. 安装 VS Code。
2. 安装免费的 `Live Server` extension。
3. 右键 `index.html`。
4. 选择 `Open with Live Server`。

双击 `index.html` 也可以预览网站，只是部分浏览器会限制本地 JSON 读取；上线到 GitHub Pages 后会正常读取。

## 1.1 如何使用免费后台 UI

后台文件是：

```text
admin.html
```

使用方式：

1. 双击打开 `admin.html`。
2. 在后台修改基础资料、价格、作品图片路径或三语文字。
3. 修改完成后点击 `下载 content.json`。
4. 到 GitHub repository 上传并覆盖根目录的 `content.json`。
5. 如果你新增了图片，也要把图片上传到 GitHub 的 `images` 文件夹。
6. 点击 `Commit changes`。
7. 等 GitHub Pages 部署成功后，刷新网站。

注意：这个后台是免费安全版，不会自动登录 GitHub，也不会直接帮你上传文件。它只负责帮你编辑并生成 `content.json`。

如果你双击打开 `admin.html` 时，它没有自动读取旧的 `content.json`，可以点击 `导入 content.json` 手动导入旧文件继续编辑。

## 2. 如何修改公司资料

推荐使用后台 UI 修改：

1. 双击打开 `admin.html`。
2. 在 `基础资料` 修改公司名称、WhatsApp、业务邮箱、Facebook、Instagram。
3. 点击 `下载 content.json`。
4. 到 GitHub 上传并覆盖根目录的 `content.json`。
5. 等 GitHub Pages 部署成功后刷新网站。

也可以手动修改代码：

打开 `script.js`，最上面有：

```js
const contactSettings = {
  companyName: "FANTASY GENESIS ENTERTAINMENT STUDIO",
  shortName: "FGESTUDIO",
  chineseName: "梦幻起源欢娱工作室",
  whatsappNumber: "60172599400",
  email: "contact@fgestudio.my",
  emails: {
    general: "contact@fgestudio.my",
    design: "design@fgestudio.my",
    creators: "creators@fgestudio.my",
    business: "business@fgestudio.my",
  },
  facebookUrl: "https://www.facebook.com/fantasygenesisentertainmentstudio/",
  instagramUrl: "#",
};
```

你之后主要改这里：

- `companyName`：公司英文名
- `shortName`：短名称
- `chineseName`：中文工作室名
- `whatsappNumber`：WhatsApp 号码，建议写国家代码，不要加 `+`
- `email`：公司主要公开邮箱
- `emails.general`：公司主要公开邮箱
- `emails.design`：平面设计询问邮箱
- `emails.creators`：MCN 创作者孵化邮箱
- `emails.business`：品牌广告合作邮箱
- `facebookUrl`：Facebook 链接
- `instagramUrl`：Instagram 链接

## 3. 如何修改三语文字

推荐使用后台 UI：

1. 打开 `admin.html`。
2. 进入 `全部文字`。
3. 选择语言：中文 CN、English EN、Bahasa Melayu BM。
4. 搜索关键词，例如 `hero`、`services`、`pricing`、`mcn`、`contact`。
5. 修改文字后下载 `content.json`。
6. 上传并覆盖 GitHub 根目录的 `content.json`。

也可以手动修改代码：

所有中文、英文、马来文内容都在 `script.js` 的 `translations` 里面。

```js
const translations = {
  cn: { ... },
  en: { ... },
  bm: { ... },
};
```

语言对应：

- `cn`：中文
- `en`：English
- `bm`：Bahasa Melayu

例如你要改首页 slogan，可以搜索：

```js
"hero.slogan"
```

例如你要改服务内容，可以搜索：

```js
"services.mcn.title"
```

建议每次改文案时，三种语言都一起改，避免切换语言后内容不一致。

## 4. 如何修改价格

推荐使用后台 UI：

1. 打开 `admin.html`。
2. 进入 `价格配套`。
3. 把 `RMXX` 改成真实价格，例如 `RM99`，也可以写 `Contact Us`。
4. 下载 `content.json`。
5. 上传并覆盖 GitHub 根目录的 `content.json`。

目前有三个配套：

- Design Starter Package
- Creator Starter Package
- Monthly Growth Package

## 5. 如何修改 logo

目前网站使用两个 logo 文件：

```text
images/fgestudio-logo-transparent.png
images/fgestudio-logo-social.png
```

用途：

- `fgestudio-logo-transparent.png`：header、Hero、favicon
- `fgestudio-logo-social.png`：社交分享图 / Open Graph image

如果以后你要换 logo，建议继续用同样的文件名替换，这样不用改代码。

## 6. 如何修改作品集图片

推荐使用后台 UI：

1. 把真实作品图放进 `images` 文件夹，例如：

```text
images/poster-01.jpg
images/youtube-thumbnail-01.jpg
images/creator-branding-01.jpg
```

2. 打开 `admin.html`。
3. 进入 `作品图片`。
4. 填图片路径，例如：

```text
images/poster-01.jpg
```

5. 下载 `content.json`。
6. 上传 `content.json`，也要把新图片上传到 GitHub 的 `images` 文件夹。

## 7. YouTube 频道数据如何自动更新

网站的艺人频道数据会显示在 `#creators` 区块，目前频道是：

```text
https://www.youtube.com/@yinsi_gaming
```

网页读取的数据文件是：

```text
data/youtube-stats.json
```

GitHub Action 会定时运行这个脚本：

```text
scripts/update-youtube-stats.mjs
```

工作流文件是：

```text
.github/workflows/update-youtube-stats.yml
```

目前设置为每 6 小时自动更新一次。它不是秒级实时数据，通常会比 YouTube 页面稍微慢一点。

## 8. 如何设置免费的 YouTube API key

你需要一个免费的 Google Cloud / YouTube Data API key。步骤如下：

1. 登录 Google Cloud Console。
2. 建立一个新 Project。
3. 在 `APIs & Services` 里面启用 `YouTube Data API v3`。
4. 到 `Credentials`。
5. 点击 `Create credentials`。
6. 选择 `API key`。
7. 复制产生出来的 API key。

不要把 API key 贴进 `script.js`，也不要放进 `index.html`。

## 9. 如何把 API key 放进 GitHub

上传项目到 GitHub 后：

1. 打开你的 GitHub repository。
2. 点击 `Settings`。
3. 左边打开 `Secrets and variables`。
4. 点击 `Actions`。
5. 点击 `New repository secret`。
6. Name 填：

```text
YOUTUBE_API_KEY
```

7. Secret 填你刚才复制的 YouTube API key。
8. 点击 `Add secret`。

完成后，GitHub Action 才能读取 YouTube 数据。

## 10. 如何手动跑一次更新

1. 打开 GitHub repository。
2. 点击上方 `Actions`。
3. 找到 `Update YouTube stats`。
4. 点击 `Run workflow`。
5. 等它跑完。

如果频道数据有变化，GitHub 会自动提交更新 `data/youtube-stats.json`。

如果没有变化，它会显示 `No stats changes.`，这是正常的。

如果 Action 在 `git push` 那一步报权限错误：

1. 打开 repository 的 `Settings`。
2. 左边打开 `Actions`。
3. 点击 `General`。
4. 找到 `Workflow permissions`。
5. 选择 `Read and write permissions`。
6. 保存后再 Run workflow 一次。

## 11. 如何更换 MCN 艺人频道

如果之后要换成其他频道：

1. 打开 `.github/workflows/update-youtube-stats.yml`。
2. 找到：

```yaml
CHANNEL_HANDLE: "@yinsi_gaming"
```

3. 改成新的 YouTube handle，例如：

```yaml
CHANNEL_HANDLE: "@new_channel_handle"
```

4. 打开 `index.html`，搜索：

```html
creator-link
```

5. 把频道链接、艺人名字、介绍文字一起改掉。
6. 打开 `script.js`，把 `creators.yinsi.*` 相关三语文案也改掉。

## 12. 如何部署到 GitHub Pages

如果你还没有 GitHub account，请先到 GitHub 免费注册。

### 方法 A：使用免费的 github.io 网址

适合你暂时不买域名。

1. 登录 GitHub。
2. 点击右上角 `+`。
3. 选择 `New repository`。
4. Repository name 填：

```text
你的GitHub用户名.github.io
```

例子：

```text
fgestudio.github.io
```

5. 选择 `Public`。
6. 点击 `Create repository`。
7. 进入新的 repository 后，点击 `Add file`。
8. 点击 `Upload files`。
9. 上传整个项目文件夹里的内容，包含：
   - `index.html`
   - `mcn.html`
   - `about.html`
   - `admin.html`
   - `content.json`
   - `style.css`
   - `script.js`
   - `README.md`
   - `images` 文件夹
   - `data` 文件夹
   - `scripts` 文件夹
   - `.github` 文件夹
10. 点击 `Commit changes`。

通常等 1 到 5 分钟后，网站会出现在：

```text
https://你的GitHub用户名.github.io/
```

### 方法 B：使用普通 repository 名称

如果你的 repository 名称不是 `用户名.github.io`，例如：

```text
fgestudio-website
```

你需要打开 GitHub Pages：

1. 进入 repository。
2. 点击 `Settings`。
3. 左边找到 `Pages`。
4. 在 `Build and deployment` 里面选择：
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. 点击 `Save`。

发布后网址通常是：

```text
https://你的GitHub用户名.github.io/fgestudio-website/
```

## 13. 如何以后接上自定义域名

以后如果你购买了域名，可以在 GitHub Pages 连接自定义域名。

1. 进入 GitHub repository。
2. 打开 `Settings`。
3. 打开 `Pages`。
4. 在 `Custom domain` 输入你的域名，例如：

```text
www.yourcompany.com
```

5. 到你的域名服务商后台设置 DNS。
6. 常见做法是新增一个 `CNAME` record，指向：

```text
你的GitHub用户名.github.io
```

7. 回到 GitHub Pages，开启 `Enforce HTTPS`。

DNS 生效可能需要几分钟到 48 小时。

## 14. 上线前建议检查

上线前建议先检查：

1. `script.js` 的公司名称、WhatsApp、业务邮箱、Facebook、Instagram。
2. `admin.html` 能否打开。
3. `content.json` 是否已经上传到 GitHub 根目录。
4. `script.js` 的三种语言文案。
5. `index.html` 的 `RMXX` 价格。
6. `mcn.html` 的艺人名字、介绍和频道链接。
7. `data/youtube-stats.json` 是否存在。
8. GitHub Secret `YOUTUBE_API_KEY` 是否已经设置。
9. `index.html` 的 Portfolio 图片和作品描述。
10. `images` 文件夹里的 logo 和作品图片是否已经上传。
