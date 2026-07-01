document.addEventListener("DOMContentLoaded", function () {

  // fade-in scroll animation
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.1
  });

  const elements = document.querySelectorAll(".card, .service-card, .section-title");
  elements.forEach(el => {
    el.classList.add("hidden");
    observer.observe(el);
  });

});
