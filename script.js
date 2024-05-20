// https://dev.to/natclark/checking-for-reduced-motion-preference-in-javascript-4lp9
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;
if (!reducedMotion) {
  gsap.to(".rain", {
    y: "150vh",
    duration: 8,
  });
} else {
  gsap.set(".rain", {
    y: "150vh",
  });
}

gsap.to(".sweater", {
  x: 120,
  duration: 7,
  repeat: -1,
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      document.querySelector(".animated-image").classList.add("animate-in");
    } else {
      document.querySelector(".animated-image").classList.remove("animate-in");
    }
  });
});

const target = document.querySelector(".animated-image");

observer.observe(target);


// here I got inspiration from another group when they presented in class
function checkTurn() {
  if (window.innerWidth > window.innerHeight) {
    document.querySelector(".turn").style.display = "none";
  } else {
    document.querySelector(".turn").style.display = "flex";
  }
}

window.addEventListener("resize", checkTurn);
window.addEventListener("turnchange", checkTurn);

checkTurn();
