(() => {
  const titles = {
    cn: "隐私政策 | FGESTUDIO",
    en: "Privacy Policy | FGESTUDIO",
    bm: "Dasar Privasi | FGESTUDIO",
  };

  const validLanguages = new Set(["cn", "en", "bm"]);

  function getPreferredLanguage() {
    try {
      const saved = localStorage.getItem("preferredLanguage");
      if (validLanguages.has(saved)) return saved;
    } catch (error) {
      // Ignore storage restrictions in private or in-app browsers.
    }

    const activeButton = document.querySelector(".lang-btn.is-active");
    return validLanguages.has(activeButton?.dataset.lang) ? activeButton.dataset.lang : "cn";
  }

  function getActiveLanguage() {
    const activeButton = document.querySelector(".lang-btn.is-active");
    return validLanguages.has(activeButton?.dataset.lang)
      ? activeButton.dataset.lang
      : getPreferredLanguage();
  }

  function applyPrivacyLanguage(lang) {
    const activeLanguage = validLanguages.has(lang) ? lang : "cn";

    document.querySelectorAll("[data-privacy-lang]").forEach((panel) => {
      panel.hidden = panel.dataset.privacyLang !== activeLanguage;
    });

    document.title = titles[activeLanguage];
  }

  function isMobileViewport() {
    return window.innerWidth <= 900 || (window.screen && window.screen.width <= 900);
  }

  function setImportant(element, property, value) {
    if (element) element.style.setProperty(property, value, "important");
  }

  function applyMobileLayoutFallback() {
    if (!isMobileViewport()) return;

    setImportant(document.documentElement, "overflow-x", "hidden");
    setImportant(document.body, "width", "100%");
    setImportant(document.body, "max-width", "100vw");
    setImportant(document.body, "overflow-x", "hidden");

    document
      .querySelectorAll(
        "main, .site-header, .legal-hero, .terms-summary-section, .terms-content-section, .site-footer"
      )
      .forEach((element) => {
        setImportant(element, "width", "100%");
        setImportant(element, "max-width", "100vw");
        setImportant(element, "min-width", "0");
      });

    document.querySelectorAll(".container").forEach((element) => {
      setImportant(element, "width", "calc(100% - 24px)");
      setImportant(element, "max-width", "calc(100vw - 24px)");
      setImportant(element, "margin-left", "auto");
      setImportant(element, "margin-right", "auto");
      setImportant(element, "min-width", "0");
    });

    document.querySelectorAll(".legal-hero-grid, .terms-shell").forEach((element) => {
      setImportant(element, "display", "block");
      setImportant(element, "width", "100%");
      setImportant(element, "max-width", "100%");
      setImportant(element, "min-width", "0");
    });

    document
      .querySelectorAll(
        '.terms-summary-card, .terms-company-card, .terms-toc, .terms-document, .terms-block, [data-privacy-lang]:not([hidden])'
      )
      .forEach((element) => {
        setImportant(element, "width", "100%");
        setImportant(element, "max-width", "100%");
        setImportant(element, "min-width", "0");
      });

    document.querySelectorAll(".terms-company-card").forEach((element) => {
      setImportant(element, "height", "auto");
    });
  }

  function initBackToTop() {
    const link = document.querySelector('.footer-links a[data-i18n="footer.backTop"]');
    if (!link) return;

    link.setAttribute("href", "#");
    link.addEventListener("click", (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function initPrivacyPage() {
    applyPrivacyLanguage(getPreferredLanguage());
    applyMobileLayoutFallback();
    initBackToTop();

    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => {
        applyPrivacyLanguage(button.dataset.lang);
        applyMobileLayoutFallback();
      });
    });

    const languageSwitcher = document.querySelector(".language-switcher");
    if (languageSwitcher && "MutationObserver" in window) {
      const observer = new MutationObserver(() => {
        applyPrivacyLanguage(getActiveLanguage());
        applyMobileLayoutFallback();
      });

      observer.observe(languageSwitcher, {
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    window.addEventListener("resize", applyMobileLayoutFallback, { passive: true });
    window.addEventListener("orientationchange", applyMobileLayoutFallback, { passive: true });

    window.setTimeout(() => {
      applyPrivacyLanguage(getActiveLanguage());
      applyMobileLayoutFallback();
    }, 250);

    window.setTimeout(() => {
      applyPrivacyLanguage(getActiveLanguage());
      applyMobileLayoutFallback();
    }, 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPrivacyPage, { once: true });
  } else {
    initPrivacyPage();
  }
})();
