const d = document;

function envioFormValidacion() {
  const $form = d.querySelector('.contacto__form'),
    $inputs = d.querySelectorAll('.contacto__form [required]');

  $inputs.forEach(input => {
    const $span = d.createElement('span');
    $span.id = input.name;
    $span.textContent = input.title;
    $span.classList.add('contacto__form__error', 'none')
    input.insertAdjacentElement("afterend", $span);
  });

  d.addEventListener('keyup', e => {
    if (e.target.matches('.contacto__form [required]')) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value) ? d.getElementById($input.name).classList.add('active') : d.getElementById($input.name).classList.remove('active')
      }

      if (!pattern) {
        return $input.value === "" ? d.getElementById($input.name).classList.add('active') : d.getElementById($input.name).classList.remove('active')
      }
    }
  });

  d.addEventListener('submit', (e) => {
    e.preventDefault();

    const $btn = document.querySelector('.btn__Enviar'),
      error = document.getElementById('alert');

    $btn.classList.toggle('active');

    fetch("https://formsubmit.co/ajax/manuelantoncisneros2020@hotmail.com", {
      method: "POST",
      body: new FormData(e.target)
    })
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(json => {
          $form.reset();
        setTimeout(() => {
          $btn.classList.remove('active');
        }, 2000);
      })
      .catch(err => {
        error.style.visibility = "visible";
        setTimeout(function () {
          error.style.visibility = "hidden";
        }, 3000);
      })
  });

}

d.addEventListener("DOMContentLoaded", envioFormValidacion);