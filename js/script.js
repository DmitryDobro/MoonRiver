const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 4,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    breakpoints:{
      950:{
        slidesPerView: 4,
      },
      600:{
        slidesPerView: 3,
      },
      400:{
        slidesPerView: 2,
      },
      200:{
        slidesPerView: "auto",
      }
    }
  });