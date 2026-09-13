const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
function closeMenu() {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Open navigation');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  nav.classList.toggle('open', open);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); menuButton.focus(); } });
document.addEventListener('click', event => { if (!event.target.closest('.header')) closeMenu(); });
matchMedia('(min-width: 701px)').addEventListener('change', closeMenu);
const sections = document.querySelectorAll('main section[id]');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      nav.querySelectorAll('a').forEach(link => {
        if (link.hash === '#' + entry.target.id) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }
  });
}, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
sections.forEach(section => observer.observe(section));
const heroObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting) nav.querySelectorAll('a').forEach(link => link.removeAttribute('aria-current'));
}, {threshold: 0.5});
heroObserver.observe(document.querySelector('.hero'));
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const values = new FormData(form);
  const name = String(values.get('name')).trim();
  const email = String(values.get('email')).trim();
  const message = String(values.get('message')).trim();
  if (!name || !message) {
    document.getElementById('form-status').textContent = 'Please add your name and a message before opening your draft.';
    return;
  }
  const subject = encodeURIComponent('Let’s think together — ' + name);
  const body = encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email);
  window.location.href = 'mailto:jhosepdg@unc.edu?subject=' + subject + '&body=' + body;
  document.getElementById('form-status').textContent = 'Your email draft is ready to open. Send it from your email app, or email jhosepdg@unc.edu directly.';
});
