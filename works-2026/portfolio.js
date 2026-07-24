(() => {
  let works = [];
  let isLoadingWorks = true;
  let worksLoadFailed = false;

  const translations = {
    cn: {
      title: "客户专属设计作品集 | FGESTUDIO",
      skip: "跳到精选作品",
      homeLabel: "前往 FGESTUDIO 首页",
      brandSub: "梦幻起源欢娱工作室",
      backToDesign: "返回设计服务",
      languageToggle: "切换语言",
      heroKicker: "FGESTUDIO · 客户专属作品集",
      heroTitle: "为真实商业需求而设计。",
      heroLead: "精选社交媒体视觉与宣传海报，专门分享给你查看。",
      privacyLabel: "作品集隐私说明",
      privacyTitle: "客户专属预览",
      privacyText: "此页面不会列在公开网站或搜索引擎中；网页预览版已隐藏第三方联络资料。",
      galleryKicker: "精选设计作品",
      galleryTitle: "按设计形式浏览",
      galleryHint: "选择分类，或打开任一作品查看完整设计。",
      galleryLabel: "精选设计作品",
      filterLabel: "筛选作品分类",
      filterAll: "全部作品",
      filterSocial: "社交媒体视觉",
      filterPoster: "海报设计",
      filterBusinessCard: "名片设计",
      filterBanner: "横幅设计",
      socialType: "社交媒体视觉",
      posterType: "海报设计",
      businessCardType: "名片设计",
      bannerType: "横幅设计",
      conceptProject: "概念作品",
      industryLabel: "行业",
      formatLabel: "形式",
      focusLabel: "设计重点",
      squareFormat: "1:1 社交媒体贴文",
      portraitFormat: "竖版产品宣传海报",
      work1Title: "手机维修服务宣传",
      work2Title: "汽车维修服务宣传",
      work3Title: "护肤产品上市视觉",
      work1Industry: "手机与电子设备服务",
      work2Industry: "汽车维修与保养",
      work3Industry: "美容与护肤产品",
      work1Focus: "通过清晰的服务层级，让顾客快速了解维修项目与宣传重点。",
      work2Focus: "把汽车维修、换油、刹车与电池检查整理成容易扫读的宣传视觉。",
      work3Focus: "以干净、轻盈的画面突出补水修护定位与产品上市信息。",
      work1Alt: "手机维修服务社交媒体宣传设计",
      work2Alt: "汽车维修服务社交媒体宣传设计",
      work3Alt: "护肤产品竖版宣传海报",
      work1Open: "打开手机维修服务宣传设计",
      work2Open: "打开汽车维修服务宣传设计",
      work3Open: "打开护肤产品宣传海报",
      openWork: "打开作品",
      viewWork: "查看完整作品",
      loadingWorks: "正在载入作品…",
      noWorks: "此分类暂时没有作品。",
      loadError: "作品暂时无法载入，请稍后刷新页面。",
      ctaKicker: "你的下一次宣传",
      ctaTitle: "需要为你的生意设计宣传视觉吗？",
      ctaText: "告诉我们你的行业、用途、尺寸与截止日期，我们会建议适合的设计服务。",
      ctaButton: "发送设计需求",
      footerHome: "FGESTUDIO 首页",
      mobileActionsLabel: "作品集快捷操作",
      mobileBack: "设计服务",
      mobileEnquire: "咨询设计",
      closeLabel: "关闭作品预览",
      previousLabel: "查看上一个作品",
      nextLabel: "查看下一个作品",
      previousWork: "上一个",
      nextWork: "下一个",
    },
    en: {
      title: "Private Design Portfolio | FGESTUDIO",
      skip: "Skip to selected works",
      homeLabel: "Go to FGESTUDIO home",
      brandSub: "FGESTUDIO",
      backToDesign: "Back to design services",
      languageToggle: "Switch language",
      heroKicker: "FGESTUDIO · PRIVATE PORTFOLIO",
      heroTitle: "Design work made for real business needs.",
      heroLead: "A focused selection of social media visuals and promotional posters, shared directly for your review.",
      privacyLabel: "Portfolio privacy note",
      privacyTitle: "Shared client preview",
      privacyText: "This page is not listed on the public website or search engines. Third-party contact details are hidden in web previews.",
      galleryKicker: "SELECTED DESIGN WORK",
      galleryTitle: "Explore by format",
      galleryHint: "Choose a category or open any work for a closer look.",
      galleryLabel: "Selected design works",
      filterLabel: "Filter portfolio categories",
      filterAll: "All work",
      filterSocial: "Social media visuals",
      filterPoster: "Poster design",
      filterBusinessCard: "Business card design",
      filterBanner: "Banner design",
      socialType: "Social media visual",
      posterType: "Poster design",
      businessCardType: "Business card design",
      bannerType: "Banner design",
      conceptProject: "Concept project",
      industryLabel: "Industry",
      formatLabel: "Format",
      focusLabel: "Design focus",
      squareFormat: "1:1 social media post",
      portraitFormat: "Portrait product poster",
      work1Title: "Mobile repair service promotion",
      work2Title: "Automotive service promotion",
      work3Title: "Skincare product launch visual",
      work1Industry: "Mobile and device services",
      work2Industry: "Automotive repair and maintenance",
      work3Industry: "Beauty and skincare",
      work1Focus: "A clear service hierarchy helps customers understand the repair offer and key message quickly.",
      work2Focus: "Repair, oil change, brake and battery services are organised into an easy-to-scan promotional visual.",
      work3Focus: "A clean, light composition highlights the hydration positioning and product-launch message.",
      work1Alt: "Social media design promoting a mobile repair service",
      work2Alt: "Social media design promoting an automotive service",
      work3Alt: "Portrait promotional poster for a skincare product",
      work1Open: "Open the mobile repair service design",
      work2Open: "Open the automotive service design",
      work3Open: "Open the skincare product poster",
      openWork: "Open work",
      viewWork: "View full work",
      loadingWorks: "Loading portfolio works…",
      noWorks: "No work is available in this category yet.",
      loadError: "The portfolio could not be loaded. Please refresh and try again.",
      ctaKicker: "YOUR NEXT CAMPAIGN",
      ctaTitle: "Need visuals designed for your business?",
      ctaText: "Tell us your industry, purpose, size and deadline. We will recommend the most suitable design service.",
      ctaButton: "Send a design enquiry",
      footerHome: "FGESTUDIO Home",
      mobileActionsLabel: "Portfolio quick actions",
      mobileBack: "Design services",
      mobileEnquire: "Enquire",
      closeLabel: "Close work preview",
      previousLabel: "View previous work",
      nextLabel: "View next work",
      previousWork: "Previous",
      nextWork: "Next",
    },
    bm: {
      title: "Portfolio Reka Bentuk Peribadi | FGESTUDIO",
      skip: "Lompat ke hasil karya pilihan",
      homeLabel: "Pergi ke laman utama FGESTUDIO",
      brandSub: "FGESTUDIO",
      backToDesign: "Kembali ke servis reka bentuk",
      languageToggle: "Tukar bahasa",
      heroKicker: "FGESTUDIO · PORTFOLIO PERIBADI",
      heroTitle: "Reka bentuk untuk keperluan perniagaan sebenar.",
      heroLead: "Pilihan visual media sosial dan poster promosi yang dikongsi secara terus untuk semakan anda.",
      privacyLabel: "Nota privasi portfolio",
      privacyTitle: "Pratonton khas pelanggan",
      privacyText: "Halaman ini tidak disenaraikan pada laman awam atau enjin carian. Maklumat hubungan pihak ketiga disembunyikan dalam pratonton web.",
      galleryKicker: "HASIL REKA BENTUK PILIHAN",
      galleryTitle: "Terokai mengikut format",
      galleryHint: "Pilih kategori atau buka mana-mana hasil untuk melihat dengan lebih dekat.",
      galleryLabel: "Hasil reka bentuk pilihan",
      filterLabel: "Tapis kategori portfolio",
      filterAll: "Semua hasil",
      filterSocial: "Visual media sosial",
      filterPoster: "Reka bentuk poster",
      filterBusinessCard: "Reka bentuk kad nama",
      filterBanner: "Reka bentuk sepanduk",
      socialType: "Visual media sosial",
      posterType: "Reka bentuk poster",
      businessCardType: "Reka bentuk kad nama",
      bannerType: "Reka bentuk sepanduk",
      conceptProject: "Projek konsep",
      industryLabel: "Industri",
      formatLabel: "Format",
      focusLabel: "Fokus reka bentuk",
      squareFormat: "Kiriman media sosial 1:1",
      portraitFormat: "Poster produk menegak",
      work1Title: "Promosi servis pembaikan telefon",
      work2Title: "Promosi servis automotif",
      work3Title: "Visual pelancaran produk penjagaan kulit",
      work1Industry: "Servis telefon dan peranti",
      work2Industry: "Pembaikan dan penyelenggaraan automotif",
      work3Industry: "Kecantikan dan penjagaan kulit",
      work1Focus: "Hierarki servis yang jelas membantu pelanggan memahami tawaran pembaikan dan mesej utama dengan cepat.",
      work2Focus: "Servis pembaikan, penukaran minyak, brek dan bateri disusun dalam visual promosi yang mudah dibaca.",
      work3Focus: "Komposisi yang bersih dan ringan menyerlahkan kedudukan hidrasi serta mesej pelancaran produk.",
      work1Alt: "Reka bentuk media sosial untuk promosi servis pembaikan telefon",
      work2Alt: "Reka bentuk media sosial untuk promosi servis automotif",
      work3Alt: "Poster promosi menegak untuk produk penjagaan kulit",
      work1Open: "Buka reka bentuk servis pembaikan telefon",
      work2Open: "Buka reka bentuk servis automotif",
      work3Open: "Buka poster produk penjagaan kulit",
      openWork: "Buka hasil karya",
      viewWork: "Lihat hasil penuh",
      loadingWorks: "Memuatkan hasil portfolio…",
      noWorks: "Belum ada hasil dalam kategori ini.",
      loadError: "Portfolio tidak dapat dimuatkan. Sila muat semula dan cuba lagi.",
      ctaKicker: "KEMPEN SETERUSNYA",
      ctaTitle: "Perlukan visual untuk perniagaan anda?",
      ctaText: "Beritahu kami industri, tujuan, saiz dan tarikh akhir anda. Kami akan cadangkan servis reka bentuk yang sesuai.",
      ctaButton: "Hantar pertanyaan reka bentuk",
      footerHome: "Laman Utama FGESTUDIO",
      mobileActionsLabel: "Tindakan pantas portfolio",
      mobileBack: "Servis reka bentuk",
      mobileEnquire: "Tanya kami",
      closeLabel: "Tutup pratonton hasil karya",
      previousLabel: "Lihat hasil sebelumnya",
      nextLabel: "Lihat hasil seterusnya",
      previousWork: "Sebelumnya",
      nextWork: "Seterusnya",
    },
  };

  const languageCodes = { cn: "CN", en: "EN", bm: "BM" };
  const htmlLanguages = { cn: "zh-Hans", en: "en", bm: "ms" };
  const categoryTextKeys = {
    social: "socialType",
    poster: "posterType",
    "business-card": "businessCardType",
    banner: "bannerType",
  };
  const validCategories = new Set(Object.keys(categoryTextKeys));
  const languageStorageKey = "manualLanguagePreference";
  let activeLanguage = "en";
  let activeFilter = "all";
  let currentWorkId = null;

  const getStoredLanguage = () => {
    try {
      const stored = window.localStorage.getItem(languageStorageKey);
      return translations[stored] ? stored : null;
    } catch {
      return null;
    }
  };

  const getText = (key) => translations[activeLanguage]?.[key] || translations.en[key] || "";
  const getWorkText = (work, field) => {
    const localized = work?.[`${field}_${activeLanguage}`];
    const english = work?.[`${field}_en`];
    return String(localized || english || "").trim();
  };
  const getCategoryText = (category) => getText(categoryTextKeys[category] || "posterType");
  const getOpenLabel = (work) => `${getText("openWork")}: ${getWorkText(work, "title")}`;
  const getVisibleWorks = () => works.filter((work) => activeFilter === "all" || work.category === activeFilter);

  const loadWorks = async () => {
    try {
      const response = await fetch("works.json", { cache: "no-store" });
      if (!response.ok) throw new Error(`Portfolio data request failed (${response.status})`);
      const payload = await response.json();
      const records = Array.isArray(payload) ? payload : payload?.works;
      if (!Array.isArray(records)) throw new Error("Portfolio data is not an array");

      works = records
        .filter((work) => work && work.published !== false && work.image && work.title_en)
        .map((work, index) => ({
          ...work,
          id: work.id || `portfolio-work-${index + 1}`,
          category: validCategories.has(work.category) ? work.category : "poster",
        }));
    } catch (error) {
      works = [];
      worksLoadFailed = true;
      console.error("Unable to load portfolio works.", error);
    } finally {
      isLoadingWorks = false;
    }
  };

  const updateAvailableFilters = () => {
    const availableCategories = new Set(works.map((work) => work.category));
    document.querySelectorAll("[data-category-filter]").forEach((button) => {
      button.hidden = !availableCategories.has(button.dataset.categoryFilter);
    });

    if (activeFilter !== "all" && !availableCategories.has(activeFilter)) {
      activeFilter = "all";
      document.querySelectorAll("[data-filter]").forEach((button) => {
        const selected = button.dataset.filter === "all";
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-pressed", String(selected));
      });
    }
  };

  const updateTextAttributes = () => {
    document.querySelectorAll("[data-l10n-attr]").forEach((element) => {
      const rules = element.dataset.l10nAttr.split(";");
      rules.forEach((rule) => {
        const [attribute, key] = rule.split(":");
        if (attribute && key) element.setAttribute(attribute, getText(key));
      });
    });
  };

  const updateLanguageControls = () => {
    document.querySelectorAll("[data-language-current]").forEach((label) => {
      label.textContent = languageCodes[activeLanguage];
    });
    document.querySelectorAll("[data-language-option]").forEach((button) => {
      const selected = button.dataset.languageOption === activeLanguage;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-checked", String(selected));
    });
  };

  const createMetaRow = (labelKey, value) => {
    const row = document.createElement("span");
    row.className = "works-card-meta-row";

    const label = document.createElement("span");
    label.textContent = getText(labelKey);
    const content = document.createElement("strong");
    content.textContent = value;
    row.append(label, content);
    return row;
  };

  const createWorkCard = (work, index) => {
    const item = document.createElement("li");
    item.className = `works-card works-card--${work.category}`;
    item.dataset.workId = work.id;

    const article = document.createElement("article");

    const previewButton = document.createElement("button");
    previewButton.className = "works-preview-button";
    previewButton.type = "button";
    previewButton.dataset.openWork = work.id;
    previewButton.setAttribute("aria-label", getOpenLabel(work));

    const figure = document.createElement("figure");
    figure.className = "works-preview";
    figure.style.setProperty("--work-ratio", "4 / 5");

    const image = document.createElement("img");
    image.decoding = "async";
    image.loading = index === 0 ? "eager" : "lazy";
    if (index === 0) image.setAttribute("fetchpriority", "high");
    image.src = work.image;
    image.alt = getWorkText(work, "alt") || getWorkText(work, "title");
    const updateImageRatio = () => {
      if (!image.naturalWidth || !image.naturalHeight) return;
      figure.style.setProperty("--work-ratio", `${image.naturalWidth} / ${image.naturalHeight}`);
      image.width = image.naturalWidth;
      image.height = image.naturalHeight;
    };
    image.addEventListener("load", updateImageRatio, { once: true });
    if (image.complete) updateImageRatio();

    const zoom = document.createElement("span");
    zoom.className = "works-preview-zoom";
    zoom.setAttribute("aria-hidden", "true");
    zoom.textContent = "↗";
    figure.append(image, zoom);
    previewButton.append(figure);

    const content = document.createElement("div");
    content.className = "works-card-content";

    const kicker = document.createElement("span");
    kicker.className = "works-card-kicker";
    kicker.textContent = getCategoryText(work.category);

    const labels = document.createElement("span");
    labels.className = "works-card-labels";
    labels.append(kicker);
    if (work.concept_project === true) {
      const concept = document.createElement("span");
      concept.className = "works-card-concept";
      concept.textContent = getText("conceptProject");
      labels.append(concept);
    }

    const title = document.createElement("h3");
    title.className = "works-card-title";
    title.textContent = getWorkText(work, "title");

    const meta = document.createElement("span");
    meta.className = "works-card-meta";
    meta.append(
      createMetaRow("industryLabel", getWorkText(work, "industry")),
      createMetaRow("formatLabel", getWorkText(work, "format")),
    );

    const focus = document.createElement("p");
    focus.className = "works-card-focus";
    focus.textContent = getWorkText(work, "focus");

    const viewButton = document.createElement("button");
    viewButton.className = "works-card-view";
    viewButton.type = "button";
    viewButton.dataset.openWork = work.id;
    viewButton.setAttribute("aria-label", getOpenLabel(work));
    viewButton.textContent = getText("viewWork");
    const arrow = document.createElement("span");
    arrow.setAttribute("aria-hidden", "true");
    arrow.textContent = "↗";
    viewButton.append(" ", arrow);

    content.append(labels, title, meta, focus, viewButton);
    article.append(previewButton, content);
    item.append(article);
    return item;
  };

  const bindWorkButtons = () => {
    document.querySelectorAll("[data-open-work]").forEach((button) => {
      button.addEventListener("click", () => openWork(button.dataset.openWork));
    });
  };

  const renderGallery = () => {
    const grid = document.getElementById("worksGrid");
    if (!grid) return;

    const visibleWorks = getVisibleWorks();
    grid.replaceChildren();

    if (isLoadingWorks) {
      const loading = document.createElement("li");
      loading.className = "works-empty";
      loading.textContent = getText("loadingWorks");
      grid.append(loading);
      return;
    }

    if (!visibleWorks.length) {
      const empty = document.createElement("li");
      empty.className = "works-empty";
      empty.textContent = getText(worksLoadFailed ? "loadError" : "noWorks");
      grid.append(empty);
      return;
    }

    visibleWorks.forEach((work, index) => grid.append(createWorkCard(work, index)));
    bindWorkButtons();
  };

  const updateLightbox = () => {
    if (!currentWorkId) return;
    const work = works.find((item) => item.id === currentWorkId);
    if (!work) return;

    const image = document.getElementById("lightboxImage");
    const title = document.getElementById("lightboxTitle");
    const type = document.getElementById("lightboxType");
    const focus = document.getElementById("lightboxFocus");
    if (!image || !title || !type || !focus) return;

    image.src = work.image;
    image.alt = getWorkText(work, "alt") || getWorkText(work, "title");
    image.removeAttribute("width");
    image.removeAttribute("height");
    title.textContent = getWorkText(work, "title");
    type.textContent =
      work.concept_project === true
        ? `${getCategoryText(work.category)} · ${getText("conceptProject")}`
        : getCategoryText(work.category);
    focus.textContent = `${getText("focusLabel")}: ${getWorkText(work, "focus")}`;

    const disabled = getVisibleWorks().length < 2;
    document.querySelector("[data-lightbox-previous]")?.toggleAttribute("disabled", disabled);
    document.querySelector("[data-lightbox-next]")?.toggleAttribute("disabled", disabled);
  };

  const openWork = (workId) => {
    const dialog = document.getElementById("worksLightbox");
    if (!dialog || !works.some((work) => work.id === workId)) return;
    currentWorkId = workId;
    updateLightbox();
    if (typeof dialog.showModal === "function") dialog.showModal();
    else dialog.setAttribute("open", "");
  };

  const moveLightbox = (direction) => {
    const visibleWorks = getVisibleWorks();
    if (visibleWorks.length < 2) return;
    const currentIndex = visibleWorks.findIndex((work) => work.id === currentWorkId);
    const nextIndex = (currentIndex + direction + visibleWorks.length) % visibleWorks.length;
    currentWorkId = visibleWorks[nextIndex].id;
    updateLightbox();
  };

  const applyLanguage = (language, persist = false) => {
    activeLanguage = translations[language] ? language : "en";
    document.documentElement.lang = htmlLanguages[activeLanguage];
    document.title = getText("title");
    document.querySelectorAll("[data-l10n]").forEach((element) => {
      element.textContent = getText(element.dataset.l10n);
    });
    updateTextAttributes();
    updateLanguageControls();
    renderGallery();
    updateLightbox();

    if (persist) {
      try {
        window.localStorage.setItem(languageStorageKey, activeLanguage);
      } catch {
        // The page remains usable when storage is unavailable.
      }
    }
  };

  const initLanguageSwitcher = () => {
    const switcher = document.querySelector("[data-language-switcher]");
    const toggle = document.querySelector("[data-language-toggle]");
    const menu = document.getElementById("worksLanguageMenu");

    const closeMenu = () => {
      switcher?.classList.remove("is-open");
      if (menu) menu.hidden = true;
      toggle?.setAttribute("aria-expanded", "false");
    };

    toggle?.addEventListener("click", () => {
      const isOpen = menu?.hidden === false;
      switcher?.classList.toggle("is-open", !isOpen);
      if (menu) menu.hidden = isOpen;
      toggle.setAttribute("aria-expanded", String(!isOpen));
    });

    document.querySelectorAll("[data-language-option]").forEach((button) => {
      button.addEventListener("click", () => {
        applyLanguage(button.dataset.languageOption, true);
        closeMenu();
      });
    });

    document.addEventListener("click", (event) => {
      if (switcher && !switcher.contains(event.target)) closeMenu();
    });

    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape" || menu?.hidden) return;
      closeMenu();
      toggle?.focus();
    });
  };

  const initFilters = () => {
    document.querySelectorAll("[data-filter]").forEach((button) => {
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        document.querySelectorAll("[data-filter]").forEach((filterButton) => {
          const selected = filterButton === button;
          filterButton.classList.toggle("is-active", selected);
          filterButton.setAttribute("aria-pressed", String(selected));
        });
        renderGallery();
      });
    });
  };

  const initLightbox = () => {
    const dialog = document.getElementById("worksLightbox");
    const image = document.getElementById("lightboxImage");
    const closeButton = dialog?.querySelector("[data-lightbox-close]");

    const close = () => {
      if (!dialog) return;
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    };

    closeButton?.addEventListener("click", close);
    dialog?.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });
    dialog?.addEventListener("close", () => {
      currentWorkId = null;
      image?.removeAttribute("src");
    });
    dialog?.querySelector("[data-lightbox-previous]")?.addEventListener("click", () => moveLightbox(-1));
    dialog?.querySelector("[data-lightbox-next]")?.addEventListener("click", () => moveLightbox(1));
    document.addEventListener("keydown", (event) => {
      if (!dialog?.open) return;
      if (event.key === "ArrowLeft") moveLightbox(-1);
      if (event.key === "ArrowRight") moveLightbox(1);
    });
  };

  document.addEventListener("DOMContentLoaded", async () => {
    applyLanguage(getStoredLanguage() || "en");
    initLanguageSwitcher();
    initFilters();
    initLightbox();
    await loadWorks();
    updateAvailableFilters();
    renderGallery();
  });
})();
