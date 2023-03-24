window.onload = function () {
  window.scrollTo(0, 0);
}

let banner = document.querySelector('.banner');
let nav = document.querySelector('.navbar')
let diaNoche = document.querySelector('.dia__noche')

diaNoche.onclick = function () {
  banner.classList.toggle('night')
  nav.classList.toggle('night')
}



const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', function () {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

let typingText = new Typed("#text", {
  strings: ["Manuel Antón"],
  loop: true,
  typeSpeed: 140,
  backSpeed: 50,
  backDelay: 1000,
});

const texto = document.querySelector('.sobre__info');
texto.innerHTML = texto.textContent.replace(/\S/g, "<span>$&</span>");

const animacion = anime.timeline({
  targets: '.sobre__info span',
  easing: 'easeInOutExpo',
  loop: false,
});

animacion
  .add({
    rotate: function () {
      return anime.random(-360, 360)
    },
    translateX: function () {
      return anime.random(-35, 35)
    },
    translateY: function () {
      return anime.random(-35, 35)
    },
    duration: 300,
    delay: anime.stagger(5),
  })


  .add({
    rotate: 0,
    translateX: 0,
    translateY: 0,
    delay: anime.stagger(9),
  });

window.addEventListener('scroll', function () {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  let currentSectionIndex = 0;
  let closestDistance = Infinity;

  sections.forEach((section, index) => {
    const sectionRect = section.getBoundingClientRect();
    const distanceToViewport = sectionRect.bottom - 250;
    if (distanceToViewport < closestDistance && distanceToViewport >= -sectionRect.height) {
      closestDistance = distanceToViewport;
      currentSectionIndex = index;
    }
  });

  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[currentSectionIndex].classList.add('active');
});


const btn = document.querySelector('.btn__Enviar');

btn.addEventListener('click', function () {
  this.classList.toggle('active');

  setTimeout(() => {
    this.classList.remove('active');
  }, 3000);
});
