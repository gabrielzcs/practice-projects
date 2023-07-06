const openBtn = document.querySelector(".btn")
const closeBtn = document.querySelector(".close-btn")
const overlay = document.querySelector(".modal-overlay")

openBtn.addEventListener("click", ()=>{
  overlay.classList.toggle("open-modal")
})

closeBtn.addEventListener("click", ()=>{
  overlay.classList.toggle("open-modal")
})