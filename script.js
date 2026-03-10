let currentSlide = 1;
const totalSlides = 11;

function nextSlide() {
  // Oculta el slide actual
  document.getElementById(`slide${currentSlide}`).classList.remove('active');

  // Avanza al siguiente slide
  currentSlide++;
  if (currentSlide > totalSlides) currentSlide = totalSlides;

  // Muestra el nuevo slide
  document.getElementById(`slide${currentSlide}`).classList.add('active');
}

// Para slides 2 a 11: avanzar al hacer clic en cualquier parte de la pantalla
document.addEventListener('click', function(e) {
  // Evita que se active en el botón del Slide 1
  if (currentSlide === 1) return;

  nextSlide();
});