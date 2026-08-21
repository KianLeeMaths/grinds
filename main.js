(function () {
  const config = window.GRINDS_CONFIG || {};
  const number = (config.whatsappNumber || "").replace(/\D/g, "");
  const message = encodeURIComponent(config.whatsappMessage || "Hi, I'd like to enquire about grinds.");
  const href = number ? `https://wa.me/${number}?text=${message}` : "#contact";

  ["header-whatsapp", "hero-whatsapp", "footer-whatsapp", "footer-link-whatsapp"].forEach(function (id) {
    const el = document.getElementById(id);
    if (el) el.href = href;
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
})();
