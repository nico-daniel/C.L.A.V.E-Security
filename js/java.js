 document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('navegador');

    toggle.addEventListener('click', function () {
      nav.classList.toggle('mostrar');
    });
  });

  let fodaActual = 0;

function cambiarFoda(direccion) {
    const slides = document.querySelectorAll(".foda-slide");
    slides[fodaActual].classList.remove("active");

    fodaActual = (fodaActual + direccion + slides.length) % slides.length;

    slides[fodaActual].classList.add("active");
}
