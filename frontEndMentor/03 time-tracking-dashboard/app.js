const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
const monthly = document.querySelector(".monthly");

const workHours = document.querySelector(".work-hours");
const workLastHours = document.querySelector(".work-last-hours");
const playHours = document.querySelector(".play-hours");
const playLastHours = document.querySelector(".play-last-hours");
const studyHours = document.querySelector(".study-hours");
const studyLastHours = document.querySelector(".study-last-hours");
const exerciseHours = document.querySelector(".exercise-hours");
const exerciseLastHours = document.querySelector(".exercise-last-hours");
const socialHours = document.querySelector(".social-hours");
const socialLastHours = document.querySelector(".social-last-hours");
const selfCareHours = document.querySelector(".self-care-hours");
const selfCareLastHours = document.querySelector(".self-care-last-hours");

daily.addEventListener("click", () => {
  workHours.textContent = `5hrs`;
  workLastHours.textContent = `Previous - 7hrs`;
  playHours.textContent = `1hr`;
  playLastHours.textContent = `Previous - 2hrs`;
  studyHours.textContent = `0hrs`;
  studyLastHours.textContent = `Previous - 1hr`;
  exerciseHours.textContent = `1hr`;
  exerciseLastHours.textContent = `Previous - 1hr`;
  socialHours.textContent = `1hr`;
  socialLastHours.textContent = `Previous - 3hrs`;
  selfCareHours.textContent = `0hrs`;
  selfCareLastHours.textContent = `Previous - 1hr`;
});
weekly.addEventListener("click", () => {
  workHours.textContent = `32hrs`;
  workLastHours.textContent = `Previous - 36hrs`;
  playHours.textContent = `10hrs`;
  playLastHours.textContent = `Previous - 8hrs`;
  studyHours.textContent = `4hrs`;
  studyLastHours.textContent = `Previous - 7hrs`;
  exerciseHours.textContent = `4hrs`;
  exerciseLastHours.textContent = `Previous - 5hrs`;
  socialHours.textContent = `5hrs`;
  socialLastHours.textContent = `Previous - 10hrs`;
  selfCareHours.textContent = `2hrs`;
  selfCareLastHours.textContent = `Previous - 2hrs`;
});
monthly.addEventListener("click", () => {
  workHours.textContent = `103hrs`;
  workLastHours.textContent = `Previous - 128hrs`;
  playHours.textContent = `23hrs`;
  playLastHours.textContent = `Previous - 29hrs`;
  studyHours.textContent = `13hrs`;
  studyLastHours.textContent = `Previous - 19hrs`;
  exerciseHours.textContent = `11hrs`;
  exerciseLastHours.textContent = `Previous - 18hrs`;
  socialHours.textContent = `21hrs`;
  socialLastHours.textContent = `Previous - 23hrs`;
  selfCareHours.textContent = `7hrs`;
  selfCareLastHours.textContent = `Previous - 11hrs`;
});
