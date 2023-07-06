let count = 0;

const value = document.querySelector("#value");
const decreaseBtn = document.querySelector(".decrease");
const resetBtn = document.querySelector(".reset");
const increaseBtn = document.querySelector(".increase");

decreaseBtn.addEventListener("click", () => {
  count--;
  value.textContent = count;
  if (count < 0) {
    value.style.color = "red";
  } else if (count == 0) {
    value.style.color = "black";
  }
});

resetBtn.addEventListener("click", () => {
  count = 0;
  value.textContent = count;
  if (count == 0) {
    value.style.color = "black";
  }
});

increaseBtn.addEventListener("click", () => {
  count++;
  value.textContent = count;
  if (count > 0) {
    value.style.color = "green";
  } else if (count == 0) {
    value.style.color = "black";
  }
});
