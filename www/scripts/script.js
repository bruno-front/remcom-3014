$(document).ready(function() {

  // let isOpen = false;

  $('.js-burger').on('click', function() {
    $('.js-menu').slideToggle();

    // if (isOpen) {
    //   $('.js-menu').slideUp();
    //   isOpen = false;
    // } else {
    //   $('.js-menu').slideDown();
    //   isOpen = true;
    // }
  });

});

// let burger = document.querySelector('.js-burger');
// let menu = document.querySelector('.js-menu');

// burger.addEventListener('click', function() {
//   let isOpen = menu.classList.contains('menu-open');

//   if ( isOpen ) {
//     menu.classList.remove('menu-open');
//   } else {
//     menu.classList.add('menu-open');
//   }
// });







