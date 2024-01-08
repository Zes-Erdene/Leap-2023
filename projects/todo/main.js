let booksOne = document.getElementsByClassName("books1");
let booksTwo = document.getElementsByClassName("books2");
let booksThree = document.getElementsByClassName("books3");
let booksFour = document.getElementsByClassName("books4");

const inputObj = {
  title: booksOne,
  Description: booksTwo,
  Status: booksThree,
  Priority: booksFour,
};
.push(inputObj);
render();


const show = () =>{
  document.getElementsByClassName('dark')[0]
  .classList.add('show');
};

