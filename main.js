(function () {
  const config = window.GRINDS_CONFIG || {};
  const number = (config.whatsappNumber || "").replace(/\D/g, "");
  const email = config.email || "kian.lee.clonard@gmail.com";
  const message = encodeURIComponent(config.whatsappMessage || "Hi, I'd like to enquire about grinds.");
  const whatsappHref = number ? `https://wa.me/${number}?text=${message}` : "#contact";
  const mailtoHref = `mailto:${email}`;

  ["header-whatsapp", "hero-whatsapp", "footer-whatsapp", "footer-link-whatsapp"].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.href = whatsappHref;
  });

  ["footer-email", "footer-link-email"].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.href = mailtoHref;
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
