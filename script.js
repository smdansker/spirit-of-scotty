const menu = document.getElementById('menuButton');
const links = document.getElementById('navLinks');
function closeMenu() {
  links.classList.remove('open');
  menu.setAttribute('aria-expanded', 'false');
  menu.setAttribute('aria-label', 'Open navigation');
}
menu.addEventListener('click', () => {
  const expanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', String(!expanded));
  menu.setAttribute('aria-label', expanded ? 'Open navigation' : 'Close navigation');
  links.classList.toggle('open', !expanded);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
document.getElementById('year').textContent = new Date().getFullYear();
