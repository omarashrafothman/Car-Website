var loginbtn = document.querySelector('.login-btn');
var loginform = document.querySelector('.login');
var closebtn = document.querySelector('.fa-times');
var navbar = document.querySelector('.navbar');
var menu = document.querySelector('.fa-bars');

loginbtn.addEventListener('click', function() {
    loginform.classList.toggle('active');
});
closebtn.addEventListener('click', function() {
    loginform.classList.remove('active');
});
menu.addEventListener('click', function() {
    navbar.classList.toggle('active');
});





var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,

        },
        768: {
            slidesPerView: 2,

        },
        991: {
            slidesPerView: 3,

        },
    },
});