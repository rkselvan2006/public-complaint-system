const loginTab = document.getElementById("loginTab")
const registerTab = document.getElementById("registerTab")

const loginForm = document.getElementById("loginForm")
const registerForm = document.getElementById("registerForm")

loginTab.addEventListener("click",()=>{

loginForm.style.display="flex"
registerForm.style.display="none"

loginTab.classList.add("active")
registerTab.classList.remove("active")

})

registerTab.addEventListener("click",()=>{

loginForm.style.display="none"
registerForm.style.display="flex"

registerTab.classList.add("active")
loginTab.classList.remove("active")

})