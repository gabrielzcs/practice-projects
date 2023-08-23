const toggleTheme = document.querySelector(".fa-solid");
const flip = document.getElementsByTagName("i");
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
  localStorage.setItem("darkMode", null);
  document.body.classList.add("dark-mode");
  toggleTheme.classList.add("flip");
};

const disableDarkMode = () => {
  localStorage.setItem("darkMode", "enabled");
  document.body.classList.remove("dark-mode");
  toggleTheme.classList.remove("flip");
};

if (darkMode === "enabled") {
  enableDarkMode();
}

toggleTheme.addEventListener("click", () => {
  darkMode = localStorage.getItem("darkMode");

  if (darkMode === "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});
