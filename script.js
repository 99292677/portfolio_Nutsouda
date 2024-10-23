document.addEventListener("DOMContentLoaded", function () {
  const fadeInElements = document.querySelectorAll(".fade-in");
  const observerOptions = {
      root: null,
      threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
              observer.unobserve(entry.target);
          }
      });
  }, observerOptions);

  fadeInElements.forEach(element => {
      observer.observe(element);
  });
});
