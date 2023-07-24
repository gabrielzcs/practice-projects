const mainContainer = document.querySelector(".main-container");
const successContainer = document.querySelector(".success-container");

let email = document.querySelector(".email");
const btn = document.querySelector(".btn");

const emailError = document.querySelector(".email-error");

const emailText = document.querySelector(".confirmation");
const dismissBtn = document.querySelector(".dismiss");

let emailValidation = false;

email.addEventListener("keyup", () => {
  validateEmail();
});

btn.addEventListener("click", () => {
  if (emailValidation == true) {
    mainContainer.classList.add("container-active");
    successContainer.classList.add("active");
    emailText.innerHTML = `A confirmation email has been sent to
                          <span>${email.value}</span>. Please open it and click the
                          button inside to confirm your subscription.`;
  }
});

dismissBtn.addEventListener("click", () => {
  mainContainer.classList.remove("container-active");
  successContainer.classList.remove("active");
  email.value = "";
});

function validateEmail() {
  if (!email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.textContent = "Valid email required";
    email.style.border = "1px solid var(--Tomato)";
    email.style.backgroundColor = "hsla(4, 100%, 67%, 0.167)";
    emailValidation = false;
  } else {
    emailError.textContent = "";
    email.style.border = "";
    email.style.backgroundColor = "";
    emailValidation = true;
  }

  if (email.value == "") {
    emailError.textContent = "";
    email.style.border = "";
    email.style.backgroundColor = "";
    emailValidation = false;
  }
}
