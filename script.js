document.addEventListener("DOMContentLoaded", () => {
  const backToTop = document.getElementById("back-to-top");
  
  // Handle back to top button visibility
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        backToTop.classList.add("show");
      } else {
        backToTop.classList.remove("show");
      }
    });
    
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Load saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
  body.classList.add("light");
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
  } else {
    localStorage.setItem("theme", "dark");
  }
});

// Floating nav visibility
const floatingNav = document.getElementById("floating-nav");
const hero = document.querySelector(".hero");

if (floatingNav) {
  // HOMEPAGE behavior (scroll past hero)
  if (hero) {
    window.addEventListener("scroll", () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom < 0) {
        floatingNav.classList.add("show");
      } else {
        floatingNav.classList.remove("show");
      }
    });
  } 
  // PROJECT PAGES behavior (show when scrolled down)
  else {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        floatingNav.classList.add("show");
      } else {
        floatingNav.classList.remove("show");
      }
    });
  }
}

// Scroll handling for ALL buttons with data-target attribute
document.querySelectorAll("[data-target]").forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Fade-in animation (repeats on every scroll)
const fadeElements = document.querySelectorAll(".fade-in");
const fadeInObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  },
  {
    threshold: 0.15
  }
);

fadeElements.forEach((el) => fadeInObserver.observe(el));