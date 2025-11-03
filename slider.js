document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  let currentSlide = 0;

  // funkcia na zobrazenie správneho slide-u
  function showSlide(index) {
    slides.forEach((slide, i) => {
      const dots = slide.querySelectorAll(".dot");
      slide.classList.toggle("active", i === index);
      dots.forEach((dot, j) => {
        dot.classList.toggle("active", j === index);
      });
    });
  }

  // ďalší a predchádzajúci
  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // priradenie eventov pre šípky (v každom slide)
  slides.forEach((slide) => {
    const left = slide.querySelector(".arrow.left");
    const right = slide.querySelector(".arrow.right");
    if (left) left.addEventListener("click", prevSlide);
    if (right) right.addEventListener("click", nextSlide);

    // priradenie eventov pre bodky v každom slide
    const dots = slide.querySelectorAll(".dot");
    dots.forEach((dot, j) => {
      dot.addEventListener("click", () => {
        currentSlide = j;
        showSlide(currentSlide);
      });
    });
  });

  // automatické prepínanie
  setInterval(nextSlide, 6000);

  // inicializácia
  showSlide(currentSlide);
});
