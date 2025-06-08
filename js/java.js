 document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('navegador');

    toggle.addEventListener('click', function () {
      nav.classList.toggle('mostrar');
    });
  });