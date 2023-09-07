let menuIcon = document.querySelector("header nav i");
let menu = document.querySelector("header nav ul");


let body = document.querySelector("body");
let nightMoodSwitch = document.querySelector(".switch");

let navBar = document.querySelector("header");
let logo = document.querySelector("header nav .logo a");
let navOptions = document.querySelectorAll("header nav ul li .op");

let landImg = document.querySelector(".landing > div");

let aboutOptions = document.querySelectorAll(".about .row .box");

let optionsBox = document.querySelectorAll(".services .container .options .box");

let inputs = document.querySelectorAll(".contact .container form input:not(input[type = submit])");
let textArea = document.querySelector(".contact .container form textarea");

console.log(textArea)
menuIcon.onclick = () => {
    menu.classList.toggle("ul-mob");
}

nightMoodSwitch.onclick = () => {
    body.classList.toggle("dark");
    menu.classList.toggle("dark-ul");
    aboutOptions[0].classList.toggle("dark-hover");
    aboutOptions[1].classList.toggle("dark-hover");
    landImg.classList.toggle("image");
    navBar.classList.toggle("dark-header");
    logo.classList.toggle("dark-logo")

    for (let i = 0; i<inputs.length; i++) {
        inputs[i].classList.toggle("dark-inputs");
    }
    for (let i = 0; i<navOptions.length; i++) {
        navOptions[i].classList.toggle("dark-logo");
    }
    for (let i = 0; i<optionsBox.length; i++) {
        optionsBox[i].classList.toggle("dark-box");
    }
    textArea.classList.toggle("dark-inputs");
}
