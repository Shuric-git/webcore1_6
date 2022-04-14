  // import Swiper JS
import Swiper, { Navigation, Pagination } from 'swiper';

const slider = document.querySelector('.swiper');

let mySlider;

function mobileSlider() {
  if (window.innerWidth <= 767 && slider.dataset.mobile == 'false') {
    mySlider = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      modules: [Navigation, Pagination],

      pagination: {
        el: '.swiper-pagination',
      },
    });

    slider.dataset.mobile = 'true';
  }

  if (window.innerWidth > 767) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-initialized')) {
      mySlider.destroy();
    }
  }
}

mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});


  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },