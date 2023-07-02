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
      $(this).toggleClass('open');
      $(this).next().slideToggle();
    } else {
      $(prevBtn).next().slideUp();
      $(prevBtn).removeClass('open');
      $(this).next().slideDown();
      $(this).addClass('open');
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


  // Каруселька Slick
  $('.js-carousel').slick({
    autoplay: true,
    dots: true
  });

  // AJAX запрос за отзывами
  $('.js-review-btn').on('click', function() {
    $.ajax({
      type: 'POST',
      url: '../jsons/reviews.json',
      data: {
        quantity: 2
      },
      success: function(res) {
        let reviewsHtml = createReviewsHtml(res.reviews);

        $('.js-reviews-wrap').append(reviewsHtml);
      },
      error: function() {
        console.log('уфффъ не работает браты');
      }
    });
  });

  function createReviewsHtml(dataArray) {
    let htmlString = '';

    dataArray.forEach(function(item) {
      htmlString = htmlString + `<div class="reviews-item">
        <img src="${item.imgUrl}" alt="${item.imgAlt}" class="reviews-ava">
        <div class="reviews-text">
          <strong class="reviews-name">${item.name}</strong>
          <blockquote class="reviews-quote">
            “${item.text}”
          </blockquote>
        </div>
      </div>`;
    });

    return htmlString;
  }

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







