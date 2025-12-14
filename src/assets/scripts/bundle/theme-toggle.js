document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = window.theme || (localStorage.getItem("{{ meta.theme.storageKey }}") || 'system');
  const selectedBtn = document.querySelector('.themes button[data-theme="' + currentTheme + '"]');
  if (selectedBtn) selectedBtn.setAttribute('aria-pressed', 'true');

  const themeButtons = document.querySelectorAll('.themes button');
  themeButtons.forEach((themeButton) => {
    themeButton.addEventListener('click', (event) => {
      const selectedTheme = themeButton.getAttribute('data-theme');
      localStorage.setItem("{{ meta.theme.storageKey }}", selectedTheme);
      themeButton.setAttribute('aria-pressed', 'true');
      document.firstElementChild.setAttribute('data-theme', selectedTheme);
      themeButtons.forEach((otherThemeButton) => {
        if (themeButton !== otherThemeButton) {
          otherThemeButton.setAttribute('aria-pressed', 'false');
          document.querySelector('html').classList.remove('theme-' + otherThemeButton.getAttribute('data-theme'));
        }
      });
    });
  });
});