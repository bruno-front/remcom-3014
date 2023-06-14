function sum(a, b) {
  console.log('BEFORE');
  return a + b;
}

let c = {
  name: 'Kesha'
}
let x = 6;

let sum1 = sum(c, x);
let sum2 = sum(1, 3);

console.log(sum1);
console.log(sum2);

// let services = document.querySelectorAll('.services-item');

// services.style.color = 'red';
// services.style.border = '2px solid green';


// for (let i = 0; i < services.length; i++) {
//   services[i].classList.add('services-item-test');
// }

// services.forEach( function(item) {
//   item.classList.add('services-item-test');
// } );


function runCustomFunction(a) {
  a();
}

let iNeedSleep = function() {
  console.log('Я обещаю два дня из 7 накануне занятий, в понедельник и среду, ложиться спать рано, что бы выспаться');
}

function iWantShoot() {
  console.log('Пиф-паф');
}

runCustomFunction(iNeedSleep);
runCustomFunction(iWantShoot);

runCustomFunction( function() {
  console.log('Я сообщение из безымянной функции, которая никуда не записана');
} );


let burger = document.querySelector('.js-burger');
let menu = document.querySelector('.js-menu');

burger.addEventListener('click', function() {
  let isOpen = menu.classList.contains('menu-open');

  if ( isOpen ) {
    menu.classList.remove('menu-open');
  } else {
    menu.classList.add('menu-open');
  }
});


// let menuLinks = document.querySelectorAll('.menu a');

// menuLinks.forEach(function(link) {
//   link.addEventListener('click', function(event) {
//     event.preventDefault();
//   });
// });



$(document).ready(function() {


  console.log('jQuery working!');


});

