const inputBill = document.querySelector(".input__bill--input");

const tip = document.querySelectorAll(".input__tip--number");
const tipCustom = document.querySelector(".custom");

const peopleLabelError = document.querySelector(".input__people--error");
const people = document.querySelector("#people");

const results = document.querySelectorAll(".results");

const resetBtn = document.querySelector(".output__reset--button");

inputBill.addEventListener("input", setBillValue);
tip.forEach((btn) => {
  btn.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", setTipCustomValue);
people.addEventListener("input", setPeopleValue);
resetBtn.addEventListener('click', reset)

let billValue = 0.0;
let tipValue = 0.15;
let peopleValue = 1;

function validateFloat(s) {
  let rgx = /^[0-9]*\.?[0-9]*$/;
  return s.match(rgx);
}

function validateInt(s) {
  let rgx = /^[0-9]*$/;
  return s.match(rgx);
}

function setBillValue() {
  if (inputBill.value.includes(",")) {
    inputBill.value = inputBill.value.replace(",", ".");
  }

  if (!validateFloat(inputBill.value)) {
    inputBill.value = inputBill.value.substring(0, inputBill.value.length - 1);
  }
  billValue = parseFloat(inputBill.value);

  calculateTip();
}

function handleClick(e) {
  tip.forEach((btn) => {
    btn.classList.remove("input__tip--number-active");

    if (e.target.innerHTML == btn.innerHTML) {
      btn.classList.add("input__tip--number-active");
      tipValue = parseFloat(btn.innerHTML) / 100;
    }
  });

  tipCustom.value = "";
  calculateTip()
}

function setTipCustomValue() {
  if (!validateInt(tipCustom.value)) {
    tipCustom.value = tipCustom.value.substring(0, tipCustom.value.length - 1);
  }

  tipValue = parseFloat(tipCustom.value / 100);

  tip.forEach((btn) => {
    btn.classList.remove("input__tip--number-active");
  });

  if (tipCustom.value !== "") {
    calculateTip();
  }
}

function setPeopleValue() {
  if (!validateInt(people.value)) {
    people.value = people.value.substring(0, people.value.length - 1);
  }

  if (people.value <= 0) {
    peopleLabelError.classList.add("input__people--error-active");
    people.classList.add("input__error");
  } else {
    peopleLabelError.classList.remove("input__people--error-active");
    people.classList.remove("input__error");
  }
  peopleValue = parseFloat(people.value);

  calculateTip()
}

function calculateTip() {
  if (peopleValue >= 1) {
    let tipAmount = (billValue * tipValue) / peopleValue;
    let total = (billValue * (tipValue + 1)) / peopleValue;
    results[0].innerHTML = tipAmount.toFixed(2);
    results[1].innerHTML = total.toFixed(2);
  }
}

function reset(){
  inputBill.value = '0.0'
  setBillValue()

  tip[2].click()

  people.value = '1'
  setPeopleValue()
}