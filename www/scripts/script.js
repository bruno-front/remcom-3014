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

  // АККОРДИОНЫ НА СТРАНИЦЕ FAQ
  let prevBtn;
  $('.js-accordion-btn').on('click', function() {
    if (prevBtn === this) {
      $(this).next().slideToggle();
    } else {
      $(prevBtn).next().slideUp();
      $(this).next().slideDown();
      prevBtn = this;
    }
  });

  // Табы на транице - контакты
  $('.js-tab-link').on('click', function(event) {
    event.preventDefault();
    $('.js-tab-link').removeClass('active');
    $(this).addClass('active');

    let index = $(this).index('.js-tab-link');

    $('.js-contacts-item').removeClass('active');
    $('.js-contacts-item').eq(index).addClass('active');
  });

  // Фильтрация в наших работах
  $('.js-filter-link').on('click', function(event) {
    event.preventDefault();

    $('.js-filter-link').removeClass('active');
    $(this).addClass('active');

    let filterType = $(this).data('filter');

    if (filterType === 'all') {
      $('.js-works-item').show();
      return;
    }

    $('.js-works-item').each(function () {
      let dataType = $(this).data('type');

      if (filterType === dataType) {
        $(this).show();
      } else {
        $(this).hide();
      }
    });

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







