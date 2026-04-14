const revealTargets = document.querySelectorAll(".section, .card, .gallery img");

for (const el of revealTargets) {
  el.classList.add("reveal");
}

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    }
  },
  { threshold: 0.08 }
);

for (const el of revealTargets) {
  observer.observe(el);
}

const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  const y = window.scrollY > 20;
  header.style.background = y ? "rgba(6, 6, 10, 0.92)" : "rgba(6, 6, 10, 0.55)";
});
