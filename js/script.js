// Sticky header + section reveal
window.addEventListener('scroll', function () {
  const header = document.getElementById('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add('visible');
    }
  });
});

// Dark mode toggle with localStorage
const darkToggle = document.getElementById('darkToggle');
const isDark = localStorage.getItem('darkMode') === 'true';
if (isDark) {
  document.body.classList.add('dark');
  darkToggle.textContent = 'Mode Clar';
}
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkToggle.textContent = document.body.classList.contains('dark') ? 'Mode Clar' : 'Mode Fosc';
  localStorage.setItem('darkMode', document.body.classList.contains('dark'));
});

// FAQ accordion with keyboard support
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', toggleFAQ);
  q.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFAQ(e);
    }
  });
});

function toggleFAQ(e) {
  const item = e.target.closest('.faq-item');
  const isActive = item.classList.toggle('active');
  e.target.querySelector('span').textContent = isActive ? '-' : '+';
  e.target.setAttribute('aria-expanded', isActive);
}