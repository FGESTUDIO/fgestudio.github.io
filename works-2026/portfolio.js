(() => {
  const translations = {
    cn: {
      title: "海报设计作品集 | FGESTUDIO",
      skip: "跳到精选作品",
      homeLabel: "前往 FGESTUDIO 首页",
      brandSub: "梦幻起源欢娱工作室",
      backToDesign: "返回设计服务",
      languageToggle: "切换语言",
      heroKicker: "FGESTUDIO · 精选作品",
      heroTitle: "海报设计作品集",
      heroLead: "近期完成的宣传海报设计精选，涵盖本地服务宣传与产品视觉。",
      summaryLabel: "作品集摘要",
      statLabel: "精选海报作品",
      statNote: "服务宣传 · 产品视觉",
      galleryKicker: "海报设计",
      galleryTitle: "精选项目",
      galleryHint: "点击作品即可查看完整尺寸。",
      galleryLabel: "精选海报设计作品",
      workType: "海报设计",
      work1Title: "手机维修服务宣传",
      work2Title: "汽车维修服务宣传",
      work3Title: "护肤产品视觉",
      work1Alt: "手机维修服务宣传海报",
      work2Alt: "汽车维修服务宣传海报",
      work3Alt: "护肤产品宣传海报",
      work1Open: "查看手机维修服务宣传海报完整尺寸",
      work2Open: "查看汽车维修服务宣传海报完整尺寸",
      work3Open: "查看护肤产品宣传海报完整尺寸",
      viewWork: "查看完整作品 ↗",
      ctaKicker: "你的下一次宣传",
      ctaTitle: "需要为你的生意做一张海报吗？",
      ctaButton: "发送设计需求",
      footerHome: "FGESTUDIO 首页",
      closeLabel: "关闭作品预览",
    },
    en: {
      title: "Selected Poster Design Works | FGESTUDIO",
      skip: "Skip to selected works",
      homeLabel: "Go to FGESTUDIO home",
      brandSub: "FGESTUDIO",
      backToDesign: "Back to design services",
      languageToggle: "Switch language",
      heroKicker: "FGESTUDIO · SELECTED WORKS",
      heroTitle: "Poster Design Portfolio",
      heroLead: "A curated selection of recent promotional poster designs for local services and product campaigns.",
      summaryLabel: "Portfolio summary",
      statLabel: "Selected poster works",
      statNote: "Service promotion · Product visual",
      galleryKicker: "POSTER DESIGN",
      galleryTitle: "Selected projects",
      galleryHint: "Select a work to view it in full.",
      galleryLabel: "Selected poster design works",
      workType: "Poster design",
      work1Title: "Mobile repair service promotion",
      work2Title: "Automotive service promotion",
      work3Title: "Skincare product visual",
      work1Alt: "Mobile repair service promotional poster",
      work2Alt: "Automotive service promotional poster",
      work3Alt: "Skincare product promotional poster",
      work1Open: "View full mobile repair service promotional poster",
      work2Open: "View full automotive service promotional poster",
      work3Open: "View full skincare product promotional poster",
      viewWork: "View full work ↗",
      ctaKicker: "YOUR NEXT CAMPAIGN",
      ctaTitle: "Need a poster for your business?",
      ctaButton: "Send a design enquiry",
      footerHome: "FGESTUDIO Home",
      closeLabel: "Close work preview",
    },
    bm: {
      title: "Portfolio Reka Bentuk Poster | FGESTUDIO",
      skip: "Lompat ke hasil karya pilihan",
      homeLabel: "Pergi ke laman utama FGESTUDIO",
      brandSub: "FGESTUDIO",
      backToDesign: "Kembali ke servis reka bentuk",
      languageToggle: "Tukar bahasa",
      heroKicker: "FGESTUDIO · KARYA PILIHAN",
      heroTitle: "Portfolio Reka Bentuk Poster",
      heroLead: "Pilihan poster promosi terkini untuk perkhidmatan tempatan dan kempen produk.",
      summaryLabel: "Ringkasan portfolio",
      statLabel: "Hasil poster pilihan",
      statNote: "Promosi servis · Visual produk",
      galleryKicker: "REKA BENTUK POSTER",
      galleryTitle: "Projek pilihan",
      galleryHint: "Pilih hasil karya untuk melihat saiz penuh.",
      galleryLabel: "Hasil reka bentuk poster pilihan",
      workType: "Reka bentuk poster",
      work1Title: "Promosi servis pembaikan telefon",
      work2Title: "Promosi servis automotif",
      work3Title: "Visual produk penjagaan kulit",
      work1Alt: "Poster promosi servis pembaikan telefon",
      work2Alt: "Poster promosi servis automotif",
      work3Alt: "Poster promosi produk penjagaan kulit",
      work1Open: "Lihat poster promosi servis pembaikan telefon pada saiz penuh",
      work2Open: "Lihat poster promosi servis automotif pada saiz penuh",
      work3Open: "Lihat poster promosi produk penjagaan kulit pada saiz penuh",
      viewWork: "Lihat hasil penuh ↗",
      ctaKicker: "KEMPEN SETERUSNYA",
      ctaTitle: "Perlukan poster untuk perniagaan anda?",
      ctaButton: "Hantar pertanyaan reka bentuk",
      footerHome: "Laman Utama FGESTUDIO",
      closeLabel: "Tutup pratonton hasil karya",
    },
  };

  const languageCodes = { cn: "CN", en: "EN", bm: "BM" };
  const htmlLanguages = { cn: "zh-Hans", en: "en", bm: "ms" };
  const languageStorageKey = "manualLanguagePreference";
  let activeLanguage = "en";

  const getStoredLanguage = () => {
    try {
      const stored = window.localStorage.getItem(languageStorageKey);
      return translations[stored] ? stored : null;
    } catch {
      return null;
    }
  };

  const getBrowserLanguage = () => {
    const languages = Array.isArray(navigator.languages) && navigator.languages.length
      ? navigator.languages
      : [navigator.language || ""];
    const normalized = languages.map((language) => String(language).toLowerCase());

    if (normalized.some((language) => language.startsWith("zh"))) return "cn";
    if (normalized.some((language) => language.startsWith("ms"))) return "bm";
    return "en";
  };

  const getText = (key) => translations[activeLanguage]?.[key] || translations.en[key] || "";

  const updateTextAttributes = () => {
    document.querySelectorAll("[data-l10n-attr]").forEach((element) => {
      const rules = element.dataset.l10nAttr.split(";");
      rules.forEach((rule) => {
        const [attribute, key] = rule.split(":");
        if (attribute && key) element.setAttribute(attribute, getText(key));
      });
    });

    document.querySelectorAll("[data-l10n-alt]").forEach((image) => {
      image.alt = getText(image.dataset.l10nAlt);
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

  const applyLanguage = (language, persist = false) => {
    activeLanguage = translations[language] ? language : "en";
    document.documentElement.lang = htmlLanguages[activeLanguage];
    document.title = getText("title");
    document.querySelectorAll("[data-l10n]").forEach((element) => {
      element.textContent = getText(element.dataset.l10n);
    });
    updateTextAttributes();
    updateLanguageControls();

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

  const initLightbox = () => {
    const dialog = document.getElementById("worksLightbox");
    const image = document.getElementById("lightboxImage");
    const title = document.getElementById("lightboxTitle");
    const closeButton = dialog?.querySelector("[data-lightbox-close]");

    const close = () => {
      if (!dialog) return;
      if (typeof dialog.close === "function") dialog.close();
      else dialog.removeAttribute("open");
    };

    document.querySelectorAll("[data-work-image]").forEach((button) => {
      button.addEventListener("click", () => {
        if (!dialog || !image || !title) return;
        image.src = button.dataset.workImage;
        image.alt = getText(button.dataset.workAlt);
        title.textContent = getText(button.dataset.workTitle);
        if (typeof dialog.showModal === "function") dialog.showModal();
        else dialog.setAttribute("open", "");
      });
    });

    closeButton?.addEventListener("click", close);
    dialog?.addEventListener("click", (event) => {
      if (event.target === dialog) close();
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    applyLanguage(getStoredLanguage() || getBrowserLanguage());
    initLanguageSwitcher();
    initLightbox();
  });
})();
