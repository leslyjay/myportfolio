// Toggle Navbar visibility (for mobile menu or menu toggle button)
function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}

// Smooth scrolling for navbar links and buttons
document.querySelectorAll(".navbar a, .btn").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Auto-scroll from landing page to portfolio section after 5 seconds
setTimeout(() => {
  const portfolioSection = document.getElementById("portfolio");
  if (portfolioSection) {
    portfolioSection.scrollIntoView({ behavior: "smooth" });
  }
}, 5000);

// Scroll to contact section on specific button click (e.g., #contact-btn)
document.querySelector("#contact-btn")?.addEventListener("click", function (e) {
  e.preventDefault();
  const contactSection = document.querySelector("#contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
});

