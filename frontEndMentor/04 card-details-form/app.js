const cardName = document.querySelector(".card-name");
const nameInp = document.getElementById("name-input");

const cardNumber = document.querySelector(".card-number");
const numberInp = document.getElementById("number-input");

const cardMonth = document.querySelector(".card-month");
const monthInp = document.getElementById("month");

const cardYear = document.querySelector(".card-year");
const yearInp = document.getElementById("year");

const cardCvc = document.querySelector(".card-cvc");
const cvcInp = document.getElementById("cvc");

const nameError = document.querySelector(".name-error");
const numberError = document.querySelector(".number-error");

const info = document.querySelector(".info");
const successMsg = document.querySelector(".success-msg");

const submitBtn = document.querySelector(".btn");
const continueBtn = document.querySelector(".continue");

let validator = false;

numberInp.addEventListener("input", (e) => {
  e.preventDefault();

  let formatText = e.target.value;
  formatText = formatText.substring(0, 19);
  formatText = formatText
    .replace(/\s/g, "")
    .replace(new RegExp(`(.{${4}})`, "g"), "$1 ")
    .trim();

  e.target.value = formatText;
  numberInp = e.target.value;
});

function setCardNumber(e) {
  cardNumber.textContent = e.target.value;

  if (!numberInp.value) {
    numberError.textContent = `Can't be blank`;
    numberError.classList.add("error-show");
    validator = false;
  } else if (!/^\d+(\s\d+)*$/.test(numberInp.value)) {
    numberError.textContent = `Wrong format, numbers only`;
    numberError.classList.add("error-show");
    validator = false;
  } else {
    numberError.classList.remove("error-show");
    validator = true;
  }
}

function setCardName(e) {
  cardName.textContent = e.target.value;

  if (nameInp.value === "") {
    nameError.classList.add("error-show");
    validator = false;
  } else {
    nameError.classList.remove("error-show");
    validator = true;
  }
}

function setCardMonth(e) {
  cardMonth.textContent = e.target.value;
}

function setCardYear(e) {
  cardYear.textContent = e.target.value;
}

function setCardCvc(e) {
  cardCvc.textContent = e.target.value;
}

numberInp.addEventListener("keyup", setCardNumber);
nameInp.addEventListener("keyup", setCardName);
monthInp.addEventListener("keyup", setCardMonth);
yearInp.addEventListener("keyup", setCardYear);
cvcInp.addEventListener("keyup", setCardCvc);
submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  if (validator === false) {
  } else {
    info.classList.add("info-active");
    successMsg.classList.add("success-msg-active");
  }
});

continueBtn.addEventListener("click", () => {
  successMsg.classList.remove("success-msg-active");
  info.classList.remove("info-active");

  cardNumber.innerHTML = "0000 0000 0000 0000";
  cardName.innerHTML = "jane appleseed";
  cardMonth.innerHTML = "00"
  cardYear.innerHTML = "00"
  cardCvc.innerHTML = "000"
  numberInp.value = "";
  nameInp.value = ""
  monthInp.value = ""
  yearInp.value = ""
  cvcInp.value = ""
});
