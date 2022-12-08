// banner
var swiper = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


//   var swiper = new Swiper2(".mySwiper2", {
//     effect: "coverflow",
//     spaceBetween: 30,
//     centeredSlides: true,
//     grabCursor: true,
//     centeredSlides: true,
//     autoplay: {
//       delay: 2500,
//       disableOnInteraction: false
//     },
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 3,
//       slideShadows: true
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev"
//     }
//   });