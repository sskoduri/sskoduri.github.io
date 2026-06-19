const themeToggle = document.getElementById("themeToggle");
const year = document.getElementById("year");
year.textContent = new Date().getFullYear();
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
  themeToggle.textContent = savedTheme === "light" ? "🌞" : "🌙";
}
themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const nextTheme = currentTheme === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", nextTheme);
  localStorage.setItem("theme", nextTheme);
  themeToggle.textContent = nextTheme === "light" ? "🌞" : "🌙";
});
