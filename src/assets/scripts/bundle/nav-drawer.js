// © Manuel Matuzović: https://web.dev/website-navigation/ / Web Accessibility Cookbook

const stickyFooter = document.querySelector('#sticky-footer');
const div = stickyFooter.querySelector('div');
const burgerClone = document.querySelector('#burger-template').content.cloneNode(true);
const buttonDrawer = burgerClone.querySelector('button[data-drawer-toggle]');

div.style.setProperty('display', 'flex');

buttonDrawer.addEventListener('click', e => {
  const isOpenDrawer = buttonDrawer.getAttribute('aria-expanded') === 'true';
  buttonDrawer.setAttribute('aria-expanded', !isOpenDrawer);
});

const disableMenu = () => {
  buttonDrawer.setAttribute('aria-expanded', false);
};

//  close on escape
stickyFooter.addEventListener('keyup', event => {
  if (event.code === 'Escape') {
    disableMenu();
    buttonDrawer.focus();
  }
});

// close if clicked outside of event target
document.addEventListener('click', event => {
  const isClickInsideElement = stickyFooter.contains(event.target);
  if (!isClickInsideElement) {
    disableMenu();
  }
});

// avoid drawer flashing on page load
document.addEventListener('DOMContentLoaded', function () {
  setTimeout(() => {
    div.removeAttribute('no-flash');
  }, 100);
});

stickyFooter.insertBefore(burgerClone, div);
