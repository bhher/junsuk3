const nav = document.querySelector(".site-nav");


function updateNav(){
    if(!nav) return;
    nav.classList.toggle("is-scrolled", window.scrollY > 40);
    //  nav.classList.toggle("is-scrolled",조건)
}

updateNav();

window.addEventListener("scroll",updateNav);