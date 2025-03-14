function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active');
}

// Smooth scrolling for links
document.querySelectorAll('.navbar a, .btn').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
  });
});

// Auto-scroll from landing page to portfolio after 5 seconds
setTimeout(() => {
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
}, 5000);
