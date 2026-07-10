(() => {
  const registrationNumber = "202603071810 (RA0133617-K)";

  const addRegistrationNumber = () => {
    const rights = document.querySelector('[data-i18n="footer.rights"]');
    if (!rights) return;

    let registration = rights.parentElement?.querySelector(".footer-registration");
    if (!registration) {
      registration = document.createElement("p");
      registration.className = "footer-registration";
      rights.insertAdjacentElement("afterend", registration);
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
