function showLogin(){
document.getElementById("loginForm").classList.remove("hidden");
document.getElementById("registerForm").classList.add("hidden");
}

function showRegister(){
document.getElementById("loginForm").classList.add("hidden");
document.getElementById("registerForm").classList.remove("hidden");
}