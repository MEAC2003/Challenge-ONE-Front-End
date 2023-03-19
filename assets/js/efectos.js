window.onload = function () {
  window.scrollTo(0, 0);
}

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(navLink => {
  navLink.addEventListener('click', function () {
    navLinks.forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
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

