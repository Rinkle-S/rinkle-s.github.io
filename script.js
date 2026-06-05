// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle with localStorage persistence
const toggle = document.getElementById("themeToggle");
const root = document.documentElement;

const saved = localStorage.getItem("theme");
if (saved) {
  root.setAttribute("data-theme", saved);
  toggle.textContent = saved === "light" ? "☀️" : "🌙";
}

toggle.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
  root.setAttribute("data-theme", next);
  toggle.textContent = next === "light" ? "☀️" : "🌙";
  localStorage.setItem("theme", next);
});
