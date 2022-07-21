let burgerHeader = document.getElementById('burgerHeader')
let burgerMenu = document.getElementById('burgerMenu')
let menu = document.querySelector('.menu')
let body = document.querySelector('body')
console.log(burgerMenu);


burgerHeader.addEventListener('click', (event) => {
    menu.classList.toggle('_active')
    burgerMenu.classList.toggle('_active') 
    burgerHeader.classList.toggle('_active') 
    body.classList.toggle('_lock') 
  })
  burgerMenu.addEventListener('click', (event) => {
    menu.classList.toggle('_active')
    burgerMenu.classList.toggle('_active') 
    burgerHeader.classList.toggle('_active') 
    body.classList.toggle('_lock') 
  })
  document.addEventListener('click', (event) =>{
        if(!event.target.closest('.menu') && !event.target.closest('.burger._active')){
            // burger.classList.remove('active') 
            console.log(123);
            menu.classList.remove('_active') 
            burgerMenu.classList.remove('_active') 
            burgerHeader.classList.remove('_active') 
            body.classList.remove('_lock') 
        }
    })


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