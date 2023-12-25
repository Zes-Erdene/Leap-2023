// console.log("Hello, world");
// console.log("NBA is the best basketball league");

// let age = 21;
// let name = "Zesee";
// let height = 176;

// console.log(age, name, height);

// let number = 465 / 100;
// console.log(number);

// let number1 = 465 / 10;
// console.log(number);

// let too = 224;
// if (too % 2 === 0) {
//   console.log("tegsh too");
// } else {
//   console.log("sondgoi");
// }

// let n = 100;
// if (n > 10 && n % 2 === 0) {
//   console.log("tegsh ba 10s ih too");
// } else if (n < 10 && n % 2 === 0) {
//   console.log("tegsh ba 10s baga too");
// } else if (n < 10 && n % 2 !== 0) {
//   console.log("sondgoi ba 10s baga too");
// } else if (n > 10 && n % 2 !== 0) {
//   console.log("sondgoi ba 10s ih too");
// }

// let dvn = 89.5;
// if (dvn >= 90 && dvn >= 100) {
//   console.log("a");
// } else if (dvn >= 80 && dvn < 90) {
//   console.log("b");
// } else if (dvn >= 70 && dvn < 80) {
//   console.log("c");
// } else if (dvn >= 60 && dvn < 70) {
//   console.log("d");
// } else if (dvn >= 1 && dvn > 60) {
//   console.log("f");
// } else {
//   console.log("dvn baihgvi");
// }

// let day = 1;
// if (day == 1) {
//   console.log("Monday");
// } else if (day == 2) {
//   console.log("Tuesday");
// } else if (day == 3) {
//   console.log("Thursday");
// } else if (day == 4) {
//   console.log("Wednesday");
// } else if (day == 5) {
//   console.log("Friday");
// } else if (day == 6) {
//   console.log("Saturday");
// } else if (day == 7) {
//   console.log("Sunday");
// } else {
//   console.log("garag bish");
// }

// let A = 0,
//   B = 1;

// !((A && B) || B); // False
// (A && !(!B || B)) || A; // false
// (!A && !B) || !(A || A); // true

// let too = -1;
// if (too < 0) {
//   console.log("sorog too");
// } else {
//   console.log("eyreg too");
// }

// let n = 1;
// let m = 2;
// let s = 3;
// if (n > m && n > s) {
//   console.log("n hamgiin ih");
// } else if (m > n && m > s) {
//   console.log("m hamgiin ih");
// } else if (s > n && s > m) {
//   console.log("s hamgiin ih");
// }

// let weight = 277;
// let height = 1.75;
// let a = weight / height ** 2;
// if (a < 18.5) {
//   console.log("jingiin dutagdaltai");
// } else if (a >= 18.5 && a < 24.9) {
//   console.log("ervvl");
// } else if (a >= 24.9 && a < 30) {
//   console.log("ilvvdel jintei");
// } else if (a > 30) {
//   console.log("het targalalttai");
// }

// let day = 10;
// let dayName;
// switch (day) {
//   case 1:
//     dayName = "Monday";
//     break;
//   case 2:
//     dayName = "Tuesday";
//     break;
//   case 3:
//     dayName = "Wednesday";
//     break;
//   case 4:
//     dayName = "Thursday";
//     break;
//   case 5:
//     dayName = "Friday";
//     break;
//   case 6:
//     dayName = "Saturday";
//     break;
//   case 7:
//     dayName = "Sunday";
//     break;
//   default:
//     dayName = "Ali n ch bish";
// }
// // console.log(dayName);

// let person = "Naraa";
// let personName;
// switch (person) {
//   case "Naraa":
//     personName = "Naraa irsen";
//     break;
//   case "Baldan":
//     personName = "Baldan irsen";
//     break;
//   case "Dulmaa":
//     personName = "Dulmaa irsen";
//     break;
//   case "Galt":
//     personName = "Galt irsen";
//     break;
//   case "Sainaa":
//     personName = "Sainaa irsen";
//     break;
//   default:
//     personName = "hen n ch ireegvi";
// }
// console.log(personName);

// Terinary
// let age = 1;
// let message = age >= 18 ? "Ta nasand hvrsen bn" : "ta hvvhdeere bn";
// console.log(message);

// let mnt = 1;
// usd = 3450;
// cny = 380;
// rub = 38;

// 1. Ymr temdegtes hediig ymr temdegt rvv shiljvvleh

// "Currency converter";
// "ehleed ymar temdegtes hedig hurvuuleh gdg ni orno araas ni MNT, USD, RUB, CNY ymar mungun temdegt hurvuulne hariug gargana uu? ";
// "10 USD-g MNT hurvuul gevel 34600MNT bollo geh met"`Unuudrin hansh
// USD 3450
// MNT 1
// CNY 380
// RUB 38
// `;
// 500 usd => MNT => "180000MNT bolloo"
// let balance = 0;
// let currencyFrom = window.prompt(
//   "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
// );
// switch (currencyFrom) {
//   case "1":
//     currencyFrom = 3450;
//     break;
//   case "2":
//     currencyFrom = 1;
//     break;
//   case "3":
//     currencyFrom = 480;
//     break;
//   case "4":
//     currencyFrom = 38;
//     break;
//   default:
//     console.log("Buruu orolt");
// }
// let value = window.prompt("End toon utga oruulna uu ?");
// let currencyTo = window.prompt(
//   "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
// );
// switch (currencyTo) {
//   case "1":
//     currencyTo = 3450;
//     break;
//   case "2":
//     currencyTo = 1;
//     break;
//   case "3":
//     currencyTo = 480;
//     break;
//   case "4":
//     currencyTo = 38;
//     break;
//   default:
//     console.log("Buruu orolt");
// }
// window.alert((currencyFrom * value) / currencyTo);

// function myFunction() {
//   console.log("Hi bye");
// }

// myFunction();

// let firstName = window.prompt("Ner oruul");

// function name(firstName) {
//   console.log("hi", firstName);
// }
// name(firstName);

// const first = window.prompt("ehnii toog oruul");
// const second = window.prompt("hoyrdoh toog oruul");

// function presentName(first, second) {
//   console.log(Number(first));
//   console.log(Number(second));
//   console.log(first * second, first - second, first / second, first + second);
// }

// presentName(first, second);

// let a = 2;
// let b = 5;
// tegsh ontsogt durvuljin talbai oloh
// function square(number1, number2) {
//   return number1 * number2;
// }
// let answer = square(5, 5);
// console.log(answer);

// x

// "baldan dorj";

// const firstName = "baldan"; //b
// const firstStr = firstName.slice(0, 1).toLocaleUpperCase();
// const lastStr = firstName.slice(1, firstName.length);

// const lastName = "dorj";
// const lastNameStr = lastName.slice(0, 1).toLocaleUpperCase();

// console.log(lastNameStr + "." + "" + firstStr + lastStr);

// const fullName = "Dulam Jantsan";
// const firstName = fullName.split(" ")[0];
// const lastName = fullName.split(" ")[1];
// const firstLetterToUpperCase = (str) => {
//   return str.slice(0, 1).toUpperCase();
// };
// const linkTwoStr = (str) => {
//   const firstStr = firstLetterToUpperCase(str);
//   const lastStr = str.slice(1, str.length);
//   return firstStr + lastStr;
// };
// const lastNameStr = firstLetterToUpperCase(lastName);
// console.log(lastNameStr + "." + " " + linkTwoStr(firstName, lastName));

// const name = "zes-erdene gantulga";
// let split = str.split("");
// co;

// let person = {
//   name: "Tyrese Haliburton",
//   team: "Indiana Pacers",
//   position: "point guard",
//   age: 23,
// };
// console.log(person.name);

// let person1 = {
//   firstName: "Zesee",
// };
// let person2 = person1;
// person2.firstName = "Erdene";
// console.log(person1.firstName);
// console.log(person2.firstName);

// ...:spread operator

// object.keys()
// const person = {
//   name:"Dorj",
//   age:15
// }
// const keys = Object.keys(person);
// console.log(keys);

// object.values()
// const person = {
//   name:"Dorj",
//   age:15
// }
// const keys = Object.values(person);
// console.log(keys);

// const basketballPlayer = {
//   name: "Lebron James",
//   age: 39,
//   height: 203,
//   nickname: "King",
//   team: "Lakers",
//   position: "Small forward",
// };
// console.log(basketballPlayer);

// const fruits1 = ["banana", "apple", "orange", "mango"];
// console.log(fruits1.toString()); // "banana, apple, orange, mango"

// const fruits2 = ["banana", "apple", "orange", "mango"];
// console.log(fruits2.join("and")); // "banana and apple and orange and mango"

// const fruits3 = ["banana", "apple", "orange", "mango"];
// console.log(fruits3.includes("pineapple")); // true

// const fruits4 = ['banana', 'apple', 'orange','mango'];
// console.log(fruits4.indexOf('pineapple')); //

// const fruits4 = ['banana', 'apple', 'orange','mango'];
// const findIndex = (fruit) => {
//     for(let i =0; i<fruits4.length; i++){

//     }
// };

// const numberObject = {a:5, b:10, c:3};
// const keys = Object.keys(numberObject);
// let sum = 0;
// for(let i=0; i<keys.length; i++){

// }
// console.log();

// const mockObject = {
//   key1: "value1",
//   key2: 42,
//   key3: ["item1", "item2"],
//   key4: { nestedKey: "nestedValue" },
//   key5: true,
//   key6: null,
// };

// const element = document.getElementsByClassName("dummy");
// const element = document.getElementById("hello");
// const element = document.getElementsByTagName("body");
// const element = document.querySelectorAll(".dummy");
// console.log(element);

// let element = (document.getElementById("demo").innerHTML = "<p>Pinecone</p>");
// console.log(element);

// const element = document.createElement("div");
// console.log(element);

//  //div element songoj avah  const myEl = document.getElementsByTagName("div")[0];  //img element uusgeh  const imgEl = document.createElement("img");  //img elementing src attr-d utga uguh  imgEl.src =  "https://resource.market.sodonsolution.org/olz/product/2019/11/28/xczdvr07hrmv3dxz/imageFile_m.jpg";  //img elementee songoj avsan div elementin child bolgoj uguh  myEl.appendChild(imgEl);  //h1 element ustgah  const headerEl = document.getElementsByTagName("h1")[0];  //songoj avsan div elementes songoj header element ustgah  myEl.removeChild(headerEl);

//  //div element songoj avah
//  const myEl = document.getElementsByTagName("div")[0];
//  //img element uusgeh
//  const imgEl = document.createElement("img");
//  //img elementing src attr-d utga uguh
//  imgEl.src =
//  "https://resource.market.sodonsolution.org/olz/product/2019/11/28/xczdvr07hrmv3dxz/imageFile_m.jpg";
//  //img elementee songoj avsan div elementin child bolgoj uguh
//  myEl.appendChild(imgEl);
//  //h1 element ustgah
//  const headerEl = document.getElementsByTagName("h1")[0];
//  //songoj avsan div elementes songoj header element ustgah
//  myEl.removeChild(headerEl);
// const myButton = document.getElementById("button");
// const bgChanger = () => {
//   myButton.style.backgroundColor = "black";
// };
// myButton.addEventListener("click", bgChanger);
// console.log(myButton);

// const containerEl = document.getElementsByClassName("flex")[0];
// const btn = document.getElementById("button")[0];
// let color = "green"
// const changeColor = () => {
//   const color = document.createElement("flex");
//   color.innerHTML = color;
// };
// button.addEventListener("click", changeColor);

//Elementudig select hiij avna
// const inputOne = document.getElementsByTagName("input")[0];
// const inputTwo = document.getElementsByTagName("input")[1];
// const buttons = document.getElementsByTagName("button");
// //bodlgo hariu shalgah function
// let check = () => {
//   //hariultig input-s avj baina
//   const answer = document.getElementsByTagName("input")[2];
//   //hariult taarj bnu shalgah
//   if (
//     Number(inputOne.value) + Number(inputTwo.value) ===
//     Number(answer.value)
//   ) {
//     //zuv baival asuultig shinechled hariultin input-g tseverlene
//     alert("Zuv baina");
//     renew();
//     answer.value = "";
//   } else {
//     alert("buruu hariult");
//   }
// };
// // asuult shinechleh function
// const renew = () => {
//   const min = 100;
//   const max = 999;
//   //2 input deer buhel too ugnu
//   inputOne.value = Math.floor(Math.random() * (max - min) + min);
//   inputTwo.value = Math.floor(Math.random() * (max - min) + min);
// };
// //Web ehelhed renew function shuud ajillna
// renew();
// //2 tovch deer eventlistener ajilluuna
// buttons[0].addEventListener("click", check);
// buttons[1].addEventListener("click", renew);

// const el = document.getElementById("run");

// const run = () => {
//   min = 0;
//   max = 90;
//   div.style.top = Math.floor(Math.random() * (max - min) + min)%;
//   div.style.left = Math.floor(Math.random() * (max - min) + min)%;
// };
// el.addEventListener("click", run);

// function openConfirm() {
//   let result = confirm("Tsaash vrgeljlvvlehvv");
//   alert(result);
// }
// const el = document.getElementById("div");
// el.addEventListener("click", openConfirm);

// document.addEventListener("keydown",()=>{
//   console.log("towch darlaa");
// });
