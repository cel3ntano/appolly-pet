// import Swiper from 'swiper/bundle';
// import { Navigation, Pagination } from 'swiper/modules';

// import 'swiper/css/bundle';
// //
// const swiper = new Swiper('.swiper', {
//   modules: [Navigation, Pagination],
//   spaceBetween: 50,
//   effect: 'coverflow',
//   coverflowEffect: {
//     rotate: 30,
//     slideShadows: false,
//   },
//   loop: true,
//   pagination: {
//     el: '.swiper-pagination',
//   },
// });
// console.log('do pobachennya');

import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  spaceBetween: 20,
  effect: 'coverflow',
  slidesPerView: 5,
  coverflowEffect: {
    slideShadows: false,
    rotate: 0,
  },
  direction: 'horizontal',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

document.querySelector('.swiper-button-next').addEventListener('click', () => {
  swiper.slideNext();
  updateVisibility();
});

document.querySelector('.swiper-button-prev').addEventListener('click', () => {
  swiper.slidePrev();
  updateVisibility();
});


function updateVisibility() {
  const slides = document.querySelectorAll('.swiper-slide');
  slides.forEach((slide, index) => {
    if (index < swiper.activeIndex) {
      slide.style.visibility = 'hidden';
    } else if (index > swiper.activeIndex + swiper.params.slidesPerView - 1) {
      slide.style.visibility = 'hidden';
    } else {
      slide.style.visibility = 'visible';
    }
  });
}

updateVisibility();

swiper.on('slideChange', updateVisibility);

