// Burger menu
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobileMenu');

  if (burger && mobileMenu) {
    burger.addEventListener('click', () => {
      mobileMenu.classList.toggle('active');
      document.body.classList.toggle('menu-open');
    });
  }
});

// DARK MODE persistent toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("darkModeSwitch");

  // Read cookie
  const dark = document.cookie.includes("site_dark=1");

  if (dark) {
    document.documentElement.classList.add("dark-mode");
    document.body.classList.add("dark-mode");
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener("change", () => {
      const on = toggle.checked;

      document.documentElement.classList.toggle("dark-mode", on);
      document.body.classList.toggle("dark-mode", on);

      // write cookie (session only)
      document.cookie = on
        ? "site_dark=1; path=/"
        : "site_dark=0; path=/";
    });
  }
});

// Re-apply theme when page is returned from browser cache
window.addEventListener("pageshow", () => {
  const isDark = document.cookie.includes("site_dark=1");

  document.body.classList.toggle("dark-mode", isDark);

  const darkSwitch = document.getElementById("darkModeSwitch");
  if (darkSwitch) darkSwitch.checked = isDark;
});

// ✅ PRIDAŤ TOTO — nič nemažeš, len vložíš dole
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenu = document.getElementById("mobileMenu");
  const signatureLink = mobileMenu?.querySelector('a[data-signature]');

  if (signatureLink) {
    signatureLink.addEventListener("click", (e) => {
      e.preventDefault();

      // zatvorenie menu
      mobileMenu.classList.remove("active");
      document.body.classList.remove("menu-open");

      // otvorenie novej stránky
      window.open("https://hisbalah.github.io/podpisNOWAK/", "_blank");
    });
  }
});
