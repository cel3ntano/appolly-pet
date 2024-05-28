import Swiper from 'swiper/bundle';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css/bundle';
//
const swiper = new Swiper('.swiper', {
  modules: [Navigation, Pagination],
  spaceBetween: 50,
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
console.log('do pobachennya');
