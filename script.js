const year = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

year.textContent = new Date().getFullYear();

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
