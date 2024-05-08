const navIcon = document.querySelector(".nav-icon1");
const xIcon = document.querySelector(".nav-icon2");
const mobileNav = document.querySelector(".mobile-nav");

navIcon.addEventListener("click", ()=> {
    mobileNav.classList.remove("active");
    navIcon.classList.add("active");
    xIcon.classList.remove("active");
});

xIcon.addEventListener("click", ()=> {
    mobileNav.classList.add("active");
    navIcon.classList.remove("active");
    xIcon.classList.add("active");
});