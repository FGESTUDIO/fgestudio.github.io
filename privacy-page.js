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
    initBackToTop();

    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => {
        applyPrivacyLanguage(button.dataset.lang);
      });
    });

    const languageSwitcher = document.querySelector(".language-switcher");
    if (languageSwitcher && "MutationObserver" in window) {
      const observer = new MutationObserver(() => {
        applyPrivacyLanguage(getActiveLanguage());
      });

      observer.observe(languageSwitcher, {
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
      });
    }

    window.setTimeout(() => applyPrivacyLanguage(getActiveLanguage()), 250);
    window.setTimeout(() => applyPrivacyLanguage(getActiveLanguage()), 1000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initPrivacyPage, { once: true });
  } else {
    initPrivacyPage();
  }
})();
