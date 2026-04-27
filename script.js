document.getElementById('year').textContent = new Date().getFullYear();

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

  // Replace with the clinic's WhatsApp number when available.
  const clinicWhatsApp = '919447000000';
  window.open(`https://wa.me/${clinicWhatsApp}?text=${text}`, '_blank');
});
