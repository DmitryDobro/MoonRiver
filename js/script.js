let burgers = document.querySelectorAll('.header-burger')
let burger = document.querySelectorAll('.header-burger')
let menu = document.querySelector('.menu')

for(burger of burgers){
  burger.addEventListener('click', (event) => {
    // event.target.classList.toggle('_active') 
      // burger.classList.toggle('_active') 
      menu.classList.toggle('_active')
    
     
    document.addEventListener('click', (event) =>{
        if(!event.target.closest('.menu') && !event.target.closest('.header-burger')){
            // burger.classList.remove('active') 
            console.log(123);
            menu.classList.remove('_active') 
        }
    })
  })
  
}


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