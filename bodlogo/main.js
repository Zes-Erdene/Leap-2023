// let a = 2;
// let b = 5;
// let c = 3;
// function triangle(number1, number2, number3) {
//   console.log(a + b + c);
// }
// triangle(a, b, c);

// let peopleAges = [62, 14, 28];
// console.log(peopleAges);

// let i = 0;
// while (i < 100) {
//   console.log("hahah");
// }
// i++;

// let names = ["Bat", "Baldan", "Dulmaa", "Gonchig", "Luubat", "Manjin"];
// let p = 0;
// while (p < 6) {
//   console.log(names[p]);
//   names++;
// }

// // gurvaljin
// let a = prompt("too:");
// // 1+2+3=6
// let sum = 0;
// let i = 1;

// while (i <= a) {
//   console.log(sum);
//   i++;
// }

// kub ezlehvvn
// let a = 5;
// function kubE(a) {
//   return a ** 3;
// }
// let result = kubE(5);
// console.log(result);

// kub gadarguugin talbai
// let a = 5;
// function kubT(a) {
//   return a * a * 6;
// }
// result = kubT(5);
// console.log(result);

// tegsh ontsogtiin talbaig
// let a = 6,
//   b = 4;
// function rectangle(a, b) {
//   return a * b;
// }
// square = rectangle(a, b);
// console.log(square);

// tegsh ontsogt primetr
// let a = 6,
//   b = 4;
// function rectangle(a, b) {
//   return (a + b) * 2;
// }
// square = rectangle(a, b);
// console.log(square);

// funkts 1
// let x = 1;
// function number(x) {
//   return (y = 3 * x - 5);
// }
// y = number(x);
// console.log(y);

// funkts 2
// let x = -2;
// function number(x, y) {
//   return (y = 4 * 4 - 3 * -2 + 5);
// }
// y = number(x);
// console.log(y);

// Svvlin tsifr
// let a = 476;
// function number(a) {
//   console.log(a % 10);
// }
// number(a);

// 10tin orni tsipr
// let a = 423;
// function number(a) {
//   return a % 100;
// }
// answer = number(a);
// console.log(answer);

// 2 orontoi too
// let a = 27;
// 2+7=14
// b = 2;
// c = 7;
// function multi(a) {
//   console.log(b * c);
// }
// multi();

// 3 orontoi too
// let a = 123;
// // 1+2+3=6
// b = 1;
// c = 2;
// d = 3;
// let sum = 0;
// function total(niilber) {
//   return b + c + d;
// }
// sum = total(b, c, d);
// console.log(sum);

// minute second
// let a = 200;
// function main(a) {
//   return a / 60;
//   return a % 60;
// }
// time = main(a);
// console.log(time);

// tsag minute second
// let a = 3612;

// const music = new Audio("./project-01/sounds/crash.mp3");
// button.addEventListener("click", (event) => {
//   music.play();
// });

// Double the Numbers:
// Input: [1, 2, 3, 4]
// Output: [2, 4, 6, 8]
// const numbers = [1, 2, 3, 4, 5];
// function multiply(array) {
//   let newArray = [];
//   for (let i = 0; i < numbers.lenght; i++) {
//     newArray.push.array[i] * 2;
//   }
//   return newArray;
// }
// let result = multiply(numbers);
// console.log(result);

// Filter Even Numbers:
// Input: [1, 2, 3, 4, 5]
// Output: [1, 3, 5]

// const numbers = [1, 2, 3, 4, 5];
// let evenNumbers = numbers.filter((el) => {
//   return el % 2 !== 0;
// });
// console.log(evenNumbers);

// Square and Filter:
// Input: [1, 2, 3, 4, 5], Threshold: 10
// Output: [1, 4, 9, 16, 25]
// const numbers = [1, 2, 3, 4, 5];
// let square = numbers.map((el) => {
//   return el ** 2;
// });
// console.log(square);

// Uppercase Strings:
// Input: ['apple', 'banana', 'cherry']
// Output: ['APPLE', 'BANANA', 'CHERRY']
// const words = ["apple", "banana", "cherry"];
// let upperCase = words.map((el) => {
//   return el.toUpperCase();
// });
// console.log(upperCase);

// Filter by Length:
// Input: ['cat', 'dog', 'elephant', 'lion'], Min Length: 4
// Output: ['elephant', 'lion']
// const animals = ["cat", "dog", "elephant", "lion"];
// let filter = animals.filter((el) => {});

//

// Array baiwal zaaval dawtalt ashiglana
// const countGender = (array) => {
//   let male = 0;
//   let female = 0;
//   for (let i = 0; i < array.lenght; i++) {
//     if (array[i].gender == male) {
//       male++;
//     } else {
//       female++;
//     }
//   }
//   return { male: male, female: female };
// };
// console.log(countGender(students));

// const averageAge = (array) => {
//   let sum = 0;
//   for (let i = 0; i < array.lenght; i++) {
//     sum += array[i].age;
//   }
//   return sum / array.lenght;
// };
// console.log(averageAge(students));

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let countNumbers = numbers.map((number) => {
  return numbers;
});
console.log(countNumbers);
