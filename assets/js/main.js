document.addEventListener('DOMContentLoaded', function() {

  const autoSlider = document.querySelector('.js-auto-slider');
  new Swiper(autoSlider, {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    speed: 10000,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    }
  })

})