// navBar for small devices related codes
let hamburger_image = document.querySelector(".hamburger_image");
console.log(hamburger_image);
let navBar = document.querySelector(".smain__container .navBar");
let navBar_close = document.querySelector(".smain__container .navBar .close .fa-solid");
hamburger_image.addEventListener("click", () => {
    console.log("CCCCC");
    navBar.style.display = "flex";
    navBar.style.right = '2%'
})
navBar_closes.addEventListener("click", () => {
    navBar.style.display = "none";
    navBar.style.right = '-12.5%'
})