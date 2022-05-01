// core version + navigation, pagination modules:
import Swiper, { Pagination, Autoplay, Navigation } from "swiper";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// init Swiper:

export const enableSwipers = () => {
  const projectsSwiper = new Swiper(".projects__swiper-core", {
    // configure Swiper to use modules
    modules: [Autoplay, Navigation],
    // Optional parameters
    loop: true,
    slidesPerView: 3,
    setWrapperSize: true,
    slidesOffsetBefore: 1426,
    breakpoints: {
      //   // when window width is >= 320px
      992: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
    },
    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },

    navigation: {
      nextEl: ".projects__swiper-next",
      prevEl: ".projects__swiper-prev",
    },
  });
  const testimonialsSwiper = new Swiper(".testimonials__swiper-core", {
    // configure Swiper to use modules
    modules: [Autoplay, Navigation],
    // Optional parameters
    loop: true,
    slidesPerView: 1,

    // autoplay: {
    //   delay: 2000,
    //   disableOnInteraction: false,
    // },
    navigation: {
      nextEl: ".testimonials__swiper-next",
      prevEl: ".testimonials__swiper-prev",
    },
  });
  return {
    projects: projectsSwiper,
    testimonials: testimonialsSwiper,
  };
};
