(() => {
  const registrationNumber = "202603071810 (RA0133617-K)";

  const addRegistrationToFooter = () => {
    document
      .querySelectorAll(
        '.footer-inner > p[data-i18n="footer.rights"], .footer-inner > p > [data-i18n="footer.rights"]'
      )
      .forEach((rightsNode) => {
        const rightsParagraph = rightsNode.matches("p")
          ? rightsNode
          : rightsNode.closest("p");
        const footerInner = rightsParagraph?.parentElement;

        if (!rightsParagraph || !footerInner) return;
        if (footerInner.querySelector(":scope > .footer-legal")) return;

        const legalGroup = document.createElement("div");
        legalGroup.className = "footer-legal";
        footerInner.insertBefore(legalGroup, rightsParagraph);
        legalGroup.appendChild(rightsParagraph);

        const registration = document.createElement("p");
        registration.className = "footer-registration";
        registration.textContent = `SSM Registration No.: ${registrationNumber}`;
        legalGroup.appendChild(registration);
      });
  };

  addRegistrationToFooter();

  const originalScript = document.createElement("script");
  originalScript.src = "/script-original.js?v=20260711-ssm-all-pages-v2";
  originalScript.async = false;
  originalScript.addEventListener("load", () => {
    addRegistrationToFooter();
    window.setTimeout(addRegistrationToFooter, 0);
  });
  document.body.appendChild(originalScript);
})();
