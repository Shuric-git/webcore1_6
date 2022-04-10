  // import Swiper JS
  import Swiper, { Navigation, Pagination } from 'swiper';


  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    modules: [Navigation, Pagination],
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });