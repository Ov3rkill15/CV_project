// Theme Toggle Script
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check saved theme
if (localStorage.getItem('theme') === 'light') {
  body.classList.add('light-mode');
}

// Toggle theme
themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-mode');
  
  // Save preference
  if (body.classList.contains('light-mode')) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  // Add click animation
  themeToggle.style.transform = 'scale(0.9)';
  setTimeout(() => {
    themeToggle.style.transform = 'scale(1)';
  }, 100);
});

// Generate random stars for dark mode
function generateStars() {
  const starsContainer = document.getElementById('stars');
  const numberOfStars = 100;

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    star.style.animationDuration = (Math.random() * 3 + 2) + 's';
    starsContainer.appendChild(star);
  }
}

generateStars();