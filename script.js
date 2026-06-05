// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Subtle reveal-on-scroll for sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.style.opacity = "1";
        e.target.style.transform = "none";
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".section").forEach((s) => {
  s.style.opacity = "0";
  s.style.transform = "translateY(16px)";
  s.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  observer.observe(s);
});
