const errorLanguageStorageKey = "manualLanguagePreference";

const errorTranslations = {
  en: {
    htmlLang: "en",
    label: "EN",
    titleMeta: "Page Not Found | FGESTUDIO",
    description: "The FGESTUDIO page you requested does not exist or has moved.",
    skip: "Skip to main content",
    brandLabel: "FGESTUDIO home",
    brandSubtitle: "梦幻起源欢娱工作室",
    languageToggle: "Change language",
    languageMenu: "Choose language",
    title: "This page is not here.",
    copy: "The address may have changed, or the link may be incorrect. Choose where you would like to go next.",
    homeCta: "Return home",
    designCta: "View design services",
    mcnCta: "View MCN",
    help: "If you followed a saved link, update it after opening the correct page."
  },
  cn: {
    htmlLang: "zh-Hans",
    label: "简中",
    titleMeta: "页面未找到 | FGESTUDIO",
    description: "你访问的 FGESTUDIO 页面不存在或已移动。",
    skip: "跳到主要内容",
    brandLabel: "返回 FGESTUDIO 首页",
    brandSubtitle: "梦幻起源欢娱工作室",
    languageToggle: "切换语言",
    languageMenu: "选择语言",
    title: "这个页面不在这里。",
    copy: "网址可能已经更新，或你输入的链接有误。你可以从下面重新选择要查看的内容。",
    homeCta: "返回首页",
    designCta: "查看设计服务",
    mcnCta: "查看 MCN 业务",
    help: "如果这是你保存过的链接，请在打开正确页面后更新书签。"
  },
  bm: {
    htmlLang: "ms",
    label: "BM",
    titleMeta: "Halaman Tidak Ditemui | FGESTUDIO",
    description: "Halaman FGESTUDIO yang diminta tidak wujud atau telah dipindahkan.",
    skip: "Langkau ke kandungan utama",
    brandLabel: "Laman utama FGESTUDIO",
    brandSubtitle: "Studio Kreatif Malaysia",
    languageToggle: "Tukar bahasa",
    languageMenu: "Pilih bahasa",
    title: "Halaman ini tiada di sini.",
    copy: "Alamat mungkin telah berubah atau pautan tersebut tidak tepat. Pilih destinasi anda seterusnya di bawah.",
    homeCta: "Kembali ke laman utama",
    designCta: "Lihat perkhidmatan reka bentuk",
    mcnCta: "Lihat MCN",
    help: "Jika anda menggunakan pautan yang disimpan, kemas kini pautan itu selepas membuka halaman yang betul."
  }
};

function getRequestedErrorLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  const aliases = {
    cn: "cn",
    zh: "cn",
    "zh-hans": "cn",
    en: "en",
    bm: "bm",
    ms: "bm"
  };

  if (requested && aliases[requested.toLowerCase()]) {
    return aliases[requested.toLowerCase()];
  }

  try {
    const stored = window.localStorage.getItem(errorLanguageStorageKey);
    return errorTranslations[stored] ? stored : "en";
  } catch {
    return "en";
  }
}

function updateErrorLanguageUrl(language) {
  const url = new URL(window.location.href);
  if (language === "en") {
    url.searchParams.delete("lang");
  } else {
    url.searchParams.set("lang", language === "cn" ? "zh-Hans" : "ms");
  }
  window.history.replaceState({}, "", `${url.pathname}${url.search}${url.hash}`);
}

function applyErrorLanguage(language, updateUrl = false) {
  const translation = errorTranslations[language] || errorTranslations.en;
  document.documentElement.lang = translation.htmlLang;
  document.documentElement.dataset.language = language;
  document.title = translation.titleMeta;

  const description = document.querySelector('meta[name="description"]');
  if (description) description.content = translation.description;

  document.querySelectorAll("[data-error-i18n]").forEach((element) => {
    const key = element.dataset.errorI18n;
    if (translation[key]) element.textContent = translation[key];
  });

  document.querySelectorAll("[data-error-i18n-aria]").forEach((element) => {
    const key = element.dataset.errorI18nAria;
    if (translation[key]) element.setAttribute("aria-label", translation[key]);
  });

  const currentLabel = document.querySelector("[data-language-current]");
  if (currentLabel) currentLabel.textContent = translation.label;

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-checked", button.dataset.lang === language ? "true" : "false");
  });

  if (updateUrl) updateErrorLanguageUrl(language);
}

function closeErrorLanguageMenu() {
  const switcher = document.querySelector("[data-language-switcher]");
  const toggle = document.querySelector("[data-lang-toggle]");
  const menu = document.getElementById("errorLanguageMenu");
  if (!switcher || !toggle || !menu) return;
  switcher.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
  menu.hidden = true;
}

document.addEventListener("DOMContentLoaded", () => {
  const switcher = document.querySelector("[data-language-switcher]");
  const toggle = document.querySelector("[data-lang-toggle]");
  const menu = document.getElementById("errorLanguageMenu");
  let language = getRequestedErrorLanguage();
  applyErrorLanguage(language);

  toggle?.addEventListener("click", () => {
    const shouldOpen = menu.hidden;
    menu.hidden = !shouldOpen;
    switcher?.classList.toggle("is-open", shouldOpen);
    toggle.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      language = button.dataset.lang;
      try {
        window.localStorage.setItem(errorLanguageStorageKey, language);
      } catch {
        // The language still changes for this page if storage is unavailable.
      }
      applyErrorLanguage(language, true);
      closeErrorLanguageMenu();
    });
  });

  document.addEventListener("click", (event) => {
    if (switcher && !switcher.contains(event.target)) closeErrorLanguageMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeErrorLanguageMenu();
      toggle?.focus();
    }
  });
});
