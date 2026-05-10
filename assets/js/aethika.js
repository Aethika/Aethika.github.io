(() => {
  const nav = document.querySelector(".aethika-nav");
  const updateNav = () => {
    if (window.scrollY > 16) nav?.classList.add("nav-scrolled");
    else nav?.classList.remove("nav-scrolled");
  };
  updateNav();
  window.addEventListener("scroll", updateNav, { passive: true });

  const revealItems = document.querySelectorAll(".insight-card, .capability-card, .research-card, .pattern-card, .architecture-panel, .mini-metric");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.animate(
          [
            { opacity: 0, transform: "translateY(22px)" },
            { opacity: 1, transform: "translateY(0)" }
          ],
          { duration: 620, easing: "cubic-bezier(.2,.8,.2,1)", fill: "both" }
        );
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
})();
