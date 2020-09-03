const hamburgerButtonElement = document.querySelector(".hamburger");
const drawerElement = document.querySelector("#drawer");
const overlay = document.querySelector("#overlay");
const close = document.querySelector("#close");
const body = document.querySelector("body");


// Show Drawer Menu
hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    overlay.classList.toggle("show");
    body.classList.toggle("of-hidden");
    event.stopPropagation();
});

// Hide Drawer Menu
overlay.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    overlay.classList.remove("show");
    body.classList.remove("of-hidden");
    event.stopPropagation();
})
close.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    overlay.classList.remove("show");
    body.classList.remove("of-hidden");
    event.stopPropagation();
})