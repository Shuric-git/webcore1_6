import Swiper, { Navigation, Pagination } from 'swiper';

const sliders = document.querySelectorAll('.swiper');


sliders.forEach((el) => {
  let mySlider;
  function mobileSlider() {
    if (window.innerWidth <= 767 && el.dataset.mobile == 'false') {
      mySlider = new Swiper(el, {
        slidesPerView: 1.15,
        spaceBetween: 16,
        modules: [Navigation, Pagination],
        loop: true,
  
        pagination: {
          el: el.querySelector('.swiper-pagination'),
        },
        // Navigation arrows
        // navigation: {
        //   nextEl: el.querySelector('.swiper-button-next'),
        //   prevEl: el.querySelector('.swiper-button-prev'),
        // },
      });
  
      el.dataset.mobile = 'true';
    }
  
    if (window.innerWidth > 767) {
      el.dataset.mobile = 'false';
  
      if (el.classList.contains('swiper-initialized')) {
        mySlider.destroy();
      }
    }
  }
  
  mobileSlider();
  
  window.addEventListener('resize', () => {
    mobileSlider();
  });
})









