// Small enhancement: add a subtle active state while navigating.
const navLinks = document.querySelectorAll('nav a[href^="#"]');

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => item.classList.remove("active"));
    link.classList.add("active");
  });
});
