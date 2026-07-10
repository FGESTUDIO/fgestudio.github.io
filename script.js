(() => {
  const registrationNumber = "202603071810 (RA0133617-K)";

  const addRegistrationNumber = () => {
    const rights = document.querySelector('[data-i18n="footer.rights"]');
    if (!rights) return;

    const footerInner = rights.closest(".footer-inner") || rights.parentElement;
    let legalGroup = footerInner.querySelector(".footer-legal");

    if (!legalGroup) {
      legalGroup = document.createElement("div");
      legalGroup.className = "footer-legal";
      legalGroup.style.display = "grid";
      legalGroup.style.gap = "4px";
      footerInner.insertBefore(legalGroup, rights);
      legalGroup.appendChild(rights);
    }

    let registration = legalGroup.querySelector(".footer-registration");
    if (!registration) {
      registration = document.createElement("p");
      registration.className = "footer-registration";
      registration.style.margin = "0";
      registration.style.fontSize = "0.86rem";
      registration.style.color = "rgba(224, 235, 255, 0.72)";
      legalGroup.appendChild(registration);
    }

    registration.textContent = `SSM Registration No.: ${registrationNumber}`;
  };

  const originalScript = document.createElement("script");
  originalScript.src = "/script-original.js?v=20260711-ssm-registration";
  originalScript.async = false;
  originalScript.addEventListener("load", addRegistrationNumber, { once: true });
  originalScript.addEventListener("error", addRegistrationNumber, { once: true });
  document.body.appendChild(originalScript);
})();
