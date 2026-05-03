document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('nav-toggle');
const primaryNav = document.getElementById('primary-nav');
navToggle?.addEventListener('click', () => {
  const open = primaryNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});
primaryNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    primaryNav.classList.remove('open');
    navToggle?.setAttribute('aria-expanded', 'false');
    navToggle?.setAttribute('aria-label', 'Open menu');
  });
});

const form = document.getElementById('book-form');
form?.addEventListener('submit', (e) => {
  e.preventDefault();
  const f = new FormData(form);
  const name = (f.get('name') || '').toString().trim();
  const phone = (f.get('phone') || '').toString().trim();
  const date = (f.get('date') || '').toString();
  const time = (f.get('time') || '').toString();
  const reason = (f.get('reason') || '').toString().trim();

  if (!name || !phone || !date || !time) {
    alert('Please fill in your name, phone, preferred date and time.');
    return;
  }

  const text =
    `Appointment request%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Date: ${encodeURIComponent(date)}%0A` +
    `Time: ${encodeURIComponent(time)}%0A` +
    (reason ? `Reason: ${encodeURIComponent(reason)}` : '');

  const clinicWhatsApp = '918281447235';
  window.open(`https://wa.me/${clinicWhatsApp}?text=${text}`, '_blank');
});
