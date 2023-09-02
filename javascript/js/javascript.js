// Mostrar el botón después de que la página haya sido cargada
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtntop").style.display = "block";
  } else {
    document.getElementById("myBtntop").style.display = "none";
  }
}

// Hacer que la página se mueva hacia arriba al hacer clic en el botón
function topFunction() {
  document.body.scrollTop = 0; /* Para Safari */
  document.documentElement.scrollTop = 0; /* Para Chrome, Firefox, IE y Opera */
  window.scrollTo(0, c - c / 0);
}

