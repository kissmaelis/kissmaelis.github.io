const storageKey = "{{ meta.theme.storageKey }}";
window.theme = (localStorage.getItem(storageKey)) ? localStorage.getItem(storageKey) : 'system';
document.firstElementChild.setAttribute('data-theme', window.theme);
