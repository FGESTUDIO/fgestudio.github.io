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

  function initTermsPage() {
    applyTermsLanguage(getPreferredLanguage());

    document.querySelectorAll(".lang-btn").forEach((button) => {
      button.addEventListener("click", () => {
        applyTermsLanguage(button.dataset.lang);
      });
    });

    const languageSwitcher = document.querySelector(".language-switcher");
    if (languageSwitcher && "MutationObserver" in window) {
      const observer = new MutationObserver(() => {
        const activeButton = languageSwitcher.querySelector(".lang-btn.is-active");
        if (activeButton) applyTermsLanguage(activeButton.dataset.lang);
      });

      observer.observe(languageSwitcher, {
        subtree: true,
        attributes: true,
        attributeFilter: ["class"],
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initTermsPage, { once: true });
  } else {
    initTermsPage();
  }
})();
