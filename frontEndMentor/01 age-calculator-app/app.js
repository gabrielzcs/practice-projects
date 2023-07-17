const dayInput = document.querySelector(".day");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year");

const dayOutput = document.querySelector(".result-day");
const monthOutput = document.querySelector(".result-month");
const yearOutput = document.querySelector(".result-year");

const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

const btn = document.querySelector(".svg");

const currentDate = new Date();

const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();

btn.addEventListener("submit", () => {});

dayInput.addEventListener("input", () => {
  validateDay();
  console.log("cade");
});

function getAge() {}

function validateYear() {
  if (yearInput == "") {
    errorYear.textContent = "this field is required";
  } else if (yearInput > currentYear) {
    errorYear.textContent = "must be in the past";
  }
}

function validateMonth() {
  if (monthInput == "") {
    errorMonth.textContent = "this field is required";
  } else if (monthInput > 12) {
    errorMonth.textContent = "must be a valid month";
  }
}

function validateDay() {
  let daysOfMonth = new Date(yearInput, monthInput + 1, 0).getDate();
  if (dayInput == "") {
    errorDay.textContent = "this field is required";
  } else if (dayInput > daysOfMonth) {
    errorDay.textContent = "must be a valid day";
  } else {
    errorDay.textContent = "";
  }
}
