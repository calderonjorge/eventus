// Variables
const menuHamburgesa = document.querySelector('.fa-bars');
const menu = document.querySelector('.enlaces-header');


//EVENTOS
window.addEventListener("scroll", scroll);

window.addEventListener('load', generarSlider)

menuHamburgesa.addEventListener('click', () => {
  menu.classList.toggle('active');
});

window.addEventListener('click', e => {
  if (menu.classList.contains('active') && e.target !== menuHamburgesa && e.target !== menu && e.target !== document.querySelector('.carousel__next')) {
    menu.classList.toggle('active');
  }
});

//Funciones
function scroll() {
  const navbar = document.querySelector('nav')
  const containerFloating = document.querySelector('.container-floating');
  if (window.pageYOffset >= 30) {
    navbar.style.background = 'black';
    navbar.classList.add('active');
    containerFloating.classList.add('active-container');
  } else {
    navbar.style.background = '';
    navbar.classList.remove('active');
    containerFloating.classList.remove('active-container')
  }
}

function generarSlider() {
  new Glider(document.querySelector('.comment__list'), {
    slidesToShow: 1,
    slidesToScroll: 1,
    rewind: true,
    duration: 0.3,
    draggable: true,
    arrows: {
      prev: '.carousel__prev',
      next: '.carousel__next'
    },
    responsive: [{
      breakpoint: 1000,
      settings: {
        draggable: false,
      }
    }]
  });

  setInterval(() => {
    document.querySelector('.carousel__next').click();
  }, 7000);
}

// Configuracion del lightbox
lightbox.option({
  'resizeDuration': 500,
  'wrapAround': true,
  'albumLabel': "Imagen %1 de %2",
  'disableScrolling': true,
  'positionFromTop': 135
});




