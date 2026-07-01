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
.hidden {
  opacity: 0;
  transform: translateY(40px);
  transition: all 0.8s ease;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(255,255,255,0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
}

body {
  padding-top: 80px;
}

.btn:hover {
  transform: scale(1.05);
  transition: 0.3s;
  background: #0d5a43;
}
const counters = document.querySelectorAll('.count');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;

    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
