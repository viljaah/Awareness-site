gsap.to(".rain", {
  y: "150vh",
  duration: 8,
});

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



function checkTurn() {
  if (window.innerWidth > window.innerHeight) {
      document.querySelector('.turn').style.display = 'none';
  } else {
      document.querySelector('.turn').style.display = 'flex';
  }
}

window.addEventListener('resize', checkTurn);
window.addEventListener('turnchange', checkTurn);

checkTurn();
