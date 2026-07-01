// K-HALAL Main JavaScript

// Header Shadow
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.1)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Smooth Fade Animation
const cards = document.querySelectorAll(".card, .service-card");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";
        }
    });
});

cards.forEach(card=>{
    card.style.opacity="0";
    card.style.transform="translateY(50px)";
    card.style.transition="1s";
    observer.observe(card);
});
