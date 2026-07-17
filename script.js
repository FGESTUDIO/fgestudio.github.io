let contactSettings = {
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
};

const currentYear = new Date().getFullYear();

let translations = {
  cn: {
    "metaTitle.home": "{cnName}（FGESTUDIO）| 马来西亚平面设计与游戏创作者合作",
    "metaDescription.home": "{cnName}（FGESTUDIO / {company}）是来自马来西亚的线上创意工作室，提供平面设计服务，并与游戏内容创作者合作经营频道。",
    "metaTitle.design": "马来西亚平面设计服务 | {cnName}（FGESTUDIO）",
    "metaDescription.design": "{cnName}（FGESTUDIO / {company}）为商家与内容创作者提供海报、社交媒体帖子、广告图、banner、名片、YouTube 缩略图与月配套平面设计服务。",
    "metaTitle.mcn": "游戏创作者合作与频道支持 | {cnName}（FGESTUDIO）",
    "metaDescription.mcn": "{cnName}（FGESTUDIO / {company}）与游戏内容创作者一起整理频道定位、视觉包装、缩略图、内容方向与商业合作资料。",
    "metaTitle.about": "关于{cnName}（FGESTUDIO）| 马来西亚线上创意工作室",
    "metaDescription.about": "认识{cnName}（FGESTUDIO / {company}）：来自马来西亚、结合平面设计服务与游戏内容创作者合作的线上创意工作室。",
    "whatsappMessage.design": "你好，我想询问你们的平面设计服务。我的需求是：海报 / 社交媒体帖子 / 广告图 / Banner / 名片 / YouTube 缩略图 / 月配套设计。想了解价格配套、制作时间和需要准备的资料，谢谢。",
    "whatsappMessage.mcn": "你好，我想了解 {short} 的游戏创作者 MCN 合作。",
    "whatsappMessage.about": "你好，我想了解 {short} 的公司业务。",
    "emailSubject.design": "平面设计服务询问 - {short}",
    "emailSubject.mcn": "MCN 创作者孵化询问 - {short}",
    "emailSubject.general": "公司一般询问 - {short}",
    "emailSubject.creators": "MCN 创作者孵化询问 - {short}",
    "emailSubject.business": "品牌广告合作询问 - {short}",
    "emailSubject.about": "公司业务询问 - {short}",
    "emailBody.design": "你好，我想询问你们的平面设计服务。\\n\\n我的需求：\\n预算 / 时间：\\n需要设计的内容：\\n\\n谢谢。",
    "emailBody.mcn": "你好，我想询问 {short} 的 MCN 合作与创作者孵化。\\n\\n频道链接：\\n内容类型：\\n目前目标：\\n想了解的合作方向：\\n\\n谢谢。",
    "emailBody.general": "你好，我想询问 {short} 的公司业务。\\n\\n我的需求：\\n联系方式：\\n\\n谢谢。",
    "emailBody.creators": "你好，我想询问 {short} 的 MCN 合作与创作者孵化。\\n\\n频道链接：\\n内容类型：\\n目前目标：\\n想了解的合作方向：\\n\\n谢谢。",
    "emailBody.business": "你好，我是品牌方，想询问与 {short} 旗下艺人的广告合作。\\n\\n品牌 / 公司名称：\\n想合作的艺人：\\n产品 / 服务类型：\\n预算 / 时间：\\n合作形式：\\n\\n谢谢。",
    "emailBody.about": "你好，我想了解 {short} 的公司业务。\\n\\n我的需求：\\n联系方式：\\n\\n谢谢。",
    "contact.emailCopied": "Email 已复制，可以贴到你常用的邮箱发送。",
    "company.name": "{company}",
    "company.shortName": "{short}",
    "company.subtitle": "{cnName}",
    "nav.home": "首页",
    "nav.design": "设计服务",
    "nav.pricing": "价格配套",
    "nav.portfolio": "作品集",
    "nav.mcn": "MCN 业务",
    "nav.creators": "旗下创作者",
    "nav.about": "关于公司",
    "nav.business": "业务分类",
    "nav.contact": "联系",
    "hero.home.kicker": "马来西亚线上创意工作室",
    "hero.home.title": "梦幻起源欢娱工作室（FGESTUDIO）",
    "hero.home.copy": "梦幻起源欢娱工作室（FGESTUDIO）是来自马来西亚的线上创意工作室。我们为商家与创作者制作宣传视觉，也与游戏内容创作者合作整理频道方向、内容与商业合作资料。",
    "hero.home.ctaDesign": "进入平面设计网站",
    "hero.home.ctaMcn": "进入 MCN 网站",
    "hero.home.scroll": "查看两大业务",
    "hero.design.kicker": "平面设计服务",
    "hero.design.title": "让你的品牌宣传图更清楚、更专业、更容易发布。",
    "hero.design.slogan": "为本地商家、线上品牌与创作者制作可直接使用的视觉素材。",
    "hero.design.copy": "我们专注制作海报、社交媒体帖子、广告图、banner、名片、YouTube 缩略图和长期月配套设计，让你的宣传更有一致感。",
    "hero.design.ctaServices": "查看设计服务",
    "hero.design.ctaWhatsapp": "WhatsApp 询问设计",
    "hero.design.badge1": "社媒视觉",
    "hero.design.badge2": "广告与宣传图",
    "hero.design.badge3": "月配套设计",
    "hero.mcn.kicker": "游戏创作者 MCN 孵化",
    "hero.mcn.title": "让游戏内容创作者拥有更专业的频道形象和成长方向。",
    "hero.mcn.slogan": "频道定位、视觉包装、缩略图方向、内容节奏与长期成长支持。",
    "hero.mcn.copy": "MCN 业务专注协助游戏内容创作者整理频道品牌、优化内容呈现，并建立更稳定的发布和成长节奏。",
    "hero.mcn.ctaCreators": "查看旗下创作者",
    "hero.mcn.ctaEmail": "Email 咨询合作",
    "hero.mcn.ctaWhatsapp": "WhatsApp 询问 MCN",
    "hero.mcn.badge1": "频道包装",
    "hero.mcn.badge2": "内容成长",
    "hero.mcn.badge3": "游戏创作者",
    "hero.about.kicker": "关于梦幻起源欢娱工作室（FGESTUDIO）",
    "hero.about.title": "梦幻起源欢娱工作室（FGESTUDIO）是一间来自马来西亚的线上创意工作室。",
    "hero.about.slogan": "平面设计服务面向商家，MCN 孵化面向游戏内容创作者。",
    "hero.about.copy": "梦幻起源欢娱工作室（FGESTUDIO）以线上方式运作，支持中文、英文和马来文沟通，并分别提供平面设计服务与游戏内容创作者合作支持。",
    "hero.about.ctaDesign": "查看平面设计",
    "hero.about.ctaMcn": "查看 MCN 业务",
    "services.kicker": "设计服务",
    "services.title": "适合商家日常宣传、活动推广和线上内容发布。",
    "services.copy": "你可以只做单张设计，也可以选择每月固定配套，让视觉风格长期保持一致。",
    "services.poster.title": "海报与宣传图设计",
    "services.poster.copy": "适合活动、促销、新品发布、直播预告和品牌宣传。",
    "services.social.title": "社交媒体帖子设计",
    "services.social.copy": "为 Facebook、Instagram、小红书或社区内容制作统一视觉。",
    "services.ads.title": "Facebook / Instagram 广告图",
    "services.ads.copy": "制作适合广告投放、优惠宣传和产品推广的视觉素材。",
    "services.banner.title": "Banner 横幅设计",
    "services.banner.copy": "适合网站横幅、Facebook cover、活动主视觉和线上宣传横幅。",
    "services.card.title": "名片与基础品牌物料",
    "services.card.copy": "协助整理名片、简单品牌视觉、头像、封面和日常宣传格式。",
    "services.youtube.title": "YouTube 缩略图设计",
    "services.youtube.copy": "为视频、直播精华、教学内容和娱乐内容制作更有点击感的封面。",
    "services.brand.title": "品牌视觉整理",
    "services.brand.copy": "把颜色、字体、版式和发布风格整理成更稳定的品牌视觉方向。",
    "services.monthly.title": "月配套设计服务",
    "services.monthly.copy": "适合需要长期发帖、做活动和保持曝光的商家，减少重复沟通成本。",
    "pricing.kicker": "价格配套",
    "pricing.title": "先保留 RMXX，之后你可以自行换成真实价格。",
    "pricing.copy": "以下是适合单次设计和长期宣传的基础配套结构。",
    "pricing.starter.label": "单次设计",
    "pricing.starter.title": "Starter Package",
    "pricing.starter.item1": "1 个视觉设计项目",
    "pricing.starter.item2": "适合海报、帖子或缩略图",
    "pricing.starter.item3": "基础风格整理与交付文件",
    "pricing.standard.label": "常用宣传",
    "pricing.standard.title": "Standard Package",
    "pricing.standard.item1": "多张宣传视觉组合",
    "pricing.standard.item2": "适合活动、广告图和社媒发布",
    "pricing.standard.item3": "保持同一风格与品牌呈现",
    "pricing.monthly.label": "长期发布",
    "pricing.monthly.title": "Monthly Social Media Package",
    "pricing.monthly.item1": "每月固定视觉设计支持",
    "pricing.monthly.item2": "适合长期经营社交媒体的商家",
    "pricing.monthly.item3": "数量与内容范围可按需求调整",
    "pricing.cta": "询问配套",
    "portfolio.kicker": "作品集",
    "portfolio.title": "这里之后可以换成你的真实设计作品。",
    "portfolio.copy": "目前先放 placeholder，之后可以替换成海报、广告图、banner、缩略图或品牌视觉案例。",
    "portfolio.item1.alt": "品牌视觉作品占位图",
    "portfolio.item1.type": "品牌视觉",
    "portfolio.item1.title": "Campaign Visual Placeholder",
    "portfolio.item1.copy": "用于活动宣传、社交媒体推广和商业视觉。",
    "portfolio.item2.alt": "社交媒体设计作品占位图",
    "portfolio.item2.type": "社媒设计",
    "portfolio.item2.title": "Social Post Placeholder",
    "portfolio.item2.copy": "适合 Facebook、Instagram、广告图和日常内容发布。",
    "portfolio.item3.alt": "Banner 设计作品占位图",
    "portfolio.item3.type": "Banner 视觉",
    "portfolio.item3.title": "Banner Design Placeholder",
    "portfolio.item3.copy": "用于网站横幅、活动主视觉、频道封面和品牌宣传。",
    "process.kicker": "合作流程",
    "process.title": "设计委托用清楚流程推进，减少来回猜测。",
    "process.copy": "先确认目标和风格，再开始制作，最后按反馈修改并交付文件。",
    "process.step1.title": "了解需求",
    "process.step1.copy": "确认设计用途、尺寸、平台、文案和想要呈现的重点。",
    "process.step2.title": "确认风格",
    "process.step2.copy": "整理品牌颜色、参考图、目标客群和视觉方向。",
    "process.step3.title": "开始设计",
    "process.step3.copy": "根据确认好的方向制作视觉初稿。",
    "process.step4.title": "修改调整",
    "process.step4.copy": "根据反馈调整文案、排版、颜色和视觉重点。",
    "process.step5.title": "完成交付",
    "process.step5.copy": "交付适合发布的图片文件，必要时提供基础版本整理。",
    "why.kicker": "为什么选择我们",
    "why.title": "适合本地小商家，也适合需要长期发内容的线上品牌。",
    "why.item1.title": "设计风格清晰",
    "why.item1.copy": "重点放在信息清楚、视觉专业和适合发布，不做花但不实用的设计。",
    "why.item2.title": "适合本地宣传",
    "why.item2.copy": "可配合马来西亚本地商家的活动、节日、促销和社媒发布需求。",
    "why.item3.title": "沟通方便",
    "why.item3.copy": "可通过 WhatsApp 沟通需求、修改、交付和后续安排。",
    "why.item4.title": "一次性或月配套",
    "why.item4.copy": "可以只做单张设计，也可以安排长期月配套。",
    "why.item5.title": "支持三语沟通",
    "why.item5.copy": "支持中文、英文、马来文沟通，更适合本地市场。",
    "faq.kicker": "FAQ",
    "faq.title": "常见问题",
    "faq.q1": "可以只做一张海报吗？",
    "faq.a1": "可以。你可以只做单张海报、社交媒体帖子、YouTube 缩略图或 banner。",
    "faq.q2": "可以长期合作做月配套吗？",
    "faq.a2": "可以。月配套适合需要长期发布内容、活动图和社媒视觉的商家。",
    "faq.q3": "需要多久完成设计？",
    "faq.a3": "时间会根据设计数量和复杂度而定。确认需求后会先告知预计完成时间。",
    "faq.q4": "可以修改几次？",
    "faq.a4": "修改次数可以在确认配套时说明，范围会依设计项目或月配套而定。",
    "faq.q5": "如何付款？",
    "faq.a5": "付款方式可以在 WhatsApp 沟通后确认。这里暂时不放真实银行资料。",
    "mcnServices.kicker": "MCN 支持内容",
    "mcnServices.title": "不是单纯做图，而是协助创作者把频道经营得更清楚。",
    "mcnServices.copy": "适合 YouTube、TikTok、直播、游戏攻略、娱乐剪辑和游戏社群内容创作者。",
    "mcnServices.item1.title": "频道定位整理",
    "mcnServices.item1.copy": "协助明确内容方向、目标观众、游戏类型和频道特色。",
    "mcnServices.item2.title": "创作者视觉包装",
    "mcnServices.item2.copy": "整理头像、banner、缩略图风格和系列内容视觉。",
    "mcnServices.item3.title": "缩略图方向",
    "mcnServices.item3.copy": "让不同系列的视频封面更统一，也更容易被观众理解。",
    "mcnServices.item4.title": "内容节奏建议",
    "mcnServices.item4.copy": "协助整理发布频率、内容栏目、直播精华和短视频方向。",
    "mcnServices.item5.title": "商业合作呈现",
    "mcnServices.item5.copy": "为品牌合作、赞助内容和频道数据展示准备更专业的视觉呈现。",
    "mcnServices.item6.title": "长期成长支持",
    "mcnServices.item6.copy": "根据频道阶段调整视觉、内容和合作方向。",
    "creators.kicker": "旗下创作者",
    "creators.title": "展示现有艺人与频道成绩，让 MCN 业务更有信任感。",
    "creators.copy": "以下数据会由 GitHub Action 定时更新到静态数据文件，网页只读取已保存的数据。",
    "creators.artistLabel": "FGESTUDIO Artist",
    "creators.yinsi.name": "YinSi Gaming / 饮思YS",
    "creators.yinsi.copy": "游戏内容创作者，频道内容包含 Minecraft、二次元游戏、游戏攻略、直播精华和娱乐向游戏内容。",
    "creators.yinsi.cta": "查看 YouTube 频道",
    "creators.stats.subscribers": "YouTube 粉丝数",
    "creators.stats.views": "频道观看数",
    "creators.stats.videos": "公开视频数",
    "creators.updated": "数据更新时间加载中…",
    "creators.updatedAt": "数据更新时间：{date}",
    "mcnProcess.kicker": "孵化流程",
    "mcnProcess.title": "先整理方向，再优化频道呈现和内容节奏。",
    "mcnProcess.step1.title": "了解创作者",
    "mcnProcess.step1.copy": "确认频道现况、内容类型、目标平台和成长目标。",
    "mcnProcess.step2.title": "整理定位",
    "mcnProcess.step2.copy": "分析游戏类型、观众群、频道卖点和内容栏目。",
    "mcnProcess.step3.title": "频道包装",
    "mcnProcess.step3.copy": "制作或优化头像、banner、缩略图风格和视觉模板。",
    "mcnProcess.step4.title": "内容优化",
    "mcnProcess.step4.copy": "根据频道反馈调整标题、封面、内容节奏和发布策略。",
    "mcnProcess.step5.title": "长期成长",
    "mcnProcess.step5.copy": "持续观察频道数据，逐步提升专业形象和合作价值。",
    "business.kicker": "两大业务分类",
    "business.title": "同一个工作室，两个独立入口。",
    "business.copy": "如果你是商家，先看平面设计服务；如果你是游戏创作者，再进入 MCN 页面了解孵化业务。",
    "business.design.tag": "Business 01",
    "business.design.title": "平面设计与商业视觉",
    "business.design.copy": "为商家、品牌和创作者制作海报、社交媒体视觉、广告图、banner、名片和 YouTube 缩略图。",
    "business.design.item1": "适合本地商家与线上品牌",
    "business.design.item2": "可做单次设计或月配套",
    "business.design.item3": "重点是清楚、专业、可发布",
    "business.design.cta": "进入设计服务",
    "business.mcn.tag": "Business 02",
    "business.mcn.title": "游戏内容创作者 MCN 孵化",
    "business.mcn.copy": "为游戏内容创作者提供频道定位、视觉包装、缩略图方向、内容节奏、商业合作呈现和长期成长支持。",
    "business.mcn.item1": "适合 YouTube / TikTok / 直播创作者",
    "business.mcn.item2": "可展示旗下艺人与频道成绩",
    "business.mcn.item3": "重点是内容成长与专业形象",
    "business.mcn.cta": "进入 MCN 页面",
    "home.about.copy": "想先了解梦幻起源欢娱工作室（FGESTUDIO）的公司背景与发展方向？",
    "home.about.cta": "查看公司介绍 →",
    "aboutTimeline.kicker": "公司时间线",
    "aboutTimeline.title": "从创作者孵化出发，逐步扩展到视觉设计服务。",
    "aboutTimeline.copy": "FGESTUDIO 专注把现有的业务方向与合作方式说明清楚，让客户和创作者更快理解我们现在能提供什么。",
    "aboutTimeline.item1.title": "公司成立",
    "aboutTimeline.item1.copy": "FANTASY GENESIS ENTERTAINMENT STUDIO 成立，并以游戏内容创作者 MCN 孵化与创作者成长支持作为起点。",
    "aboutTimeline.item2.title": "开拓平面设计业务",
    "aboutTimeline.item2.copy": "工作室正式扩展平面设计服务，为本地商家、线上品牌与创作者制作海报、社交媒体视觉、广告图、banner 和其他商业宣传素材。",
    "aboutTimeline.item3.year": "敬请期待",
    "aboutTimeline.item3.title": "游戏开发业务正在准备中",
    "aboutTimeline.item3.copy": "游戏开发方向已经在尝试与开发中，目前仍需要时间打磨。等准备更完整后，我们会正式把游戏开发业务展示出来，敬请期待。",
    "aboutValues.kicker": "我们的方式",
    "aboutValues.title": "视觉要好看，也要帮业务说清楚重点。",
    "aboutValues.item1.title": "线上工作室",
    "aboutValues.item1.copy": "目前以线上沟通为主，不放实体地址，适合弹性合作。",
    "aboutValues.item2.title": "清楚分类",
    "aboutValues.item2.copy": "设计客户看设计服务，创作者看 MCN 页面，减少混乱。",
    "aboutValues.item3.title": "三语沟通",
    "aboutValues.item3.copy": "支持中文、英文、马来文沟通，更贴近马来西亚本地市场。",
    "contact.kicker": "联系我们",
    "contact.design.title": "需要平面设计服务？把你的宣传需求发给我们。",
    "contact.design.copy": "这个联系入口主要面向平面设计客户。你可以告诉我们设计类型、用途、尺寸、文案、参考风格和预计发布时间，我们会先帮你整理方向与配套。",
    "contact.mcn.title": "MCN 合作与创作者孵化，请通过 Email 联系我们。",
    "contact.mcn.copy": "创作者想加入 MCN 或了解孵化合作，请使用 creators@fgestudio.my。品牌方想找旗下艺人打广告或商业合作，请使用 business@fgestudio.my。",
    "contact.about.title": "请选择合适的联系入口。",
    "contact.about.copy": "如果还不确定业务类别，可以先用 WhatsApp 一般咨询；平面设计、MCN 创作者合作和品牌广告合作，建议使用下方对应邮箱。",
    "contact.design.whatsapp": "WhatsApp 询问平面设计",
    "contact.whatsapp": "WhatsApp 一般咨询",
    "contact.facebook": "Facebook",
    "contact.email": "Email：contact@fgestudio.my",
    "contact.emailGeneral": "公司公开邮箱",
    "contact.emailDesign": "平面设计",
    "contact.emailCreators": "MCN 创作者合作",
    "contact.emailBusiness": "品牌广告合作",
    "contact.copyEmail": "复制邮箱",
    "contact.writeEmail": "撰写邮件",
    "footer.rights": "© {year} FANTASY GENESIS ENTERTAINMENT STUDIO. 版权所有。",
    "footer.backTop": "回到顶部",
    "metaTitle.privacy": "{company} | 隐私政策",
    "metaDescription.privacy": "了解 {company} 如何处理通过 WhatsApp、Email、社交平台和网站沟通收到的个人资料。",
    "metaTitle.terms": "{company} | 服务条款",
    "metaDescription.terms": "查看 {company} 的设计服务、MCN 咨询、报价、付款、修改、交付和作品使用条款。",
    "whatsappMessage.privacy": "你好，我想询问 {short} 的隐私政策。",
    "whatsappMessage.terms": "你好，我想询问 {short} 的服务条款。",
    "footer.privacy": "隐私政策",
    "footer.terms": "服务条款",
  },
  en: {
    "metaTitle.home": "{company} (FGESTUDIO) | Graphic Design & Gaming Creator MCN",
    "metaDescription.home": "{company}, known as FGESTUDIO, provides graphic design services and MCN support for gaming content creators. Choose the business division you need.",
    "metaTitle.design": "{company} (FGESTUDIO) | Graphic Design Services",
    "metaDescription.design": "{company}, also known as FGESTUDIO, provides posters, social media posts, ad creatives, banners, business cards, YouTube thumbnails, and monthly graphic design packages.",
    "metaTitle.mcn": "{company} (FGESTUDIO) | Gaming Creator MCN Incubation",
    "metaDescription.mcn": "{company}, also known as FGESTUDIO, supports gaming creators with MCN incubation, channel branding, content direction, thumbnail strategy, and growth support.",
    "metaTitle.about": "{company} (FGESTUDIO) | About",
    "metaDescription.about": "Learn about {company}, also known as FGESTUDIO, an online studio for graphic design services and gaming creator MCN incubation.",
    "whatsappMessage.design": "Hi, I would like to ask about your graphic design services. I need: poster / social media post / ad creative / banner / business card / YouTube thumbnail / monthly design package. Please let me know the package, timeline, and materials needed. Thank you.",
    "whatsappMessage.mcn": "Hi, I would like to ask about {short} gaming creator MCN collaboration.",
    "whatsappMessage.about": "Hi, I would like to ask about {short} company services.",
    "emailSubject.design": "Graphic Design Service Enquiry - {short}",
    "emailSubject.mcn": "MCN Creator Incubation Enquiry - {short}",
    "emailSubject.general": "General Company Enquiry - {short}",
    "emailSubject.creators": "MCN Creator Incubation Enquiry - {short}",
    "emailSubject.business": "Brand Advertising Collaboration Enquiry - {short}",
    "emailSubject.about": "Company Service Enquiry - {short}",
    "emailBody.design": "Hi, I would like to ask about your graphic design services.\\n\\nMy request:\\nBudget / timeline:\\nDesign items needed:\\n\\nThank you.",
    "emailBody.mcn": "Hi, I would like to ask about {short} MCN collaboration and creator incubation.\\n\\nChannel link:\\nContent type:\\nCurrent goals:\\nCollaboration direction I want to discuss:\\n\\nThank you.",
    "emailBody.general": "Hi, I would like to ask about {short} company services.\\n\\nMy request:\\nContact details:\\n\\nThank you.",
    "emailBody.creators": "Hi, I would like to ask about {short} MCN collaboration and creator incubation.\\n\\nChannel link:\\nContent type:\\nCurrent goals:\\nCollaboration direction I want to discuss:\\n\\nThank you.",
    "emailBody.business": "Hi, I represent a brand and would like to ask about advertising or commercial collaboration with {short} creators.\\n\\nBrand / company name:\\nCreator I want to work with:\\nProduct / service type:\\nBudget / timeline:\\nCollaboration format:\\n\\nThank you.",
    "emailBody.about": "Hi, I would like to learn more about {short} company services.\\n\\nMy request:\\nContact details:\\n\\nThank you.",
    "contact.emailCopied": "Email copied. You can paste it into your preferred mail app.",
    "company.name": "{company}",
    "company.shortName": "{short}",
    "company.subtitle": "{cnName}",
    "nav.home": "Home",
    "nav.design": "Design",
    "nav.pricing": "Packages",
    "nav.portfolio": "Portfolio",
    "nav.mcn": "MCN",
    "nav.creators": "Creators",
    "nav.about": "About",
    "nav.business": "Business Lines",
    "nav.contact": "Contact",
    "hero.home.kicker": "FGESTUDIO Official Website",
    "hero.home.title": "Creative design and creator growth, brought together at one starting point.",
    "hero.home.copy": "Choose the business division you need and enter its dedicated site for services, work, and collaboration details.",
    "hero.home.ctaDesign": "Enter Design Website",
    "hero.home.ctaMcn": "Enter MCN Website",
    "hero.home.scroll": "Explore Our Two Divisions",
    "hero.design.kicker": "Graphic Design Services",
    "hero.design.title": "Clearer, sharper, publish-ready visuals for your brand.",
    "hero.design.slogan": "Practical visual assets for local businesses, online brands, and creators.",
    "hero.design.copy": "We design posters, social media posts, ad creatives, banners, business cards, YouTube thumbnails, and monthly visual packages so your promotions stay consistent.",
    "hero.design.ctaServices": "View Design Services",
    "hero.design.ctaWhatsapp": "Ask on WhatsApp",
    "hero.design.badge1": "Social visuals",
    "hero.design.badge2": "Ads and promos",
    "hero.design.badge3": "Monthly design",
    "hero.mcn.kicker": "Gaming Creator MCN Incubation",
    "hero.mcn.title": "A more professional channel identity and growth direction for gaming creators.",
    "hero.mcn.slogan": "Channel positioning, visual branding, thumbnail direction, content rhythm, and long-term growth support.",
    "hero.mcn.copy": "The MCN side helps gaming creators organize their channel brand, improve content presentation, and build a steadier publishing and growth rhythm.",
    "hero.mcn.ctaCreators": "View Creators",
    "hero.mcn.ctaEmail": "Email Collaboration",
    "hero.mcn.ctaWhatsapp": "Ask About MCN",
    "hero.mcn.badge1": "Channel branding",
    "hero.mcn.badge2": "Content growth",
    "hero.mcn.badge3": "Gaming creators",
    "hero.about.kicker": "About FGESTUDIO",
    "hero.about.title": "One online creative studio with two clear business directions.",
    "hero.about.slogan": "Graphic design serves businesses. MCN incubation serves gaming creators.",
    "hero.about.copy": "We separate commercial visual production from creator growth support so visitors can quickly find the service that matches their needs.",
    "hero.about.ctaDesign": "View Design",
    "hero.about.ctaMcn": "View MCN",
    "services.kicker": "Design Services",
    "services.title": "For daily promotions, campaigns, and online publishing.",
    "services.copy": "Request a one-off design or choose monthly support to keep your visual style consistent.",
    "services.poster.title": "Poster and Promo Design",
    "services.poster.copy": "For events, promotions, launches, livestream notices, and brand announcements.",
    "services.social.title": "Social Media Post Design",
    "services.social.copy": "Unified visuals for Facebook, Instagram, Xiaohongshu, or community content.",
    "services.ads.title": "Facebook / Instagram Ad Creatives",
    "services.ads.copy": "Visual assets for ads, offers, campaigns, and product promotions.",
    "services.banner.title": "Banner Design",
    "services.banner.copy": "For website banners, Facebook covers, campaign key visuals, and online promos.",
    "services.card.title": "Business Card and Basic Brand Assets",
    "services.card.copy": "Business cards, simple brand visuals, avatars, covers, and everyday promo formats.",
    "services.youtube.title": "YouTube Thumbnail Design",
    "services.youtube.copy": "Clickable covers for videos, livestream highlights, tutorials, and entertainment content.",
    "services.brand.title": "Visual Identity Direction",
    "services.brand.copy": "Organize colors, type, layout, and posting style into a steadier brand direction.",
    "services.monthly.title": "Monthly Design Support",
    "services.monthly.copy": "For businesses that post consistently, run campaigns, and want less repeated briefing.",
    "pricing.kicker": "Packages",
    "pricing.title": "RMXX placeholders are kept so you can update real prices later.",
    "pricing.copy": "Starter structures for one-off designs and ongoing promotional visuals.",
    "pricing.starter.label": "One-off design",
    "pricing.starter.title": "Starter Package",
    "pricing.starter.item1": "1 visual design project",
    "pricing.starter.item2": "Good for a poster, post, or thumbnail",
    "pricing.starter.item3": "Basic style direction and final files",
    "pricing.standard.label": "Regular promotion",
    "pricing.standard.title": "Standard Package",
    "pricing.standard.item1": "Multiple promotional visuals",
    "pricing.standard.item2": "For campaigns, ads, and social posts",
    "pricing.standard.item3": "Consistent brand presentation",
    "pricing.monthly.label": "Ongoing content",
    "pricing.monthly.title": "Monthly Social Media Package",
    "pricing.monthly.item1": "Monthly visual design support",
    "pricing.monthly.item2": "For businesses managing social media long term",
    "pricing.monthly.item3": "Quantity and scope can be adjusted",
    "pricing.cta": "Ask About Package",
    "portfolio.kicker": "Portfolio",
    "portfolio.title": "Replace these with your real design works later.",
    "portfolio.copy": "The placeholders can become posters, ads, banners, thumbnails, or brand visual cases.",
    "portfolio.item1.alt": "Brand visual portfolio placeholder",
    "portfolio.item1.type": "Brand Visual",
    "portfolio.item1.title": "Campaign Visual Placeholder",
    "portfolio.item1.copy": "For campaigns, social media promotions, and commercial visuals.",
    "portfolio.item2.alt": "Social media portfolio placeholder",
    "portfolio.item2.type": "Social Design",
    "portfolio.item2.title": "Social Post Placeholder",
    "portfolio.item2.copy": "For Facebook, Instagram, ads, and daily content publishing.",
    "portfolio.item3.alt": "Banner design portfolio placeholder",
    "portfolio.item3.type": "Banner Visual",
    "portfolio.item3.title": "Banner Design Placeholder",
    "portfolio.item3.copy": "For website banners, campaign key visuals, channel covers, and brand promos.",
    "process.kicker": "Process",
    "process.title": "A clear design process with less guessing.",
    "process.copy": "Confirm goals and style first, create the design, then revise and deliver files.",
    "process.step1.title": "Understand Needs",
    "process.step1.copy": "Confirm usage, size, platform, copy, and key message.",
    "process.step2.title": "Set Style",
    "process.step2.copy": "Align colors, references, audience, and visual direction.",
    "process.step3.title": "Design",
    "process.step3.copy": "Create the first design based on the confirmed direction.",
    "process.step4.title": "Revise",
    "process.step4.copy": "Adjust copy, layout, colors, and visual focus based on feedback.",
    "process.step5.title": "Deliver",
    "process.step5.copy": "Deliver publish-ready image files and basic version guidance when needed.",
    "why.kicker": "Why Choose Us",
    "why.title": "For local businesses and online brands that publish consistently.",
    "why.item1.title": "Clear design style",
    "why.item1.copy": "Focused on clear information, professional visuals, and publish-ready execution.",
    "why.item2.title": "Local promotion fit",
    "why.item2.copy": "Useful for Malaysian campaigns, festive promos, offers, and social media needs.",
    "why.item3.title": "Easy communication",
    "why.item3.copy": "Discuss briefs, revisions, delivery, and follow-ups through WhatsApp.",
    "why.item4.title": "One-off or monthly",
    "why.item4.copy": "Order one design or arrange monthly visual support.",
    "why.item5.title": "Three-language support",
    "why.item5.copy": "Communicate in Chinese, English, or Bahasa Melayu for the local market.",
    "faq.kicker": "FAQ",
    "faq.title": "Common Questions",
    "faq.q1": "Can I order only one poster?",
    "faq.a1": "Yes. You can order one poster, social media post, YouTube thumbnail, or banner.",
    "faq.q2": "Can we work together monthly?",
    "faq.a2": "Yes. Monthly packages are suitable for businesses that need ongoing content and social visuals.",
    "faq.q3": "How long does design take?",
    "faq.a3": "It depends on quantity and complexity. We will confirm an estimated timeline after the brief.",
    "faq.q4": "How many revisions are included?",
    "faq.a4": "Revision scope can be confirmed with the package and depends on the design type.",
    "faq.q5": "How do I pay?",
    "faq.a5": "Payment details can be confirmed through WhatsApp. Real bank details are not shown here.",
    "mcnServices.kicker": "MCN Support",
    "mcnServices.title": "Not just making images, but helping creators run a clearer channel.",
    "mcnServices.copy": "For YouTube, TikTok, livestream, gaming guides, entertainment edits, and gaming community creators.",
    "mcnServices.item1.title": "Channel Positioning",
    "mcnServices.item1.copy": "Clarify content direction, audience, game category, and channel identity.",
    "mcnServices.item2.title": "Creator Visual Branding",
    "mcnServices.item2.copy": "Avatar, banner, thumbnail style, and series visual systems.",
    "mcnServices.item3.title": "Thumbnail Direction",
    "mcnServices.item3.copy": "Make different video series feel more consistent and easier to understand.",
    "mcnServices.item4.title": "Content Rhythm",
    "mcnServices.item4.copy": "Plan posting frequency, content series, livestream highlights, and short-form direction.",
    "mcnServices.item5.title": "Brand Collaboration Presentation",
    "mcnServices.item5.copy": "Prepare clearer visuals for sponsorships, brand collaborations, and channel data.",
    "mcnServices.item6.title": "Long-term Growth Support",
    "mcnServices.item6.copy": "Adjust visuals, content, and collaboration direction as the channel grows.",
    "creators.kicker": "Creator Roster",
    "creators.title": "Current artists and channel results help build MCN trust.",
    "creators.copy": "These figures are refreshed by GitHub Action into a static data file, and the website only reads the saved data.",
    "creators.artistLabel": "FGESTUDIO Artist",
    "creators.yinsi.name": "YinSi Gaming / 饮思YS",
    "creators.yinsi.copy": "A gaming content creator covering Minecraft, anime-style games, guides, livestream highlights, and entertainment gaming content.",
    "creators.yinsi.cta": "View YouTube Channel",
    "creators.stats.subscribers": "Subscribers",
    "creators.stats.views": "Total views",
    "creators.stats.videos": "Videos",
    "creators.updated": "Loading update time…",
    "creators.updatedAt": "Last updated: {date}",
    "mcnProcess.kicker": "Incubation Process",
    "mcnProcess.title": "Set direction first, then improve channel presentation and content rhythm.",
    "mcnProcess.step1.title": "Understand Creator",
    "mcnProcess.step1.copy": "Review channel status, content type, target platform, and growth goals.",
    "mcnProcess.step2.title": "Set Positioning",
    "mcnProcess.step2.copy": "Analyze game type, audience, channel value, and content series.",
    "mcnProcess.step3.title": "Package Channel",
    "mcnProcess.step3.copy": "Create or refine avatar, banner, thumbnail style, and visual templates.",
    "mcnProcess.step4.title": "Optimize Content",
    "mcnProcess.step4.copy": "Adjust titles, covers, content rhythm, and posting strategy based on feedback.",
    "mcnProcess.step5.title": "Grow Long Term",
    "mcnProcess.step5.copy": "Review channel data and improve professional identity and collaboration value.",
    "business.kicker": "Two Business Lines",
    "business.title": "One studio, two separate entry points.",
    "business.copy": "Businesses can start with graphic design. Gaming creators can visit the MCN page.",
    "business.design.tag": "Business 01",
    "business.design.title": "Graphic Design and Commercial Visuals",
    "business.design.copy": "Posters, social visuals, ad creatives, banners, business cards, and YouTube thumbnails for businesses, brands, and creators.",
    "business.design.item1": "For local businesses and online brands",
    "business.design.item2": "One-off designs or monthly packages",
    "business.design.item3": "Clear, professional, publish-ready visuals",
    "business.design.cta": "Enter Design Services",
    "business.mcn.tag": "Business 02",
    "business.mcn.title": "Gaming Creator MCN Incubation",
    "business.mcn.copy": "Channel positioning, visual branding, thumbnail direction, content rhythm, brand collaboration presentation, and long-term growth support.",
    "business.mcn.item1": "For YouTube / TikTok / livestream creators",
    "business.mcn.item2": "Show signed artists and channel performance",
    "business.mcn.item3": "Focused on content growth and professional identity",
    "business.mcn.cta": "Enter MCN Page",
    "home.about.copy": "Want to understand FGESTUDIO's background and direction first?",
    "home.about.cta": "View Company Profile →",
    "aboutTimeline.kicker": "Company Timeline",
    "aboutTimeline.title": "Starting from creator incubation, then expanding into visual design services.",
    "aboutTimeline.copy": "FGESTUDIO keeps its active business directions and ways of working clear, so clients and creators can quickly understand what we offer today.",
    "aboutTimeline.item1.title": "Company Founded",
    "aboutTimeline.item1.copy": "FANTASY GENESIS ENTERTAINMENT STUDIO was founded, starting with gaming creator MCN incubation and creator growth support.",
    "aboutTimeline.item2.title": "Graphic Design Business Expanded",
    "aboutTimeline.item2.copy": "The studio officially expanded into graphic design services, creating posters, social media visuals, ad creatives, banners, and commercial promotional materials for local businesses, online brands, and creators.",
    "aboutTimeline.item3.year": "Coming Soon",
    "aboutTimeline.item3.title": "Game Development Is in Preparation",
    "aboutTimeline.item3.copy": "Our game development direction is already being explored and developed, but it still needs time to be polished. Once it is more complete, we will officially present this business line. Stay tuned.",
    "aboutValues.kicker": "How We Work",
    "aboutValues.title": "Visuals should look good and help the business message become clearer.",
    "aboutValues.item1.title": "Online Studio",
    "aboutValues.item1.copy": "We currently work online without showing a physical address, making collaboration flexible.",
    "aboutValues.item2.title": "Clear Categories",
    "aboutValues.item2.copy": "Design clients view design services; creators view the MCN page.",
    "aboutValues.item3.title": "Three-language Communication",
    "aboutValues.item3.copy": "Chinese, English, and Bahasa Melayu support for the Malaysian market.",
    "contact.kicker": "Contact Us",
    "contact.design.title": "Need graphic design support? Send us your promotional brief.",
    "contact.design.copy": "This contact section is mainly for graphic design enquiries. Share the design type, usage, size, copy, reference style, and expected posting date so we can suggest the right direction and package.",
    "contact.mcn.title": "For MCN collaboration and creator incubation, please contact us by email.",
    "contact.mcn.copy": "Creators who want to join the MCN or ask about incubation can use creators@fgestudio.my. Brands looking for advertising or commercial collaboration with our creators can use business@fgestudio.my.",
    "contact.about.title": "Choose the right contact channel.",
    "contact.about.copy": "If you are not sure which business line fits, use WhatsApp for a general enquiry. For graphic design, MCN creator collaboration, or brand advertising, please use the matching email below.",
    "contact.design.whatsapp": "Ask About Graphic Design",
    "contact.whatsapp": "WhatsApp General Enquiry",
    "contact.facebook": "Facebook",
    "contact.email": "Email: contact@fgestudio.my",
    "contact.emailGeneral": "Public email",
    "contact.emailDesign": "Graphic design",
    "contact.emailCreators": "MCN creator collaboration",
    "contact.emailBusiness": "Brand advertising collaboration",
    "contact.copyEmail": "Copy Email",
    "contact.writeEmail": "Write Email",
    "footer.rights": "© {year} FANTASY GENESIS ENTERTAINMENT STUDIO. All rights reserved.",
    "footer.backTop": "Back to top",
    "metaTitle.privacy": "{company} | Privacy Policy",
    "metaDescription.privacy": "Learn how {company} handles personal information received through WhatsApp, email, social platforms, and website communication.",
    "metaTitle.terms": "{company} | Terms & Conditions",
    "metaDescription.terms": "View {company} terms for design services, MCN enquiries, quotations, payment, revisions, delivery, and portfolio usage.",
    "whatsappMessage.privacy": "Hi, I would like to ask about the {short} privacy policy.",
    "whatsappMessage.terms": "Hi, I would like to ask about the {short} terms of service.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
  },
  bm: {
    "metaTitle.home": "{company} (FGESTUDIO) | Reka Bentuk Grafik & MCN Pencipta Gaming",
    "metaDescription.home": "{company}, dikenali sebagai FGESTUDIO, menyediakan servis reka bentuk grafik dan sokongan MCN untuk pencipta kandungan gaming. Pilih bahagian perniagaan yang anda perlukan.",
    "metaTitle.design": "{company} (FGESTUDIO) | Servis Reka Bentuk Grafik",
    "metaDescription.design": "{company}, juga dikenali sebagai FGESTUDIO, menyediakan poster, hantaran media sosial, grafik iklan, banner, kad nama, thumbnail YouTube, dan pakej reka bentuk bulanan.",
    "metaTitle.mcn": "{company} (FGESTUDIO) | Inkubasi MCN Pencipta Gaming",
    "metaDescription.mcn": "{company}, juga dikenali sebagai FGESTUDIO, menyokong pencipta gaming dengan inkubasi MCN, penjenamaan channel, arah kandungan, strategi thumbnail, dan sokongan pertumbuhan.",
    "metaTitle.about": "{company} (FGESTUDIO) | Tentang Syarikat",
    "metaDescription.about": "Kenali {company}, juga dikenali sebagai FGESTUDIO, studio online untuk servis reka bentuk grafik dan inkubasi MCN pencipta gaming.",
    "whatsappMessage.design": "Hai, saya ingin bertanya tentang servis reka bentuk grafik anda. Saya perlukan: poster / hantaran media sosial / grafik iklan / banner / kad nama / thumbnail YouTube / pakej reka bentuk bulanan. Sila maklumkan pakej, tempoh masa, dan bahan yang perlu disediakan. Terima kasih.",
    "whatsappMessage.mcn": "Hai, saya ingin bertanya tentang kerjasama MCN pencipta gaming {short}.",
    "whatsappMessage.about": "Hai, saya ingin bertanya tentang bisnes {short}.",
    "emailSubject.design": "Pertanyaan Servis Reka Bentuk Grafik - {short}",
    "emailSubject.mcn": "Pertanyaan Inkubasi Pencipta MCN - {short}",
    "emailSubject.general": "Pertanyaan Umum Syarikat - {short}",
    "emailSubject.creators": "Pertanyaan Inkubasi Pencipta MCN - {short}",
    "emailSubject.business": "Pertanyaan Kerjasama Iklan Jenama - {short}",
    "emailSubject.about": "Pertanyaan Servis Syarikat - {short}",
    "emailBody.design": "Hai, saya ingin bertanya tentang servis reka bentuk grafik anda.\\n\\nKeperluan saya:\\nBajet / masa:\\nItem reka bentuk yang diperlukan:\\n\\nTerima kasih.",
    "emailBody.mcn": "Hai, saya ingin bertanya tentang kerjasama MCN dan inkubasi pencipta {short}.\\n\\nPautan channel:\\nJenis kandungan:\\nMatlamat semasa:\\nArah kerjasama yang ingin dibincangkan:\\n\\nTerima kasih.",
    "emailBody.general": "Hai, saya ingin tahu lebih lanjut tentang bisnes {short}.\\n\\nKeperluan saya:\\nButiran untuk dihubungi:\\n\\nTerima kasih.",
    "emailBody.creators": "Hai, saya ingin bertanya tentang kerjasama MCN dan inkubasi pencipta {short}.\\n\\nPautan channel:\\nJenis kandungan:\\nMatlamat semasa:\\nArah kerjasama yang ingin dibincangkan:\\n\\nTerima kasih.",
    "emailBody.business": "Hai, saya wakil jenama dan ingin bertanya tentang iklan atau kerjasama komersial dengan pencipta di bawah {short}.\\n\\nNama jenama / syarikat:\\nPencipta yang ingin bekerjasama:\\nJenis produk / servis:\\nBajet / masa:\\nBentuk kerjasama:\\n\\nTerima kasih.",
    "emailBody.about": "Hai, saya ingin tahu lebih lanjut tentang bisnes {short}.\\n\\nKeperluan saya:\\nButiran untuk dihubungi:\\n\\nTerima kasih.",
    "contact.emailCopied": "Email telah disalin. Anda boleh tampal ke aplikasi email pilihan anda.",
    "company.name": "{company}",
    "company.shortName": "{short}",
    "company.subtitle": "{cnName}",
    "nav.home": "Utama",
    "nav.design": "Reka Bentuk",
    "nav.pricing": "Pakej",
    "nav.portfolio": "Portfolio",
    "nav.mcn": "MCN",
    "nav.creators": "Pencipta",
    "nav.about": "Tentang",
    "nav.business": "Cabang Bisnes",
    "nav.contact": "Hubungi",
    "hero.home.kicker": "Laman Rasmi FGESTUDIO",
    "hero.home.title": "Reka bentuk kreatif dan pertumbuhan pencipta, bermula di satu tempat.",
    "hero.home.copy": "Pilih bahagian perniagaan yang anda perlukan dan masuk ke laman khas untuk melihat servis, hasil kerja, dan cara kerjasama.",
    "hero.home.ctaDesign": "Masuk Laman Reka Bentuk",
    "hero.home.ctaMcn": "Masuk Laman MCN",
    "hero.home.scroll": "Lihat Dua Bahagian Perniagaan",
    "hero.design.kicker": "Servis Reka Bentuk Grafik",
    "hero.design.title": "Visual jenama yang lebih jelas, profesional, dan sedia diterbitkan.",
    "hero.design.slogan": "Aset visual praktikal untuk bisnes tempatan, jenama online, dan pencipta.",
    "hero.design.copy": "Kami menghasilkan poster, hantaran media sosial, grafik iklan, banner, kad nama, thumbnail YouTube, dan pakej visual bulanan supaya promosi anda lebih konsisten.",
    "hero.design.ctaServices": "Lihat Servis Reka Bentuk",
    "hero.design.ctaWhatsapp": "Tanya di WhatsApp",
    "hero.design.badge1": "Visual sosial",
    "hero.design.badge2": "Iklan dan promosi",
    "hero.design.badge3": "Reka bentuk bulanan",
    "hero.mcn.kicker": "Inkubasi MCN Pencipta Gaming",
    "hero.mcn.title": "Identiti channel dan arah pertumbuhan yang lebih profesional untuk pencipta gaming.",
    "hero.mcn.slogan": "Positioning channel, penjenamaan visual, arah thumbnail, ritma kandungan, dan sokongan pertumbuhan.",
    "hero.mcn.copy": "Bahagian MCN membantu pencipta gaming menyusun jenama channel, memperbaiki persembahan kandungan, dan membina ritma penerbitan yang lebih stabil.",
    "hero.mcn.ctaCreators": "Lihat Pencipta",
    "hero.mcn.ctaEmail": "Email Kerjasama",
    "hero.mcn.ctaWhatsapp": "Tanya Tentang MCN",
    "hero.mcn.badge1": "Penjenamaan channel",
    "hero.mcn.badge2": "Pertumbuhan kandungan",
    "hero.mcn.badge3": "Pencipta gaming",
    "hero.about.kicker": "Tentang FGESTUDIO",
    "hero.about.title": "Satu studio kreatif online dengan dua arah bisnes yang jelas.",
    "hero.about.slogan": "Reka bentuk grafik untuk bisnes. Inkubasi MCN untuk pencipta gaming.",
    "hero.about.copy": "Kami memisahkan produksi visual komersial dan sokongan pertumbuhan pencipta supaya pengunjung boleh cepat mencari servis yang sesuai.",
    "hero.about.ctaDesign": "Lihat Reka Bentuk",
    "hero.about.ctaMcn": "Lihat MCN",
    "services.kicker": "Servis Reka Bentuk",
    "services.title": "Untuk promosi harian, kempen, dan penerbitan online.",
    "services.copy": "Tempah satu reka bentuk atau pilih sokongan bulanan untuk mengekalkan gaya visual yang konsisten.",
    "services.poster.title": "Reka Bentuk Poster dan Promosi",
    "services.poster.copy": "Sesuai untuk acara, promosi, pelancaran, notis livestream, dan pengumuman jenama.",
    "services.social.title": "Reka Bentuk Hantaran Media Sosial",
    "services.social.copy": "Visual konsisten untuk Facebook, Instagram, Xiaohongshu, atau kandungan komuniti.",
    "services.ads.title": "Grafik Iklan Facebook / Instagram",
    "services.ads.copy": "Aset visual untuk iklan, tawaran, kempen, dan promosi produk.",
    "services.banner.title": "Reka Bentuk Banner",
    "services.banner.copy": "Untuk banner laman web, cover Facebook, visual utama kempen, dan promosi online.",
    "services.card.title": "Kad Nama dan Aset Jenama Asas",
    "services.card.copy": "Kad nama, visual jenama ringkas, avatar, cover, dan format promosi harian.",
    "services.youtube.title": "Reka Bentuk Thumbnail YouTube",
    "services.youtube.copy": "Cover yang menarik klik untuk video, highlight livestream, tutorial, dan hiburan.",
    "services.brand.title": "Arah Identiti Visual",
    "services.brand.copy": "Susun warna, font, layout, dan gaya posting kepada arah jenama yang lebih stabil.",
    "services.monthly.title": "Sokongan Reka Bentuk Bulanan",
    "services.monthly.copy": "Untuk bisnes yang kerap posting, buat kempen, dan mahu kurangkan brief berulang.",
    "pricing.kicker": "Pakej",
    "pricing.title": "Placeholder RMXX dikekalkan supaya anda boleh tukar harga nanti.",
    "pricing.copy": "Struktur asas untuk reka bentuk sekali dan visual promosi berterusan.",
    "pricing.starter.label": "Reka bentuk sekali",
    "pricing.starter.title": "Starter Package",
    "pricing.starter.item1": "1 projek reka bentuk visual",
    "pricing.starter.item2": "Sesuai untuk poster, hantaran, atau thumbnail",
    "pricing.starter.item3": "Arah gaya asas dan fail akhir",
    "pricing.standard.label": "Promosi biasa",
    "pricing.standard.title": "Standard Package",
    "pricing.standard.item1": "Beberapa visual promosi",
    "pricing.standard.item2": "Sesuai untuk kempen, iklan, dan hantaran sosial",
    "pricing.standard.item3": "Persembahan jenama yang konsisten",
    "pricing.monthly.label": "Kandungan berterusan",
    "pricing.monthly.title": "Monthly Social Media Package",
    "pricing.monthly.item1": "Sokongan visual bulanan",
    "pricing.monthly.item2": "Untuk bisnes yang mengurus media sosial jangka panjang",
    "pricing.monthly.item3": "Kuantiti dan skop boleh disesuaikan",
    "pricing.cta": "Tanya Pakej",
    "portfolio.kicker": "Portfolio",
    "portfolio.title": "Gantikan placeholder ini dengan karya sebenar nanti.",
    "portfolio.copy": "Placeholder ini boleh diganti dengan poster, iklan, banner, thumbnail, atau kes visual jenama.",
    "portfolio.item1.alt": "Placeholder portfolio visual jenama",
    "portfolio.item1.type": "Visual Jenama",
    "portfolio.item1.title": "Campaign Visual Placeholder",
    "portfolio.item1.copy": "Untuk kempen, promosi media sosial, dan visual komersial.",
    "portfolio.item2.alt": "Placeholder portfolio media sosial",
    "portfolio.item2.type": "Reka Bentuk Sosial",
    "portfolio.item2.title": "Social Post Placeholder",
    "portfolio.item2.copy": "Untuk Facebook, Instagram, iklan, dan penerbitan kandungan harian.",
    "portfolio.item3.alt": "Placeholder portfolio reka bentuk banner",
    "portfolio.item3.type": "Visual Banner",
    "portfolio.item3.title": "Banner Design Placeholder",
    "portfolio.item3.copy": "Untuk banner laman web, visual utama kempen, cover channel, dan promosi jenama.",
    "process.kicker": "Proses Kerja",
    "process.title": "Proses reka bentuk yang jelas supaya kurang meneka.",
    "process.copy": "Sahkan matlamat dan gaya dahulu, hasilkan reka bentuk, kemudian buat pindaan dan hantar fail.",
    "process.step1.title": "Fahami Keperluan",
    "process.step1.copy": "Sahkan kegunaan, saiz, platform, teks, dan mesej utama.",
    "process.step2.title": "Tetapkan Gaya",
    "process.step2.copy": "Selaraskan warna, rujukan, audiens, dan arah visual.",
    "process.step3.title": "Reka Bentuk",
    "process.step3.copy": "Hasilkan draf pertama berdasarkan arah yang telah disahkan.",
    "process.step4.title": "Pindaan",
    "process.step4.copy": "Laraskan teks, layout, warna, dan fokus visual berdasarkan maklum balas.",
    "process.step5.title": "Hantar",
    "process.step5.copy": "Hantar fail imej sedia diterbitkan dan panduan versi asas jika perlu.",
    "why.kicker": "Kenapa Pilih Kami",
    "why.title": "Untuk bisnes tempatan dan jenama online yang kerap menerbitkan kandungan.",
    "why.item1.title": "Gaya reka bentuk jelas",
    "why.item1.copy": "Fokus pada maklumat yang jelas, visual profesional, dan hasil yang sedia diterbitkan.",
    "why.item2.title": "Sesuai untuk promosi tempatan",
    "why.item2.copy": "Berguna untuk kempen Malaysia, promosi musim perayaan, tawaran, dan media sosial.",
    "why.item3.title": "Komunikasi mudah",
    "why.item3.copy": "Bincang brief, pindaan, penghantaran, dan follow-up melalui WhatsApp.",
    "why.item4.title": "Sekali atau bulanan",
    "why.item4.copy": "Tempah satu reka bentuk atau susun sokongan visual bulanan.",
    "why.item5.title": "Sokongan tiga bahasa",
    "why.item5.copy": "Komunikasi dalam Bahasa Cina, English, atau Bahasa Melayu untuk pasaran tempatan.",
    "faq.kicker": "FAQ",
    "faq.title": "Soalan Lazim",
    "faq.q1": "Boleh tempah satu poster sahaja?",
    "faq.a1": "Boleh. Anda boleh tempah satu poster, hantaran media sosial, thumbnail YouTube, atau banner.",
    "faq.q2": "Boleh bekerjasama bulanan?",
    "faq.a2": "Boleh. Pakej bulanan sesuai untuk bisnes yang perlukan kandungan dan visual sosial berterusan.",
    "faq.q3": "Berapa lama masa reka bentuk diperlukan?",
    "faq.a3": "Tempoh bergantung pada kuantiti dan tahap kompleks. Anggaran masa akan diberitahu selepas brief disahkan.",
    "faq.q4": "Boleh buat berapa kali pindaan?",
    "faq.a4": "Skop pindaan boleh disahkan bersama pakej dan bergantung pada jenis reka bentuk.",
    "faq.q5": "Bagaimana cara bayaran?",
    "faq.a5": "Cara bayaran boleh disahkan melalui WhatsApp. Maklumat bank sebenar belum dipaparkan di sini.",
    "mcnServices.kicker": "Sokongan MCN",
    "mcnServices.title": "Bukan sekadar buat gambar, tetapi membantu pencipta mengurus channel dengan lebih jelas.",
    "mcnServices.copy": "Untuk pencipta YouTube, TikTok, livestream, panduan gaming, edit hiburan, dan komuniti gaming.",
    "mcnServices.item1.title": "Positioning Channel",
    "mcnServices.item1.copy": "Jelaskan arah kandungan, audiens, kategori game, dan identiti channel.",
    "mcnServices.item2.title": "Penjenamaan Visual Pencipta",
    "mcnServices.item2.copy": "Avatar, banner, gaya thumbnail, dan sistem visual siri kandungan.",
    "mcnServices.item3.title": "Arah Thumbnail",
    "mcnServices.item3.copy": "Jadikan siri video lebih konsisten dan mudah difahami penonton.",
    "mcnServices.item4.title": "Ritma Kandungan",
    "mcnServices.item4.copy": "Rancang kekerapan posting, siri kandungan, highlight livestream, dan arah video pendek.",
    "mcnServices.item5.title": "Persembahan Kerjasama Jenama",
    "mcnServices.item5.copy": "Sediakan visual lebih jelas untuk sponsorship, kerjasama jenama, dan data channel.",
    "mcnServices.item6.title": "Sokongan Pertumbuhan Jangka Panjang",
    "mcnServices.item6.copy": "Laraskan visual, kandungan, dan arah kerjasama mengikut tahap channel.",
    "creators.kicker": "Pencipta Kami",
    "creators.title": "Artis semasa dan pencapaian channel membantu membina kepercayaan MCN.",
    "creators.copy": "Angka ini dikemas kini oleh GitHub Action ke dalam fail data statik, dan laman web hanya membaca data yang telah disimpan.",
    "creators.artistLabel": "FGESTUDIO Artist",
    "creators.yinsi.name": "YinSi Gaming / 饮思YS",
    "creators.yinsi.copy": "Pencipta kandungan gaming yang merangkumi Minecraft, game gaya anime, panduan, highlight livestream, dan kandungan hiburan gaming.",
    "creators.yinsi.cta": "Lihat Channel YouTube",
    "creators.stats.subscribers": "Subscriber",
    "creators.stats.views": "Jumlah tontonan",
    "creators.stats.videos": "Video",
    "creators.updated": "Memuatkan masa kemas kini…",
    "creators.updatedAt": "Kemas kini terakhir: {date}",
    "mcnProcess.kicker": "Proses Inkubasi",
    "mcnProcess.title": "Tetapkan arah dahulu, kemudian baik pulih persembahan channel dan ritma kandungan.",
    "mcnProcess.step1.title": "Fahami Pencipta",
    "mcnProcess.step1.copy": "Semak keadaan channel, jenis kandungan, platform sasaran, dan matlamat pertumbuhan.",
    "mcnProcess.step2.title": "Tetapkan Positioning",
    "mcnProcess.step2.copy": "Analisis jenis game, audiens, nilai channel, dan siri kandungan.",
    "mcnProcess.step3.title": "Packaging Channel",
    "mcnProcess.step3.copy": "Hasilkan atau baik pulih avatar, banner, gaya thumbnail, dan template visual.",
    "mcnProcess.step4.title": "Optimumkan Kandungan",
    "mcnProcess.step4.copy": "Laraskan tajuk, cover, ritma kandungan, dan strategi posting berdasarkan maklum balas.",
    "mcnProcess.step5.title": "Berkembang Jangka Panjang",
    "mcnProcess.step5.copy": "Pantau data channel dan tingkatkan identiti profesional serta nilai kerjasama.",
    "business.kicker": "Dua Cabang Bisnes",
    "business.title": "Satu studio, dua pintu masuk yang berasingan.",
    "business.copy": "Bisnes boleh mula dengan reka bentuk grafik. Pencipta gaming boleh masuk ke halaman MCN.",
    "business.design.tag": "Business 01",
    "business.design.title": "Reka Bentuk Grafik dan Visual Komersial",
    "business.design.copy": "Poster, visual sosial, grafik iklan, banner, kad nama, dan thumbnail YouTube untuk bisnes, jenama, dan pencipta.",
    "business.design.item1": "Untuk bisnes tempatan dan jenama online",
    "business.design.item2": "Reka bentuk sekali atau pakej bulanan",
    "business.design.item3": "Visual yang jelas, profesional, dan sedia diterbitkan",
    "business.design.cta": "Masuk Servis Reka Bentuk",
    "business.mcn.tag": "Business 02",
    "business.mcn.title": "Inkubasi MCN Pencipta Gaming",
    "business.mcn.copy": "Positioning channel, penjenamaan visual, arah thumbnail, ritma kandungan, persembahan kerjasama jenama, dan pertumbuhan jangka panjang.",
    "business.mcn.item1": "Untuk pencipta YouTube / TikTok / livestream",
    "business.mcn.item2": "Memaparkan artis dan pencapaian channel",
    "business.mcn.item3": "Fokus pada pertumbuhan kandungan dan identiti profesional",
    "business.mcn.cta": "Masuk Halaman MCN",
    "home.about.copy": "Mahu kenali latar belakang dan hala tuju FGESTUDIO terlebih dahulu?",
    "home.about.cta": "Lihat Profil Syarikat →",
    "aboutTimeline.kicker": "Garis Masa Syarikat",
    "aboutTimeline.title": "Bermula daripada inkubasi pencipta, kemudian berkembang ke servis reka bentuk visual.",
    "aboutTimeline.copy": "FGESTUDIO menerangkan hala tuju bisnes dan cara kerjasama yang aktif dengan jelas supaya pelanggan dan pencipta memahami apa yang kami tawarkan sekarang.",
    "aboutTimeline.item1.title": "Syarikat Ditubuhkan",
    "aboutTimeline.item1.copy": "FANTASY GENESIS ENTERTAINMENT STUDIO ditubuhkan dengan permulaan dalam inkubasi MCN pencipta gaming dan sokongan pertumbuhan pencipta.",
    "aboutTimeline.item2.title": "Mengembangkan Servis Reka Bentuk Grafik",
    "aboutTimeline.item2.copy": "Studio mula mengembangkan servis reka bentuk grafik secara rasmi, menghasilkan poster, visual sosial, grafik iklan, banner, dan bahan promosi komersial untuk bisnes tempatan, jenama online, dan pencipta.",
    "aboutTimeline.item3.year": "Akan Datang",
    "aboutTimeline.item3.title": "Pembangunan Game Sedang Disediakan",
    "aboutTimeline.item3.copy": "Arah pembangunan game sudah mula dicuba dan dibangunkan, tetapi masih memerlukan masa untuk diperhalusi. Apabila lebih lengkap, kami akan memperkenalkan cabang bisnes ini secara rasmi. Nantikan.",
    "aboutValues.kicker": "Cara Kami Bekerja",
    "aboutValues.title": "Visual perlu nampak baik dan membantu mesej bisnes menjadi lebih jelas.",
    "aboutValues.item1.title": "Studio Online",
    "aboutValues.item1.copy": "Kami bekerja secara online tanpa memaparkan alamat fizikal, menjadikan kerjasama lebih fleksibel.",
    "aboutValues.item2.title": "Kategori Jelas",
    "aboutValues.item2.copy": "Pelanggan reka bentuk lihat servis reka bentuk; pencipta lihat halaman MCN.",
    "aboutValues.item3.title": "Komunikasi Tiga Bahasa",
    "aboutValues.item3.copy": "Sokongan Bahasa Cina, English, dan Bahasa Melayu untuk pasaran Malaysia.",
    "contact.kicker": "Hubungi Kami",
    "contact.design.title": "Perlukan servis reka bentuk grafik? Hantar brief promosi anda kepada kami.",
    "contact.design.copy": "Bahagian hubungi ini terutama untuk pertanyaan reka bentuk grafik. Beritahu jenis reka bentuk, kegunaan, saiz, teks, gaya rujukan, dan tarikh posting supaya kami boleh cadangkan arah dan pakej yang sesuai.",
    "contact.mcn.title": "Untuk kerjasama MCN dan inkubasi pencipta, sila hubungi kami melalui email.",
    "contact.mcn.copy": "Pencipta yang ingin menyertai MCN atau bertanya tentang inkubasi boleh menggunakan creators@fgestudio.my. Jenama yang ingin membuat iklan atau kerjasama komersial dengan pencipta kami boleh menggunakan business@fgestudio.my.",
    "contact.about.title": "Pilih saluran hubungan yang sesuai.",
    "contact.about.copy": "Jika anda belum pasti kategori bisnes yang sesuai, gunakan WhatsApp untuk pertanyaan umum. Untuk reka bentuk grafik, kerjasama pencipta MCN, atau iklan jenama, sila gunakan email yang sepadan di bawah.",
    "contact.design.whatsapp": "Tanya Reka Bentuk Grafik",
    "contact.whatsapp": "Pertanyaan Umum WhatsApp",
    "contact.facebook": "Facebook",
    "contact.email": "Email: contact@fgestudio.my",
    "contact.emailGeneral": "Email umum",
    "contact.emailDesign": "Reka bentuk grafik",
    "contact.emailCreators": "Kerjasama pencipta MCN",
    "contact.emailBusiness": "Kerjasama iklan jenama",
    "contact.copyEmail": "Salin Email",
    "contact.writeEmail": "Tulis Email",
    "footer.rights": "© {year} FANTASY GENESIS ENTERTAINMENT STUDIO. Hak cipta terpelihara.",
    "footer.backTop": "Kembali ke atas",
    "metaTitle.privacy": "{company} | Dasar Privasi",
    "metaDescription.privacy": "Ketahui cara {company} mengendalikan maklumat peribadi yang diterima melalui WhatsApp, email, platform sosial, dan komunikasi laman web.",
    "metaTitle.terms": "{company} | Terma Perkhidmatan",
    "metaDescription.terms": "Lihat terma {company} untuk servis reka bentuk, pertanyaan MCN, sebut harga, bayaran, pindaan, penghantaran, dan penggunaan portfolio.",
    "whatsappMessage.privacy": "Hai, saya ingin bertanya tentang dasar privasi {short}.",
    "whatsappMessage.terms": "Hai, saya ingin bertanya tentang terma perkhidmatan {short}.",
    "footer.privacy": "Dasar Privasi",
    "footer.terms": "Terma Perkhidmatan",
  },
};

// Keep the public-facing copy direct and specific. These overrides also make
// language switching use the same brand voice as the default HTML content.
Object.assign(translations.cn, {
  "metaTitle.home": "FGESTUDIO | 马来西亚平面设计与游戏创作者合作",
  "metaDescription.home": "FGESTUDIO（梦幻起源欢娱工作室）是来自马来西亚的线上创意工作室，提供平面设计服务，并与游戏内容创作者合作经营频道。",
  "metaTitle.design": "FGESTUDIO | 马来西亚平面设计服务",
  "metaDescription.design": "FGESTUDIO（梦幻起源欢娱工作室）为商家与内容创作者制作海报、社媒贴文、广告图、Banner、名片和 YouTube 缩略图。",
  "metaTitle.mcn": "FGESTUDIO | 游戏创作者合作与频道支持",
  "metaDescription.mcn": "FGESTUDIO 与游戏内容创作者一起整理频道定位、视觉包装、缩略图、内容栏目与商业合作资料。",
  "metaTitle.about": "FGESTUDIO | 关于马来西亚线上创意工作室",
  "metaDescription.about": "认识来自马来西亚的 FGESTUDIO（梦幻起源欢娱工作室）：为商家提供平面设计，并与游戏内容创作者合作经营频道的线上创意工作室。",
  "whatsappMessage.design": "你好，我想询问平面设计服务。\\n\\n我需要设计的内容：\\n发布平台 / 尺寸：\\n主要文案或宣传重点：\\n预计发布日期：\\n\\n谢谢。",
  "whatsappMessage.mcn": "你好，我想了解 {short} 的游戏创作者合作。",
  "whatsappMessage.about": "你好，我想了解 {short} 的服务与合作方式。",
  "emailSubject.design": "设计需求咨询 - {short}",
  "emailSubject.mcn": "游戏创作者合作咨询 - {short}",
  "emailSubject.creators": "游戏创作者合作咨询 - {short}",
  "emailBody.design": "你好，我想询问平面设计服务。\\n\\n需要设计的内容：\\n发布平台 / 尺寸：\\n主要文案或宣传重点：\\n参考风格（如有）：\\n预计发布日期：\\n\\n谢谢。",
  "emailBody.mcn": "你好，我想了解 {short} 的游戏创作者合作。\\n\\n频道链接：\\n内容类型：\\n主要发布平台：\\n目前想解决的问题：\\n\\n谢谢。",
  "emailBody.creators": "你好，我想了解 {short} 的游戏创作者合作。\\n\\n频道链接：\\n内容类型：\\n主要发布平台：\\n目前想解决的问题：\\n\\n谢谢。",
  "hero.home.kicker": "平面设计 · 游戏创作者合作",
  "hero.home.title": "我们帮商家把宣传做清楚，也陪游戏创作者把频道做起来。",
  "hero.home.copy": "FGESTUDIO 是来自马来西亚的线上创意工作室。我们为商家与创作者制作宣传视觉，也与游戏内容创作者合作整理频道方向、内容与商业合作资料。",
  "hero.home.ctaDesign": "我要做设计",
  "hero.home.ctaMcn": "我是游戏创作者",
  "hero.home.scroll": "看看我们在做什么",
  "hero.design.title": "不只是把图做好看，而是让顾客一眼看懂你在卖什么。",
  "hero.design.slogan": "为商家、品牌与内容创作者制作有明确用途的宣传视觉。",
  "hero.design.copy": "海报、社媒贴文、广告图和 YouTube 缩略图，都会按照发布平台、目标顾客和宣传重点来设计。单张委托或月配套都可以。",
  "hero.design.ctaServices": "查看服务与价格",
  "hero.design.ctaWhatsapp": "发送设计需求",
  "hero.mcn.kicker": "游戏创作者合作",
  "hero.mcn.title": "做游戏内容，不需要一直靠自己摸索。",
  "hero.mcn.slogan": "频道定位、视觉包装、缩略图、内容栏目与合作资料，一起慢慢整理。",
  "hero.mcn.copy": "FGESTUDIO 与游戏创作者一起整理频道定位、视觉包装、视频封面和内容节奏，并协助准备商业合作需要的频道资料。",
  "hero.mcn.ctaEmail": "提交频道资料",
  "hero.mcn.badge1": "频道定位",
  "hero.mcn.badge2": "内容与封面",
  "hero.about.title": "FGESTUDIO 是一间来自马来西亚的线上创意工作室。",
  "hero.about.slogan": "为商家做平面设计，也与游戏内容创作者一起经营频道。",
  "hero.about.copy": "团队以线上方式运作，支持中文、英文和马来文沟通。我们把设计与创作者合作放在同一个工作室里，因为两者都需要把内容、视觉和对外资料整理清楚。",
  "services.title": "从一张宣传图，到持续更新的社媒内容。",
  "services.copy": "告诉我们要发布在哪里、想让顾客知道什么，以及什么时候要用；我们会按实际用途准备设计。",
  "services.poster.title": "宣传与广告设计",
  "services.poster.copy": "海报、促销图、活动主视觉和 Meta 广告素材，用于新品、优惠、开业或活动宣传。",
  "services.social.title": "社交媒体内容",
  "services.social.copy": "为 Facebook、Instagram、小红书和日常贴文准备一组能持续使用的视觉内容。",
  "services.banner.title": "品牌基础物料",
  "services.banner.copy": "名片、Banner、Facebook Cover 和基础视觉整理，让品牌在常用平台看起来更统一。",
  "services.youtube.copy": "为游戏、教学、娱乐和直播内容制作一眼能看懂主题的 YouTube 缩略图。",
  "services.monthly.title": "长期月配套",
  "services.monthly.copy": "需要固定发帖或经常做活动时，可按每月张数安排内容，少一点重复沟通。",
  "mcnServices.title": "把频道该先做什么，一项一项整理出来。",
  "mcnServices.copy": "面向 YouTube、TikTok 和直播内容创作者；合作会按频道目前的阶段和实际需要来安排。",
  "mcnServices.item1.copy": "一起确认频道要做给谁看、主要做什么游戏，以及观众为什么会留下来。",
  "mcnServices.item2.copy": "整理头像、Banner、缩略图风格和系列内容的基本视觉规则。",
  "mcnServices.item3.title": "标题与缩略图方向",
  "mcnServices.item3.copy": "让观众在看到封面和标题时，知道这支影片讲什么、值不值得点进来。",
  "mcnServices.item4.copy": "把长片、短片、直播精华和内容栏目排出比较能执行的发布节奏。",
  "mcnServices.item5.title": "频道资料与品牌合作准备",
  "mcnServices.item5.copy": "整理频道介绍、基本数据和合作资料，方便需要时与品牌沟通。",
  "mcnServices.item6.title": "按频道阶段调整",
  "mcnServices.item6.copy": "频道变化后，再一起调整内容、视觉或合作重点；不承诺固定的增长结果。",
  "creators.title": "旗下创作者",
  "creators.kicker": "FGESTUDIO CREATOR NETWORK",
  "creators.copy": "汇聚游戏内容创作者，连接优质内容、观众与品牌合作机会。",
  "creators.tag.minecraft": "Minecraft",
  "creators.tag.anime": "二次元游戏",
  "creators.tag.guides": "游戏攻略",
  "creators.tag.live": "游戏直播",
  "creators.yinsi.cooperationCta": "洽谈品牌合作",
  "creators.yinsi.cooperationMessage": "您好，我想咨询与 YinSi Gaming / 饮思YS 的品牌合作。",
  "creators.stats.subscribers": "YouTube 订阅者",
  "creators.stats.views": "累计观看次数",
  "creators.stats.videos": "公开视频",
  "creators.updatedAt": "数据更新于 {date}",
  "creators.featuredKicker": "YINSI GAMING",
  "creators.featuredTitle": "代表内容",
  "creators.video.open": "在 YouTube 打开视频",
  "creators.video.thumbnail": "视频缩略图",
  "creators.cooperationTypes": "品牌推广 · 游戏合作 · 内容植入 · 直播合作",
  "mcnProcess.kicker": "合作方式",
  "mcnProcess.title": "先了解频道现况，再决定下一步要做什么。",
  "mcnProcess.step1.copy": "先看频道现有内容、发布平台和创作者目前遇到的问题。",
  "mcnProcess.step2.copy": "确认内容方向、观众、游戏类别和想先改善的项目。",
  "mcnProcess.step3.copy": "需要时再整理头像、Banner、缩略图和频道介绍。",
  "mcnProcess.step4.copy": "根据发布后的反馈，调整标题、封面、栏目和节奏。",
  "mcnProcess.step5.title": "持续复盘",
  "mcnProcess.step5.copy": "合作会随着频道阶段调整，不把成果包装成保证。",
  "business.kicker": "我们在做什么",
  "business.title": "给商家的宣传设计，也给游戏创作者的频道支持。",
  "business.copy": "不管你是要宣传生意，还是正在经营游戏频道，都可以先从最需要解决的部分开始。",
  "business.design.title": "平面设计服务",
  "business.design.copy": "需要海报、社媒贴文、广告图、Banner、名片或 YouTube 封面？告诉我们发布平台、内容和目标，我们会按照实际用途完成设计。",
  "business.design.item1": "适合商家、品牌与内容创作者",
  "business.design.item2": "单张委托或固定月配套",
  "business.design.item3": "先把宣传重点说清楚",
  "business.design.cta": "查看服务与价格",
  "business.mcn.title": "游戏创作者合作",
  "business.mcn.copy": "面向 YouTube、TikTok 和直播内容创作者，一起整理频道定位、视觉包装、视频封面、内容栏目与商业合作资料。",
  "business.mcn.item1": "从频道目前的问题开始谈",
  "business.mcn.item2": "按实际阶段安排支持项目",
  "business.mcn.item3": "不夸大成果，不套用成长承诺",
  "business.mcn.cta": "了解合作方式",
  "home.about.copy": "想知道 FGESTUDIO 是怎样开始、现在在做什么？",
  "home.about.cta": "认识 FGESTUDIO →",
  "aboutTimeline.title": "从创作者孵化出发，逐步扩展到视觉设计服务。",
  "aboutTimeline.copy": "FGESTUDIO 专注把现有的业务方向与合作方式说明清楚，让客户和创作者更快理解我们现在能提供什么。",
  "aboutTimeline.item1.title": "创作者项目开始",
  "aboutTimeline.item1.copy": "团队从游戏内容与创作者合作方向起步，累积频道经营与内容制作经验。",
  "aboutTimeline.item2.title": "FGESTUDIO 正式注册并扩展设计业务",
  "aboutTimeline.item2.copy": "工作室于 2026 年正式注册，并开始为商家、品牌和内容创作者提供平面设计服务。",
  "aboutTimeline.item3.title": "游戏开发仍在探索和准备中",
  "aboutTimeline.item3.copy": "这是团队正在研究的未来方向，目前尚未作为正式对外服务提供。",
  "aboutValues.title": "线上合作，但每一个需求都要讲清楚。",
  "aboutValues.item1.copy": "目前以线上沟通和交付为主，适合不同地区的客户与创作者合作。",
  "aboutValues.item2.title": "两项业务，一个做事方式",
  "aboutValues.item2.copy": "无论是设计还是频道合作，我们都会先确认目的、资料和下一步，再开始执行。",
  "contact.about.title": "告诉我们你想做什么，我们会带你到合适的联系入口。",
  "contact.about.copy": "设计需求可先发 WhatsApp；游戏创作者合作和品牌合作可直接使用下方对应邮箱。",
  "contact.design.title": "有设计需求？先把用途和宣传重点发给我们。",
  "contact.design.copy": "请告诉我们要做什么、发布在哪里、尺寸、主要文案和预计发布日期；有参考图也可以一并发送。",
  "contact.mcn.title": "想讨论游戏频道合作？把频道资料发给我们。",
  "contact.mcn.copy": "创作者可发送频道链接、内容类型和目前想改善的部分到 creators@fgestudio.my；品牌合作请联系 business@fgestudio.my。",
  "contact.design.whatsapp": "发送设计需求",
  "contact.whatsapp": "WhatsApp 联系我们",
});

Object.assign(translations.en, {
  "metaTitle.home": "FGESTUDIO | Malaysia Graphic Design & Gaming Creator Support",
  "metaDescription.home": "FGESTUDIO is a Malaysian online creative studio offering graphic design for businesses and practical channel support for gaming creators.",
  "metaTitle.design": "FGESTUDIO | Graphic Design Services in Malaysia",
  "metaDescription.design": "FGESTUDIO creates posters, social media content, ad creatives, banners, business cards and YouTube thumbnails for businesses and creators in Malaysia.",
  "metaTitle.mcn": "FGESTUDIO | Gaming Creator Channel Support",
  "metaDescription.mcn": "FGESTUDIO works with gaming creators on channel positioning, visual identity, thumbnails, content formats and brand-collaboration materials.",
  "metaTitle.about": "FGESTUDIO | Malaysian Online Creative Studio",
  "metaDescription.about": "Meet FGESTUDIO, a Malaysian online creative studio providing graphic design for businesses and practical channel support for gaming creators.",
  "whatsappMessage.design": "Hi, I would like to enquire about graphic design.\\n\\nWhat I need designed:\\nPlatform / size:\\nMain message or promotion focus:\\nExpected posting date:\\n\\nThank you.",
  "whatsappMessage.mcn": "Hi, I would like to learn about gaming creator collaboration with {short}.",
  "whatsappMessage.about": "Hi, I would like to learn about {short}'s services and how to work together.",
  "emailSubject.design": "Design enquiry - {short}",
  "emailSubject.mcn": "Gaming creator collaboration enquiry - {short}",
  "emailSubject.creators": "Gaming creator collaboration enquiry - {short}",
  "emailBody.design": "Hi, I would like to enquire about graphic design.\\n\\nWhat I need designed:\\nPlatform / size:\\nMain message or promotion focus:\\nReference style (if any):\\nExpected posting date:\\n\\nThank you.",
  "emailBody.mcn": "Hi, I would like to learn about gaming creator collaboration with {short}.\\n\\nChannel link:\\nContent type:\\nMain platform:\\nWhat I would like to improve:\\n\\nThank you.",
  "emailBody.creators": "Hi, I would like to learn about gaming creator collaboration with {short}.\\n\\nChannel link:\\nContent type:\\nMain platform:\\nWhat I would like to improve:\\n\\nThank you.",
  "hero.home.kicker": "Graphic design · Gaming creator support",
  "hero.home.title": "We help businesses make their message clear, and gaming creators build their channels step by step.",
  "hero.home.copy": "FGESTUDIO is a Malaysian online creative studio. We create promotional visuals for businesses and creators, and work with gaming creators on channel direction, content and collaboration materials.",
  "hero.home.ctaDesign": "I need design",
  "hero.home.ctaMcn": "I'm a gaming creator",
  "hero.home.scroll": "See what we do",
  "hero.design.title": "More than a good-looking design — make it clear what you are selling.",
  "hero.design.slogan": "Practical promotional visuals for businesses, brands and content creators.",
  "hero.design.copy": "Posters, social posts, ad creatives and YouTube thumbnails are designed around the platform, audience and message. One-off jobs and monthly packages are both available.",
  "hero.design.ctaServices": "View services & prices",
  "hero.design.ctaWhatsapp": "Send a design brief",
  "hero.mcn.kicker": "Gaming creator support",
  "hero.mcn.title": "You don't have to figure out gaming content on your own.",
  "hero.mcn.slogan": "Channel direction, visual identity, thumbnails, content formats and collaboration materials — worked through together.",
  "hero.mcn.copy": "FGESTUDIO works with gaming creators on channel positioning, visual identity, thumbnails and content rhythm, while helping prepare the materials needed for brand conversations.",
  "hero.mcn.ctaEmail": "Submit channel details",
  "hero.mcn.badge1": "Channel direction",
  "hero.mcn.badge2": "Content & thumbnails",
  "hero.about.title": "FGESTUDIO is a Malaysian online creative studio.",
  "hero.about.slogan": "Graphic design for businesses, and channel support for gaming creators.",
  "hero.about.copy": "We work online in Chinese, English and Malay. Design and creator support sit in the same studio because both need clear content, visuals and outward-facing materials.",
  "services.title": "From a single campaign visual to social content that keeps moving.",
  "services.copy": "Tell us where it will be published, what people should know and when you need it. We will design for that real use.",
  "services.poster.title": "Promotion & ad design",
  "services.poster.copy": "Posters, promo visuals, campaign key art and Meta ad creatives for launches, offers and events.",
  "services.social.title": "Social media content",
  "services.social.copy": "Visual content for Facebook, Instagram, Xiaohongshu and regular posts that needs to stay on-brand.",
  "services.banner.title": "Brand essentials",
  "services.banner.copy": "Business cards, banners, Facebook covers and basic visual setup for the platforms you use most.",
  "services.youtube.copy": "YouTube thumbnails for gaming, tutorials, entertainment and livestream content that make the video topic clear at a glance.",
  "services.monthly.title": "Monthly content packages",
  "services.monthly.copy": "For regular posts and frequent campaigns, choose a monthly quantity and spend less time repeating the same brief.",
  "mcnServices.title": "Work through what your channel needs next, one practical step at a time.",
  "mcnServices.copy": "For YouTube, TikTok and livestream creators. Support is planned around the channel's current stage and real needs.",
  "mcnServices.item3.title": "Titles & thumbnail direction",
  "mcnServices.item5.title": "Channel materials for brand conversations",
  "mcnServices.item6.title": "Adjust as the channel changes",
  "mcnServices.item6.copy": "Update the content, visuals or collaboration focus as the channel develops. No fixed-growth promises.",
  "creators.title": "Featured creators",
  "creators.kicker": "FGESTUDIO CREATOR NETWORK",
  "creators.copy": "Bringing gaming creators, quality content, audiences and brand opportunities together.",
  "creators.tag.minecraft": "Minecraft",
  "creators.tag.anime": "Anime Games",
  "creators.tag.guides": "Game Guides",
  "creators.tag.live": "Game Livestreams",
  "creators.yinsi.cooperationCta": "Discuss Brand Collaboration",
  "creators.yinsi.cooperationMessage": "Hello, I would like to discuss a brand collaboration with YinSi Gaming / 饮思YS.",
  "creators.stats.subscribers": "YouTube Subscribers",
  "creators.stats.views": "Total Views",
  "creators.stats.videos": "Public Videos",
  "creators.updatedAt": "Updated {date}",
  "creators.featuredKicker": "YINSI GAMING",
  "creators.featuredTitle": "Featured Content",
  "creators.video.open": "Open video on YouTube",
  "creators.video.thumbnail": "Video thumbnail",
  "creators.cooperationTypes": "Brand Promotion · Game Collaboration · Sponsored Content · Livestream Collaboration",
  "mcnProcess.kicker": "How we work",
  "mcnProcess.title": "Understand the channel first, then decide what to improve next.",
  "mcnProcess.step5.title": "Review and adjust",
  "mcnProcess.step5.copy": "Support changes with the channel; results are never presented as guaranteed.",
  "business.kicker": "What we do",
  "business.title": "Promotion design for businesses, and channel support for gaming creators.",
  "business.copy": "Whether you need to promote a business or run a gaming channel, start with the part that needs fixing now.",
  "business.design.title": "Graphic design services",
  "business.design.copy": "Need a poster, social post, ad creative, banner, business card or YouTube thumbnail? Tell us the platform, content and goal, and we will design for the actual use.",
  "business.design.cta": "View services & prices",
  "business.mcn.title": "Gaming creator support",
  "business.mcn.copy": "For YouTube, TikTok and livestream creators: channel positioning, visual identity, thumbnails, content formats and materials for brand conversations.",
  "business.mcn.cta": "How collaboration works",
  "home.about.copy": "Want to know how FGESTUDIO started and what we do today?",
  "home.about.cta": "Meet FGESTUDIO →",
  "aboutTimeline.title": "Starting from creator incubation, then expanding into visual design services.",
  "aboutTimeline.copy": "FGESTUDIO keeps its active business directions and ways of working clear, so clients and creators can quickly understand what we offer today.",
  "aboutTimeline.item1.title": "Creator projects begin",
  "aboutTimeline.item1.copy": "The team began with gaming content and creator collaboration, building experience in channel operation and content production.",
  "aboutTimeline.item2.title": "FGESTUDIO registers and expands into design",
  "aboutTimeline.item2.copy": "The studio was formally registered in 2026 and began offering graphic design services to businesses, brands and content creators.",
  "aboutTimeline.item3.title": "Game development is still being explored",
  "aboutTimeline.item3.copy": "This is a future direction under research and preparation, not a public service at this stage.",
  "aboutValues.title": "Online collaboration works best when every brief is clear.",
  "aboutValues.item2.title": "Two services, one way of working",
  "aboutValues.item2.copy": "For design or channel support, we first confirm the goal, materials and next step before starting.",
  "contact.about.title": "Tell us what you need, and we will point you to the right contact route.",
  "contact.about.copy": "Send design briefs through WhatsApp. For gaming-creator or brand collaboration, use the matching email below.",
  "contact.design.title": "Have a design brief? Send us the purpose and key message.",
  "contact.mcn.title": "Want to discuss your gaming channel? Send us the channel details.",
  "contact.design.whatsapp": "Send a design brief",
  "contact.whatsapp": "Message us on WhatsApp",
});

Object.assign(translations.bm, {
  "metaTitle.home": "FGESTUDIO | Reka Bentuk Grafik Malaysia & Sokongan Pencipta Gaming",
  "metaDescription.home": "FGESTUDIO ialah studio kreatif online dari Malaysia yang menyediakan reka bentuk grafik untuk bisnes dan sokongan channel praktikal untuk pencipta gaming.",
  "metaTitle.design": "FGESTUDIO | Servis Reka Bentuk Grafik Malaysia",
  "metaDescription.design": "FGESTUDIO menghasilkan poster, hantaran media sosial, grafik iklan, banner, kad nama dan thumbnail YouTube untuk bisnes serta pencipta kandungan.",
  "metaTitle.mcn": "FGESTUDIO | Sokongan Channel Pencipta Gaming",
  "metaDescription.mcn": "FGESTUDIO bekerjasama dengan pencipta gaming untuk susun arah channel, identiti visual, thumbnail, format kandungan dan bahan kerjasama jenama.",
  "metaTitle.about": "FGESTUDIO | Studio Kreatif Online dari Malaysia",
  "metaDescription.about": "Kenali FGESTUDIO, studio kreatif online dari Malaysia yang menyediakan reka bentuk grafik untuk bisnes dan sokongan channel untuk pencipta gaming.",
  "whatsappMessage.design": "Hai, saya ingin bertanya tentang servis reka bentuk grafik.\\n\\nPerkara yang perlu direka: \\nPlatform / saiz: \\nMesej utama atau fokus promosi: \\nTarikh posting dijangka: \\n\\nTerima kasih.",
  "whatsappMessage.mcn": "Hai, saya ingin mengetahui tentang kerjasama pencipta gaming dengan {short}.",
  "whatsappMessage.about": "Hai, saya ingin mengetahui tentang servis dan cara kerjasama dengan {short}.",
  "emailSubject.design": "Pertanyaan reka bentuk - {short}",
  "emailSubject.mcn": "Pertanyaan kerjasama pencipta gaming - {short}",
  "emailSubject.creators": "Pertanyaan kerjasama pencipta gaming - {short}",
  "emailBody.design": "Hai, saya ingin bertanya tentang servis reka bentuk grafik.\\n\\nPerkara yang perlu direka: \\nPlatform / saiz: \\nMesej utama atau fokus promosi: \\nGaya rujukan (jika ada): \\nTarikh posting dijangka: \\n\\nTerima kasih.",
  "emailBody.mcn": "Hai, saya ingin mengetahui tentang kerjasama pencipta gaming dengan {short}.\\n\\nPautan channel: \\nJenis kandungan: \\nPlatform utama: \\nPerkara yang ingin diperbaiki: \\n\\nTerima kasih.",
  "emailBody.creators": "Hai, saya ingin mengetahui tentang kerjasama pencipta gaming dengan {short}.\\n\\nPautan channel: \\nJenis kandungan: \\nPlatform utama: \\nPerkara yang ingin diperbaiki: \\n\\nTerima kasih.",
  "hero.home.kicker": "Reka bentuk grafik · Sokongan pencipta gaming",
  "hero.home.title": "Kami bantu bisnes menjelaskan promosi, dan bantu pencipta gaming membina channel langkah demi langkah.",
  "hero.home.copy": "FGESTUDIO ialah studio kreatif online dari Malaysia. Kami menghasilkan visual promosi untuk bisnes dan pencipta, serta bekerjasama dengan pencipta gaming untuk menyusun arah channel, kandungan dan bahan kerjasama.",
  "hero.home.ctaDesign": "Saya perlukan reka bentuk",
  "hero.home.ctaMcn": "Saya pencipta gaming",
  "hero.home.scroll": "Lihat apa yang kami buat",
  "hero.design.title": "Bukan sekadar cantik — pelanggan perlu terus faham apa yang anda jual.",
  "hero.design.slogan": "Visual promosi yang ada tujuan jelas untuk bisnes, jenama dan pencipta kandungan.",
  "hero.design.copy": "Poster, hantaran sosial, grafik iklan dan thumbnail YouTube direka mengikut platform, audiens dan mesej utama. Tempahan sekali atau pakej bulanan juga boleh.",
  "hero.design.ctaServices": "Lihat servis & harga",
  "hero.design.ctaWhatsapp": "Hantar brief reka bentuk",
  "hero.mcn.kicker": "Sokongan pencipta gaming",
  "hero.mcn.title": "Anda tidak perlu menyelesaikan semuanya sendiri untuk buat kandungan gaming.",
  "hero.mcn.slogan": "Arah channel, identiti visual, thumbnail, format kandungan dan bahan kerjasama — disusun bersama-sama.",
  "hero.mcn.copy": "FGESTUDIO bekerjasama dengan pencipta gaming untuk menyusun positioning channel, identiti visual, thumbnail dan ritma kandungan, sambil menyediakan bahan asas untuk perbincangan dengan jenama.",
  "hero.mcn.ctaEmail": "Hantar maklumat channel",
  "hero.mcn.badge1": "Arah channel",
  "hero.mcn.badge2": "Kandungan & thumbnail",
  "hero.about.title": "FGESTUDIO ialah studio kreatif online dari Malaysia.",
  "hero.about.slogan": "Reka bentuk grafik untuk bisnes, dan sokongan channel untuk pencipta gaming.",
  "hero.about.copy": "Kami beroperasi secara online dalam Bahasa Cina, English dan Bahasa Melayu. Reka bentuk serta sokongan pencipta berada dalam satu studio kerana kedua-duanya memerlukan kandungan, visual dan bahan luaran yang jelas.",
  "services.title": "Daripada satu visual promosi hingga kandungan sosial yang dikemas kini secara berterusan.",
  "services.copy": "Beritahu kami di mana ia akan diterbitkan, perkara yang pelanggan perlu tahu dan bila anda memerlukannya. Kami reka untuk kegunaan sebenar.",
  "services.poster.title": "Reka bentuk promosi & iklan",
  "services.poster.copy": "Poster, visual promosi, visual utama kempen dan grafik iklan Meta untuk pelancaran, tawaran dan acara.",
  "services.social.title": "Kandungan media sosial",
  "services.social.copy": "Visual untuk Facebook, Instagram, Xiaohongshu dan hantaran tetap yang perlu kekal selari dengan jenama.",
  "services.banner.title": "Bahan asas jenama",
  "services.banner.copy": "Kad nama, banner, Facebook Cover dan susunan visual asas untuk platform yang selalu digunakan.",
  "services.youtube.copy": "Thumbnail YouTube untuk kandungan gaming, tutorial, hiburan dan livestream supaya topik video terus mudah difahami.",
  "services.monthly.title": "Pakej kandungan bulanan",
  "services.monthly.copy": "Untuk posting tetap atau kempen yang kerap, pilih jumlah bulanan dan kurangkan brief yang berulang.",
  "mcnServices.title": "Susun perkara yang channel anda perlukan seterusnya, satu langkah praktikal pada satu masa.",
  "mcnServices.copy": "Untuk pencipta YouTube, TikTok dan livestream. Sokongan dirancang mengikut tahap channel serta keperluan sebenar.",
  "mcnServices.item3.title": "Arah tajuk & thumbnail",
  "mcnServices.item5.title": "Bahan channel untuk kerjasama jenama",
  "mcnServices.item6.title": "Laraskan apabila channel berubah",
  "mcnServices.item6.copy": "Laraskan kandungan, visual atau fokus kerjasama mengikut perkembangan channel. Tiada janji pertumbuhan tetap.",
  "creators.title": "Pencipta pilihan",
  "creators.kicker": "FGESTUDIO CREATOR NETWORK",
  "creators.copy": "Menghubungkan pencipta gaming, kandungan berkualiti, penonton dan peluang kerjasama jenama.",
  "creators.tag.minecraft": "Minecraft",
  "creators.tag.anime": "Game Anime",
  "creators.tag.guides": "Panduan Game",
  "creators.tag.live": "Livestream Game",
  "creators.yinsi.cooperationCta": "Bincang Kerjasama Jenama",
  "creators.yinsi.cooperationMessage": "Hai, saya ingin bertanya tentang kerjasama jenama dengan YinSi Gaming / 饮思YS.",
  "creators.stats.subscribers": "Subscriber YouTube",
  "creators.stats.views": "Jumlah Tontonan",
  "creators.stats.videos": "Video Awam",
  "creators.updatedAt": "Dikemas kini {date}",
  "creators.featuredKicker": "YINSI GAMING",
  "creators.featuredTitle": "Kandungan Pilihan",
  "creators.video.open": "Buka video di YouTube",
  "creators.video.thumbnail": "Thumbnail video",
  "creators.cooperationTypes": "Promosi Jenama · Kerjasama Game · Kandungan Tajaan · Kerjasama Livestream",
  "mcnProcess.kicker": "Cara kami bekerja",
  "mcnProcess.title": "Fahami channel dahulu, kemudian tentukan perkara seterusnya yang perlu diperbaiki.",
  "mcnProcess.step5.title": "Semak dan laraskan",
  "mcnProcess.step5.copy": "Sokongan berubah mengikut channel; hasil tidak pernah dijanjikan sebagai pasti.",
  "business.kicker": "Apa yang kami buat",
  "business.title": "Reka bentuk promosi untuk bisnes, dan sokongan channel untuk pencipta gaming.",
  "business.copy": "Sama ada anda mahu promosikan bisnes atau mengurus channel gaming, mulakan dengan bahagian yang paling perlu diselesaikan sekarang.",
  "business.design.title": "Servis reka bentuk grafik",
  "business.design.copy": "Perlukan poster, hantaran sosial, grafik iklan, banner, kad nama atau thumbnail YouTube? Beritahu platform, kandungan dan tujuan anda; kami reka untuk kegunaan sebenar.",
  "business.design.cta": "Lihat servis & harga",
  "business.mcn.title": "Sokongan pencipta gaming",
  "business.mcn.copy": "Untuk pencipta YouTube, TikTok dan livestream: positioning channel, identiti visual, thumbnail, format kandungan dan bahan perbincangan dengan jenama.",
  "business.mcn.cta": "Cara kerjasama",
  "home.about.copy": "Mahu tahu bagaimana FGESTUDIO bermula dan apa yang kami buat sekarang?",
  "home.about.cta": "Kenali FGESTUDIO →",
  "aboutTimeline.title": "Bermula daripada inkubasi pencipta, kemudian berkembang ke servis reka bentuk visual.",
  "aboutTimeline.copy": "FGESTUDIO menerangkan hala tuju bisnes dan cara kerjasama yang aktif dengan jelas supaya pelanggan dan pencipta memahami apa yang kami tawarkan sekarang.",
  "aboutTimeline.item1.title": "Projek pencipta bermula",
  "aboutTimeline.item1.copy": "Pasukan bermula dengan kandungan gaming dan kerjasama pencipta, sambil membina pengalaman dalam pengurusan channel dan penghasilan kandungan.",
  "aboutTimeline.item2.title": "FGESTUDIO didaftarkan dan mengembangkan reka bentuk",
  "aboutTimeline.item2.copy": "Studio didaftarkan secara rasmi pada 2026 dan mula menawarkan servis reka bentuk grafik kepada bisnes, jenama dan pencipta kandungan.",
  "aboutTimeline.item3.title": "Pembangunan game masih diteroka",
  "aboutTimeline.item3.copy": "Ini ialah arah masa depan yang masih dikaji dan disediakan, bukan servis umum pada peringkat ini.",
  "aboutValues.title": "Kerjasama online menjadi lebih baik apabila setiap brief jelas.",
  "aboutValues.item2.title": "Dua servis, satu cara bekerja",
  "aboutValues.item2.copy": "Untuk reka bentuk atau sokongan channel, kami sahkan tujuan, bahan dan langkah seterusnya sebelum bermula.",
  "contact.about.title": "Beritahu apa yang anda perlukan, dan kami akan tunjukkan saluran hubungan yang sesuai.",
  "contact.about.copy": "Hantar brief reka bentuk melalui WhatsApp. Untuk kerjasama pencipta gaming atau jenama, gunakan email yang sepadan di bawah.",
  "contact.design.title": "Ada brief reka bentuk? Hantar tujuan dan mesej utama kepada kami.",
  "contact.mcn.title": "Mahu bincang tentang channel gaming? Hantar maklumat channel kepada kami.",
  "contact.design.whatsapp": "Hantar brief reka bentuk",
  "contact.whatsapp": "Hubungi kami di WhatsApp",
});

let editableContent = {
  pricing: {
    starter: { price: "RMXX" },
    standard: { price: "RMXX" },
    monthly: { price: "RMXX" },
  },
  portfolioImages: {
    item1:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 560'%3E%3Crect width='800' height='560' fill='%23050816'/%3E%3Crect x='78' y='78' width='644' height='404' rx='28' fill='%23112a72'/%3E%3Crect x='130' y='132' width='330' height='44' rx='12' fill='%2318e8ff'/%3E%3Crect x='130' y='214' width='440' height='26' rx='10' fill='%23ffffff' opacity='.86'/%3E%3Crect x='130' y='264' width='360' height='20' rx='10' fill='%23ffffff' opacity='.54'/%3E%3Ccircle cx='620' cy='206' r='74' fill='%239b3dff' opacity='.82'/%3E%3Cpath d='M594 348l50-104 60 104h-44l-16 36-16-36z' fill='%2318e8ff'/%3E%3C/svg%3E",
    item2:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 560'%3E%3Crect width='800' height='560' fill='%23050816'/%3E%3Crect x='72' y='70' width='656' height='420' rx='28' fill='%23131325'/%3E%3Crect x='116' y='118' width='568' height='320' rx='24' fill='%232b5dff'/%3E%3Crect x='158' y='158' width='350' height='56' rx='14' fill='%23ffffff'/%3E%3Crect x='158' y='250' width='230' height='30' rx='12' fill='%23050816' opacity='.85'/%3E%3Cpath d='M532 330l52-112 70 112h-48l-20 42-20-42z' fill='%239b3dff'/%3E%3Ccircle cx='584' cy='220' r='42' fill='%2318e8ff'/%3E%3C/svg%3E",
    item3:
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 560'%3E%3Crect width='800' height='560' fill='%23050816'/%3E%3Crect x='88' y='98' width='624' height='114' rx='26' fill='%2318e8ff'/%3E%3Crect x='88' y='252' width='292' height='210' rx='28' fill='%23131325'/%3E%3Crect x='420' y='252' width='292' height='210' rx='28' fill='%239b3dff'/%3E%3Crect x='130' y='134' width='326' height='28' rx='10' fill='%23050816' opacity='.9'/%3E%3Ccircle cx='514' cy='357' r='58' fill='%23ffffff' opacity='.82'/%3E%3Cpath d='M200 392l54-92 54 92h-36l-18 34-18-34z' fill='%2318e8ff'/%3E%3C/svg%3E",
  },
};

const defaultContentSnapshot = {
  contactSettings: JSON.parse(JSON.stringify(contactSettings)),
  editable: JSON.parse(JSON.stringify(editableContent)),
  translations: JSON.parse(JSON.stringify(translations)),
};

window.FGESTUDIO_DEFAULT_CONTENT = defaultContentSnapshot;

const langMap = {
  cn: "zh-Hans",
  en: "en",
  bm: "ms",
};

const localeMap = {
  cn: "zh_CN",
  en: "en_US",
  bm: "ms_MY",
};

const dateLocaleMap = {
  cn: "zh-Hans-MY",
  en: "en-MY",
  bm: "ms-MY",
};

let activeLanguage = "cn";
let latestYouTubeStats = null;

function getPageKey() {
  return document.body?.dataset.page || "design";
}

function isPlainObject(value) {
  return value && typeof value === "object" && !Array.isArray(value);
}

function deepMerge(target, source) {
  if (!isPlainObject(source)) return target;

  Object.entries(source).forEach(([key, value]) => {
    if (isPlainObject(value) && isPlainObject(target[key])) {
      deepMerge(target[key], value);
    } else if (value !== undefined) {
      target[key] = value;
    }
  });

  return target;
}

function getNestedValue(source, path) {
  return path.split(".").reduce((value, key) => {
    if (value === undefined || value === null) return undefined;
    return value[key];
  }, source);
}

async function fetchJsonFrom(paths) {
  for (const path of paths) {
    try {
      const response = await fetch(path, { cache: "no-store" });
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      // Try the next path when local preview or nested clean URLs block this one.
    }
  }

  return null;
}

async function loadContentOverrides() {
  const content = await fetchJsonFrom(["content.json", "../content.json", "/content.json"]);
  if (!content) return;

  contactSettings = deepMerge(contactSettings, content.contactSettings || {});
  editableContent = deepMerge(editableContent, content.editable || {});
  translations = deepMerge(translations, content.translations || {});
}

function formatText(value) {
  return String(value ?? "")
    .split("{company}")
    .join(contactSettings.companyName)
    .split("{short}")
    .join(contactSettings.shortName)
    .split("{cnName}")
    .join(contactSettings.chineseName)
    .split("{year}")
    .join(String(currentYear));
}

function getRawText(lang, key) {
  return translations[lang]?.[key] ?? translations.cn[key];
}

const getText = (lang, key) => formatText(getRawText(lang, key) ?? "");

function getPageText(lang, baseKey) {
  return getText(lang, `${baseKey}.${getPageKey()}`) || getText(lang, `${baseKey}.design`);
}

function getEmailRole(element) {
  const explicitRole = element?.getAttribute("data-email") || element?.getAttribute("data-copy-email") || element?.getAttribute("data-email-address");
  if (explicitRole) return explicitRole;

  const pageRoleMap = {
    home: "general",
    design: "design",
    mcn: "creators",
    about: "general",
    privacy: "general",
    terms: "general",
  };

  return pageRoleMap[getPageKey()] || "general";
}

function getEmailAddress(role) {
  return contactSettings.emails?.[role] || contactSettings.email || "contact@fgestudio.my";
}

function getEmailUrl(role) {
  const email = getEmailAddress(role);
  const subject = encodeURIComponent(getText(activeLanguage, `emailSubject.${role}`) || getPageText(activeLanguage, "emailSubject"));
  const body = encodeURIComponent(getText(activeLanguage, `emailBody.${role}`) || getPageText(activeLanguage, "emailBody"));
  return `mailto:${email}?subject=${subject}&body=${body}`;
}

function showEmailCopyNotice(message) {
  let notice = document.querySelector("[data-email-notice]");

  if (!notice) {
    notice = document.createElement("div");
    notice.className = "email-copy-notice";
    notice.setAttribute("data-email-notice", "");
    document.body.appendChild(notice);
  }

  notice.textContent = message;
  notice.classList.add("is-visible");
  window.clearTimeout(showEmailCopyNotice.timer);
  showEmailCopyNotice.timer = window.setTimeout(() => {
    notice.classList.remove("is-visible");
  }, 2400);
}

function initEmailCopyFeedback() {
  document.addEventListener("click", async (event) => {
    const target = event.target.closest("[data-email], [data-copy-email], [data-email-address]");
    if (!target) return;

    const shouldOpenMailApp = target.matches("a[data-email]");
    if (shouldOpenMailApp) {
      event.preventDefault();
    }

    const role = getEmailRole(target);
    const email = getEmailAddress(role);
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(email);
      showEmailCopyNotice(getText(activeLanguage, "contact.emailCopied"));
    } catch (error) {
      showEmailCopyNotice(email);
    }

    if (shouldOpenMailApp) {
      window.setTimeout(() => {
        window.location.href = getEmailUrl(role);
      }, 180);
    }
  });
}

function formatStatNumber(value) {
  const number = Number(value);
  if (!Number.isFinite(number)) return String(value ?? "");
  return new Intl.NumberFormat("en-US").format(number);
}

function formatUpdatedDate(value, lang) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);

  return new Intl.DateTimeFormat(dateLocaleMap[lang] || "en-MY", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
    timeZone: "Asia/Kuala_Lumpur",
  }).format(date);
}

function setMeta(selector, value) {
  document.querySelector(selector)?.setAttribute("content", value);
}

function renderEditableContent() {
  document.querySelectorAll("[data-content]").forEach((element) => {
    const path = element.getAttribute("data-content");
    const value = getNestedValue(editableContent, path);
    if (value !== undefined && value !== null) {
      element.textContent = formatText(value);
    }
  });

  document.querySelectorAll("[data-content-src]").forEach((element) => {
    const path = element.getAttribute("data-content-src");
    const value = getNestedValue(editableContent, path);
    if (value) {
      const source = typeof value === "string" && value.startsWith("images/") ? `/${value}` : value;
      element.setAttribute("src", source);
    }
  });
}

function renderYouTubeStats(stats) {
  if (!stats) return;

  const statMap = {
    subscribers: stats.subscriberCount,
    views: stats.viewCount,
    videos: stats.videoCount,
  };

  Object.entries(statMap).forEach(([key, value]) => {
    const element = document.querySelector(`[data-youtube-stat="${key}"]`);
    if (element && value !== undefined && value !== null) {
      element.textContent = formatStatNumber(value);
    }
  });

  if (stats.channelUrl) {
    document.querySelector(".creator-channel-link")?.setAttribute("href", stats.channelUrl);
  }

  const note = document.querySelector("[data-youtube-updated]");
  if (!note) return;

  const updatedDate = formatUpdatedDate(stats.updatedAt, activeLanguage);
  note.textContent = updatedDate
    ? getText(activeLanguage, "creators.updatedAt").replace("{date}", updatedDate)
    : getText(activeLanguage, "creators.updated");

  renderFeaturedVideos(stats.videos);
}

function renderFeaturedVideos(videos) {
  const section = document.querySelector("[data-featured-content]");
  const grid = document.querySelector("[data-featured-video-grid]");
  if (!section || !grid) return;

  const validVideos = Array.isArray(videos)
    ? videos.filter((video) => video?.title && video?.thumbnail && video?.url).slice(0, 3)
    : [];

  if (!validVideos.length) {
    grid.replaceChildren();
    section.hidden = true;
    return;
  }

  const openLabel = getText(activeLanguage, "creators.video.open");
  const thumbnailLabel = getText(activeLanguage, "creators.video.thumbnail");
  const fragment = document.createDocumentFragment();

  validVideos.forEach((video) => {
    const link = document.createElement("a");
    link.className = "featured-video-card";
    link.href = video.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.setAttribute("aria-label", `${openLabel}: ${video.title}`);

    const thumbnail = document.createElement("span");
    thumbnail.className = "featured-video-thumbnail";
    const image = document.createElement("img");
    image.src = video.thumbnail;
    image.alt = `${thumbnailLabel}: ${video.title}`;
    image.loading = "lazy";
    thumbnail.append(image);

    const play = document.createElement("span");
    play.className = "featured-video-play";
    play.setAttribute("aria-hidden", "true");
    play.textContent = "▶";
    thumbnail.append(play);

    const title = document.createElement("p");
    title.className = "featured-video-title";
    title.textContent = video.title;
    link.append(thumbnail, title);
    fragment.append(link);
  });

  grid.replaceChildren(fragment);
  section.hidden = false;
}

async function loadYouTubeStats() {
  latestYouTubeStats = await fetchJsonFrom(["data/youtube-stats.json", "../data/youtube-stats.json", "/data/youtube-stats.json"]);
  if (latestYouTubeStats) {
    renderYouTubeStats(latestYouTubeStats);
  }
}

function markCurrentPageNav() {
  const page = getPageKey();
  document.querySelectorAll("[data-nav-page]").forEach((link) => {
    link.classList.toggle("is-active", link.dataset.navPage === page);
  });
}

function updatePackageCopy(lang) {
  const packageCopy = {
    cn: {
      title: "从开业宣传到持续更新内容，选择合适的设计配套。",
      copy: "制作时间、修改范围和交付安排，可通过 WhatsApp 确认。",
      names: ["开业宣传组合", "活动推广组合", "基础品牌组合", "社媒轻量月配套", "社媒常规月配套", "社媒高频月配套", "YouTube 轻量封面月配套", "YouTube 常规封面月配套", "YouTube 高频封面月配套"],
      cta: "询问这个配套",
    },
    en: {
      title: "Choose a package for a launch, campaign, or ongoing content.",
      copy: "Timelines, revision scope, and delivery arrangements can be confirmed on WhatsApp.",
      names: ["Launch Promotion Bundle", "Event Promotion Bundle", "Brand Essentials Bundle", "Lite Social Media Package", "Regular Social Media Package", "High-Frequency Social Media Package", "Lite YouTube Thumbnail Package", "Regular YouTube Thumbnail Package", "High-Frequency YouTube Thumbnail Package"],
      cta: "Ask about this package",
    },
    bm: {
      title: "Pilih pakej untuk pembukaan, kempen atau kandungan berterusan.",
      copy: "Tempoh kerja, skop pindaan dan penghantaran boleh disahkan melalui WhatsApp.",
      names: ["Pakej Promosi Pembukaan", "Pakej Promosi Acara", "Pakej Asas Jenama", "Pakej Media Sosial Ringan", "Pakej Media Sosial Biasa", "Pakej Media Sosial Kerap", "Pakej Thumbnail YouTube Ringan", "Pakej Thumbnail YouTube Biasa", "Pakej Thumbnail YouTube Kerap"],
      cta: "Tanya pakej ini",
    },
  };
  const copy = packageCopy[lang];
  const panel = document.querySelector(`.package-language[data-lang-panel="${lang}"]`);
  if (!copy || !panel) return;

  const heading = panel.querySelector(".section-heading");
  heading?.querySelector("h2")?.replaceChildren(copy.title);
  heading?.querySelector("p:last-child")?.replaceChildren(copy.copy);
  panel.querySelectorAll(".pricing-card h3").forEach((heading, index) => {
    if (copy.names[index]) heading.textContent = copy.names[index];
  });
  panel.querySelectorAll(".pricing-card .btn-card").forEach((button) => {
    button.textContent = copy.cta;
  });
}

function getPackageWhatsappMessage(link, lang) {
  const card = link.closest(".pricing-card");
  if (!card) return getPageText(lang, "whatsappMessage");

  const packageName = card.querySelector("h3")?.textContent.trim() || "";
  const messages = {
    cn: `你好，我想询问「${packageName}」。`,
    en: `Hi, I would like to ask about "${packageName}".`,
    bm: `Hai, saya ingin bertanya tentang "${packageName}".`,
  };

  return messages[lang] || messages.cn;
}

function applyTranslations(lang) {
  activeLanguage = translations[lang] ? lang : "cn";
  document.documentElement.lang = langMap[activeLanguage] || "zh-Hans";

  const title = getPageText(activeLanguage, "metaTitle");
  const description = getPageText(activeLanguage, "metaDescription");
  const imageAlt = `${contactSettings.shortName} studio logo and visual identity`;

  document.title = title;
  setMeta('meta[name="description"]', description);
  setMeta('meta[name="author"]', contactSettings.companyName);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', description);
  setMeta('meta[property="og:site_name"]', contactSettings.companyName);
  setMeta('meta[property="og:locale"]', localeMap[activeLanguage] || "zh_CN");
  setMeta('meta[property="og:image:alt"]', imageAlt);
  setMeta('meta[name="twitter:title"]', title);
  setMeta('meta[name="twitter:description"]', description);
  setMeta('meta[name="twitter:image:alt"]', imageAlt);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = getText(activeLanguage, key);
  });

  document.querySelectorAll("[data-lang-panel]").forEach((element) => {
    element.hidden = element.getAttribute("data-lang-panel") !== activeLanguage;
  });
  updatePackageCopy(activeLanguage);

  document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
    const rules = element.getAttribute("data-i18n-attr").split(";");
    rules.forEach((rule) => {
      const [attr, key] = rule.split(":").map((part) => part.trim());
      if (attr && key) {
        element.setAttribute(attr, getText(activeLanguage, key));
      }
    });
  });

  document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    const messageKey = link.dataset.whatsappMessage;
    const rawMessage = messageKey ? getText(activeLanguage, messageKey) : getPackageWhatsappMessage(link, activeLanguage);
    const message = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/${contactSettings.whatsappNumber}?text=${message}`;
    link.setAttribute("href", whatsappUrl);
    link.setAttribute("target", "_blank");
    link.setAttribute("rel", "noopener");
  });

  document.querySelectorAll("[data-facebook]").forEach((link) => {
    link.setAttribute("href", contactSettings.facebookUrl);
  });
  document.querySelectorAll("[data-email]").forEach((link) => {
    link.setAttribute("href", getEmailUrl(getEmailRole(link)));
  });
  document.querySelectorAll("[data-email-address]").forEach((element) => {
    element.textContent = getEmailAddress(getEmailRole(element));
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const isActive = button.dataset.lang === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  markCurrentPageNav();
  renderEditableContent();
  renderYouTubeStats(latestYouTubeStats);
  localStorage.setItem("preferredLanguage", activeLanguage);
}

function initLanguageSwitcher() {
  const savedLang = localStorage.getItem("preferredLanguage");
  const defaultLang = translations[savedLang] ? savedLang : "cn";

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      applyTranslations(button.dataset.lang);
    });
  });

  applyTranslations(defaultLang);
}

function initMobileMenu() {
  const header = document.querySelector("[data-header]");
  const toggle = document.querySelector("[data-menu-toggle]");
  const nav = document.querySelector("#mainNav");

  if (!header || !toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("is-open");
    document.body.classList.toggle("menu-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  window.addEventListener("scroll", () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  });
}

function initFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const isOpen = item.classList.toggle("is-open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");
  const groupedElements = document.querySelectorAll("main section .reveal");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  groupedElements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 45}ms`);
  });

  if (!("IntersectionObserver" in window) || prefersReducedMotion) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  document.body.classList.add("motion-ready");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  elements.forEach((element) => observer.observe(element));
}

function initInteractiveSurfaces() {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;
  const supportsFineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  const selector = [
    ".btn",
    ".service-card",
    ".pricing-card",
    ".portfolio-card",
    ".business-card",
    ".timeline-item",
    ".process-list li",
    ".faq-item",
    ".contact-link",
    ".contact-email-card",
    ".contact-action"
  ].join(",");

  document.querySelectorAll(selector).forEach((element) => {
    element.addEventListener("pointermove", (event) => {
      const rect = element.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      element.style.setProperty("--pointer-x", `${x.toFixed(1)}%`);
      element.style.setProperty("--pointer-y", `${y.toFixed(1)}%`);

      if (supportsFineHover) {
        const rotateY = ((x - 50) / 50) * 1.8;
        const rotateX = ((50 - y) / 50) * 1.8;
        element.style.setProperty("--surface-transform", `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`);
      }
    });

    element.addEventListener("pointerleave", () => {
      element.style.removeProperty("--pointer-x");
      element.style.removeProperty("--pointer-y");
      element.style.removeProperty("--surface-transform");
    });
  });
}

function initScrollProgress() {
  const indicator = document.createElement("div");
  indicator.className = "scroll-progress";
  indicator.setAttribute("aria-hidden", "true");
  indicator.innerHTML = "<span></span>";
  document.body.append(indicator);

  const progress = indicator.firstElementChild;
  const updateProgress = () => {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const value = maxScroll > 0 ? Math.min(window.scrollY / maxScroll, 1) : 0;
    progress.style.transform = `scaleX(${value})`;
  };

  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
}

function initHeroParallax() {
  const hero = document.querySelector(".hero");
  const supportsFineHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!hero || !supportsFineHover || prefersReducedMotion) return;

  hero.addEventListener("pointermove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 12;
    hero.style.setProperty("--hero-parallax-x", `${x.toFixed(1)}px`);
    hero.style.setProperty("--hero-parallax-y", `${y.toFixed(1)}px`);
  });

  hero.addEventListener("pointerleave", () => {
    hero.style.removeProperty("--hero-parallax-x");
    hero.style.removeProperty("--hero-parallax-y");
  });
}

function initPortfolioGallery() {
  document.querySelectorAll("[data-portfolio-gallery]").forEach((gallery) => {
    const track = gallery.querySelector(".portfolio-track");
    if (!track) return;

    gallery.querySelectorAll("[data-gallery-direction]").forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.dataset.galleryDirection === "next" ? 1 : -1;
        track.scrollBy({ left: direction * Math.max(track.clientWidth * 0.78, 280), behavior: "smooth" });
      });
    });
  });
}

function initActiveNav() {
  const sections = document.querySelectorAll("main section[id]");
  const navLinks = document.querySelectorAll(".main-nav a");

  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const activeId = entry.target.id;
        navLinks.forEach((link) => {
          const href = link.getAttribute("href") || "";
          const isSamePageAnchor = href === `#${activeId}`;
          if (isSamePageAnchor || href.startsWith("#")) {
            link.classList.toggle("is-active", isSamePageAnchor);
          }
        });
      });
    },
    { rootMargin: "-38% 0px -52% 0px", threshold: 0.01 }
  );

  sections.forEach((section) => observer.observe(section));
}

function initHeroCanvas() {
  const canvas = document.querySelector("#heroCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let frame = 0;
  let animationId;

  function resize() {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();
    width = Math.max(1, rect.width);
    height = Math.max(1, rect.height);
    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw();
  }

  function roundedRect(x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
  }

  function drawGrid() {
    ctx.save();
    ctx.globalAlpha = 0.13;
    ctx.strokeStyle = "#18e8ff";
    ctx.lineWidth = 1;
    const gap = 54;
    const drift = (frame * 0.22) % gap;

    for (let x = -gap; x < width + gap; x += gap) {
      ctx.beginPath();
      ctx.moveTo(x + drift, 0);
      ctx.lineTo(x + drift, height);
      ctx.stroke();
    }

    for (let y = -gap; y < height + gap; y += gap) {
      ctx.beginPath();
      ctx.moveTo(0, y + drift * 0.45);
      ctx.lineTo(width, y + drift * 0.45);
      ctx.stroke();
    }

    ctx.restore();
  }

  function drawPanel(x, y, w, h, color, alpha, index) {
    const floatX = Math.sin(frame * 0.012 + index) * 14;
    const floatY = Math.cos(frame * 0.014 + index) * 12;
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.shadowColor = color;
    ctx.shadowBlur = 34;
    roundedRect(x + floatX, y + floatY, w, h, 18);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.shadowBlur = 0;
    ctx.globalAlpha = alpha * 0.7;
    roundedRect(x + floatX + 24, y + floatY + 28, w * 0.58, 12, 6);
    ctx.fillStyle = "#ffffff";
    ctx.fill();
    roundedRect(x + floatX + 24, y + floatY + 56, w * 0.42, 10, 5);
    ctx.fill();
    ctx.restore();
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    const gradient = ctx.createRadialGradient(width * 0.66, height * 0.38, 20, width * 0.62, height * 0.32, width * 0.9);
    gradient.addColorStop(0, "#102a70");
    gradient.addColorStop(0.36, "#080c24");
    gradient.addColorStop(1, "#03040b");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    drawGrid();
    drawPanel(width * 0.58, height * 0.18, width * 0.26, height * 0.22, "#18e8ff", 0.18, 1);
    drawPanel(width * 0.72, height * 0.5, width * 0.2, height * 0.2, "#9b3dff", 0.2, 2);
    drawPanel(width * 0.48, height * 0.62, width * 0.2, height * 0.18, "#2b5dff", 0.18, 3);

    ctx.save();
    ctx.globalCompositeOperation = "lighter";
    ctx.globalAlpha = 0.22;
    ctx.fillStyle = "#18e8ff";
    ctx.beginPath();
    ctx.arc(width * 0.76, height * 0.34, 150 + Math.sin(frame * 0.014) * 16, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#9b3dff";
    ctx.beginPath();
    ctx.arc(width * 0.58, height * 0.78, 110 + Math.cos(frame * 0.012) * 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function animate() {
    frame += 1;
    draw();
    animationId = window.requestAnimationFrame(animate);
  }

  resize();
  window.addEventListener("resize", resize);

  if (!prefersReducedMotion) {
    animate();
  }

  document.addEventListener("visibilitychange", () => {
    if (prefersReducedMotion) return;
    if (document.hidden) {
      window.cancelAnimationFrame(animationId);
    } else {
      animate();
    }
  });
}

function cleanLegacyHtmlUrl() {
  const cleanPath = window.location.pathname
    .replace(/\/index\.html$/i, "/")
    .replace(/\/about\.html$/i, "/about/")
    .replace(/\/mcn\.html$/i, "/mcn/");

  if (cleanPath !== window.location.pathname) {
    window.history.replaceState(null, "", `${cleanPath}${window.location.search}${window.location.hash}`);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  if (document.body?.dataset.admin === "true") return;

  cleanLegacyHtmlUrl();
  await loadContentOverrides();
  initLanguageSwitcher();
  initEmailCopyFeedback();
  loadYouTubeStats();
  initMobileMenu();
  initFaq();
  initRevealAnimations();
  initInteractiveSurfaces();
  initScrollProgress();
  initHeroParallax();
  initPortfolioGallery();
  initActiveNav();
  initHeroCanvas();
});
