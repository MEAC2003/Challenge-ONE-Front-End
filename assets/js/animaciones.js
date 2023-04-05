window.onload = function () {
  window.scrollTo(0, 0);
}

// Cambio de color de la página
let banner = document.querySelector('.banner');
let nav = document.querySelector('.navbar')
let diaNoche = document.querySelector('.dia__noche')

diaNoche.onclick = function () {
  banner.classList.toggle('night')
  nav.classList.toggle('night')
}


// Animación al elegir un enlace en el nav 
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', function () {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// Nombre automático 
let typingText = new Typed("#text", {
  strings: ["Manuel Antón"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 1000,
});

// Animación de los enlaces del nav cuando se avance con el scroll
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

// Animación del scroll

window.sr = ScrollReveal({
  reset: true
});

// sr.reveal('.navbar', {
//   duration: 2000,
//   origin: 'bottom',
//   distance: '-100px'
// });

// sr.reveal('.quien ', {
//   duration: 2500,
//   origin: 'left',
//   distance: '1000px'
// });

// sr.reveal('.quien__logo ', {
//   duration: 2500,
//   origin: 'right',
//   distance: '1000px'
// });

// sr.reveal('.sobre__titulo', {
//   duration: 3500,
//   origin: 'left',
//   distance: '200px'
// });


// sr.reveal('.sobre__info', {
//   duration: 3500,
//   origin: 'bottom',
//   distance: '200px'
// });

sr.reveal('.skills__titulo ', {
  duration: 100,
  origin: 'left',
  distance: '200px',
  opacity: 0
});

sr.reveal('.skill__item', {
  duration: 1000,
  origin: 'bottom',
  distance: '200px',
  opacity: 0
});

sr.reveal('.hobbie__titulo ', {
  duration: 1000,
  origin: 'left',
  distance: '200px',
  opacity: 0
});

sr.reveal('.carousel', {
  duration: 1000,
  origin: 'bottom',
  distance: '200px',
  opacity: 0
});

sr.reveal('.formacion__titulo', {
  duration: 1000,
  origin: 'left',
  distance: '200px',
  opacity: 0
});

sr.reveal('.formacion__item', {
  duration: 1000,
  rotate: {
    x: 1,
    y: 180,
  },
  opacity: 0
});

sr.reveal('.proyectos__titulo', {
  duration: 1000,
  origin: 'left',
  distance: '200px',
  opacity: 0
});

sr.reveal('.proyectos__row', {
  duration: 1000,
  origin: 'bottom',
  distance: '200px',
  opacity: 0
});