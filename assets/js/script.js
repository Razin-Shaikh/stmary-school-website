/*==================================================
        ST. MARY'S SCHOOL
        script.js
==================================================*/

// =====================================
// HERO SLIDER
// =====================================

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentSlide = 0;

// ==============================
// Show Slide
// ==============================

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[index].classList.add("active");

  dots[index].classList.add("active");
}

// ==============================
// Next Slide
// ==============================

function nextSlide() {
  currentSlide++;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }

  showSlide(currentSlide);
}

// ==============================
// Previous Slide
// ==============================

function previousSlide() {
  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  showSlide(currentSlide);
}

// ==============================
// Buttons
// ==============================

if (nextBtn) {
  nextBtn.addEventListener("click", nextSlide);
}

if (prevBtn) {
  prevBtn.addEventListener("click", previousSlide);
}

// ==============================
// Auto Slider
// ==============================

setInterval(() => {
  nextSlide();
}, 5000);

// ==============================
// Dot Navigation
// ==============================

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;

    showSlide(currentSlide);
  });
});

// =====================================
// SCROLL TO TOP
// =====================================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// =====================================
// ACTIVE NAVIGATION
// =====================================

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".navbar a").forEach((link) => {
  const file = link.getAttribute("href");

  if (file === currentPage) {
    link.classList.add("active");
  }
});

// =====================================
// SIMPLE FADE-IN ANIMATION
// =====================================

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(
  ".vision-card,.feature-card,.facility-card,.contact-card,.stat-card",
);

hiddenElements.forEach((el) => {
  el.classList.add("hidden");

  observer.observe(el);
});
/* =========================================================
   SUBTLE SCROLL PARALLAX
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".parallax-card, .parallax-icon");

  window.addEventListener("scroll", function () {
    const scrollPosition = window.scrollY;

    elements.forEach(function (element) {
      const rect = element.getBoundingClientRect();

      if (rect.top < window.innerHeight && rect.bottom > 0) {
        const center = rect.top + rect.height / 2;
        const screenCenter = window.innerHeight / 2;

        let strength = 0.03;

        if (element.classList.contains("parallax-icon")) {
          strength = 0.08;
        }

        const distance = (center - screenCenter) * strength;

        element.style.transform = `translateY(${distance}px)`;
      }
    });
  });
});
function toggleCard(cardId, btn) {
  const card = document.getElementById(cardId);
  card.classList.toggle("expanded");
  btn.textContent = card.classList.contains("expanded")
    ? "Read Less"
    : "Read More";
}
