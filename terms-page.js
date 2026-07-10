(() => {
  const titles = {
    cn: "服务条款 | FGESTUDIO",
    en: "Terms & Conditions | FGESTUDIO",
    bm: "Terma & Syarat | FGESTUDIO",
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

  function applyTermsLanguage(lang) {
    const activeLanguage = validLanguages.has(lang) ? lang : "cn";

    document.querySelectorAll("[data-terms-lang]").forEach((panel) => {
      panel.hidden = panel.dataset.termsLang !== activeLanguage;
    });

    document.title = titles[activeLanguage];
  }

  function getActiveLanguage() {
    const activeButton = document.querySelector(".lang-btn.is-active");
    return validLanguages.has(activeButton?.dataset.lang)
      ? activeButton.dataset.lang
      : getPreferredLanguage();
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

  function initTermsPage() {
    applyTermsLanguage(getPreferredLanguage());
    initBackToTop();

    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => {
        applyTermsLanguage(button.dataset.lang);
      });
    });

    const languageSwitcher = document.querySelector(".language-switcher");
    if (languageSwitcher && "MutationObserver" in window) {
      const observer = new MutationObserver(() => {
        applyTermsLanguage(getActiveLanguage());
      });

      observer.observe(languageSwitcher, {
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    // The global site script loads editable content asynchronously and may
    // update the document title afterwards. Re-apply the legal page title.
    window.setTimeout(() => applyTermsLanguage(getActiveLanguage()), 250);
    window.setTimeout(() => applyTermsLanguage(getActiveLanguage()), 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTermsPage, { once: true });
  } else {
    initTermsPage();
  }
})();
