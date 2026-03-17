document.getElementById("loginForm").addEventListener("submit", function(e){
e.preventDefault();
window.location.href = "dashboard.html";
});
// ===== PAGE LOAD ANIMATION =====

window.addEventListener("load", () => {
    document.body.style.opacity = "1";
});

// ===== SIDEBAR ACTIVE CLICK =====

const menuItems = document.querySelectorAll(".sidebar ul li");

menuItems.forEach(item => {
    item.addEventListener("click", () => {
        menuItems.forEach(i => i.classList.remove("active"));
        item.classList.add("active");
    });
});

// ===== CARD CLICK ANIMATION =====

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        card.style.transform = "scale(1.1)";
        setTimeout(() => {
            card.style.transform = "scale(1)";
        }, 200);
    });
});

// ===== FAKE LIVE DATA UPDATE =====

const numbers = document.querySelectorAll(".card p");

setInterval(() => {
    numbers.forEach(num => {
        let value = parseInt(num.innerText);
        let random = Math.floor(Math.random() * 2);

        if (Math.random() > 0.5) {
            num.innerText = value + random;
        }
    });
}, 4000);

// ===== COMPLAINT HOVER SOUND EFFECT =====

const complaints = document.querySelectorAll(".complaint");

complaints.forEach(c => {
    c.addEventListener("mouseenter", () => {
        c.style.background = "rgba(255,255,255,0.3)";
    });

    c.addEventListener("mouseleave", () => {
        c.style.background = "rgba(255,255,255,0.1)";
    });
});

// ===== LOGOUT FUNCTION =====

function logout(){
    alert("Logged out successfully!");
    window.location.href = "index.html";
}