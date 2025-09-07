// Sticky header + section reveal
window.addEventListener('scroll', function() {
  const header = document.getElementById('header');
  if(window.scrollY > 50){ header.classList.add('scrolled'); }
  else { header.classList.remove('scrolled'); }
  document.querySelectorAll('section').forEach(section => {
    const rect = section.getBoundingClientRect();
    if(rect.top < window.innerHeight - 100){ section.classList.add('visible'); }
  });
});

// Dark mode toggle
const darkToggle = document.getElementById('darkToggle');
darkToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  darkToggle.textContent = document.body.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', () => {
    const item = q.parentElement;
    item.classList.toggle('active');
    q.querySelector('span').textContent = item.classList.contains('active') ? '-' : '+';
  });
});