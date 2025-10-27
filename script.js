// Theme toggle
const toggleBtn = document.getElementById('theme-toggle');
const body = document.body;

// Check if user has a preferred theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  toggleBtn.textContent = '☀️ Light Mode';
}

toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark');
  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '☀️ Light Mode';
  } else {
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '🌙 Dark Mode';
  }
});

console.log("Welcome to Mohammed Sahil’s Resume Website!");
