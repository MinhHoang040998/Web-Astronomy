// banner
      var swiper = new Swiper(".mySwiper", {
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

      var swiper = new Swiper(".mySwiper2", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 10,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 60,
          stretch: 1,
          depth: 150,
          modifier: 1,
          slideShadows: true,
        },
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
        breakpoints: {
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        },
      });

// email

function sendEmail() {

  Email.send({
      secureToken: "0ab2dd1a-b4d4-40d2-90bc-3ed827907c01",
      To : 'hieunm14092001@gmail.com',
      From : document.getElementById('footer-contact__email').value,
      Subject : document.getElementById('footer-contact__message').value,
      Body : "Name: " +document.getElementById('footer-contact__name').value
      + "<br> Email: " + document.getElementById('footer-contact__email').value
      + "<br> Phone: " + document.getElementById("footer-contact__phone").value 
      + "<br> Message: " + document.getElementById("footer-contact__message").value 
  }).then(
    message => alert("message Succesfully")
  );
}