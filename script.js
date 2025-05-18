// script.js

// Smooth scrolling effect for all internal links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 70, // Adjust based on nav height
        behavior: "smooth"
      });
    }
  });
});
