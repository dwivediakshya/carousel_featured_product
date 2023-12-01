document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const carouselItems = document.querySelector(".carousel-items");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  let itemWidth = carouselItems.clientWidth;
  let position = 0;

  function slideCarousel() {
    carouselItems.style.transform = `translateX(-${position}px)`;
  }

  function slideNext() {
    if (position < carouselItems.scrollWidth - itemWidth) {
      position += itemWidth;
      slideCarousel();
    }
  }

  function slidePrev() {
    if (position > 0) {
      position -= itemWidth;
      slideCarousel();
    }
  }

  setInterval(slideNext, 5000); // Automatic slide change every 5 seconds

  nextBtn.addEventListener("click", slideNext); // Manual next button click
  prevBtn.addEventListener("click", slidePrev); // Manual prev button click
});
