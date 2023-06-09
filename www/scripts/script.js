console.log('script work!');

console.log('Hello world!');


let petName;

petName = 'Kesha';

console.log( petName );

petName = 34;

console.log( petName );

petName = null;

console.log( petName );

const Pi = 3.14;

console.log(Pi);

let petNames = ['Kesha', 'Gans', 'Fiona', 'Ryan', 'Robin'];

console.log( petNames );
console.log( petNames.length );



console.log( petNames[0] + 'Meewww');

console.log( 9 - '5');

let isTest = 5 === 5;

console.log(isTest);


let myFriend = '';

console.log(myFriend.length);

if (myFriend) {
  console.log( 'Заходи дорогой ' + myFriend );
} else {
  console.log( 'Стой - кто идет!' );
}


// if () {}
// for () {}
// function fn () {}

for (let i = 0; i < petNames.length; i++ ) {
  console.log( petNames[i] );
}

let num1 = 4;
let num2 = 5;

function summ (a, b) {
  console.log(a + b);
}

summ(num1, num2);



summ(3, 6);
summ(2, 6);
summ(3, 8);
summ(1, 1);


function sayHi(name) {
  if (name) {
    console.log('Привет, ' + name);
  } else {
    console.log('Привет товарищ!');
  }
}

sayHi();
sayHi('Света');

for (let i = 0; i < petNames.length; i++) {
  sayHi( petNames[i] );
}



let hiSay = function (name) {
  if (name) {
    console.log('Привет, ' + name);
  } else {
    console.log('Привет товарищ!');
  }
}

hiSay('Gleb');

let cat = {
  name: 'Kesha',
  age: 13,
  isBall: false,
  color: 'line gray',
  mew: function(meww) {
    console.log(meww);
  },
  parents: [
    {
      name: 'Chucha',
      age: 33,
      mew: function() {

      }
    },
    {}
  ]
}

catName = 'Kesha';

cat.mew('mmmmeeeewwwww');
cat.mew('ДАЙ ПОЖРАТЬ');

console.log(cat.name);
console.log(cat.color);
