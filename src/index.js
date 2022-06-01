// import getName from './greeting.js';

// let a = 1;

// function multFive() {
//   a++;
//   console.log(a);
//   if (a > 10) {
//     return a;
//   }

//   multFive();
// }

// multFive();

// console.log(getName('mango'));

// ------------------------------------------
// ------------------------------------------

// let offset = 0;

// let test1Ref = document.querySelector('.test-1');
// let buttonRef = document.querySelector('button');

// function move() {
//   offset += 1;

//   test1Ref.style.left = `${offset}px`;
//   if (offset > 100) {
//     return console.log(`FINISH`);
//   }
//   setTimeout(move, 10);
//   //   move();
// }

// buttonRef.addEventListener('click', move);

// ------------------------------------------
// ------------------------------------------

// Write a recursive function, sum(arr, n),
// that returns the sum of the first n elements of an array arr.

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    console.log(sum(arr, n - 1));
    return sum(arr, n - 1) + arr[n - 1];
  }
}

// console.log(`multiply: ${multiply([2, 3, 4], 1)}`);
// console.log(`sum: ${sum([2, 3, 4], 1)}`);
console.log(`sum: ${sum([2, 3, 4, 5], 3)}`);
