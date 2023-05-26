const minusBtn = document.querySelector("#minus");
const plusBtn = document.querySelector("#plus");
const people = document.querySelector(".people p");
const tipPerPerson = document.querySelector(".tpp p");
const billInput = document.querySelector("#billTotal");
const tipInput = document.querySelector("#tip");

tip = tipInput.value / 100;
let numOfpeople = 1;

const addPeople = () => {
  plusBtn.onclick = () => {
    numOfpeople += 1;
    people.innerText = numOfpeople;
    calculateBill();
  };
};

const removePeople = () => {
  minusBtn.onclick = () => {
    if (numOfpeople > 1) {
      numOfpeople -= 1;
      people.innerText = numOfpeople;
      calculateBill();
    }
  };
};

addPeople();
removePeople();

const calculateBill = () => {
  a = Number(billInput.value);
  b = Number(tipInput.value / 100);
  c = Number(people.innerText);
  tipPerPerson.innerText = ((a + a * b) / c).toFixed(2);
};

calculateBill();