const navbar_icon=document.querySelector(".navbar_icon");
const navBar=document.querySelector(".navBar");
const responsive=document.querySelector(".responsive");
navbar_icon.addEventListener("click",function () {
    navBar.classList.toggle("navBar_js")
    responsive.classList.toggle("responsive_show")
})