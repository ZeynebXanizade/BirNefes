//local storage
//form start
const form = document.querySelector(".form");
const email = document.querySelector(".email");
const names = document.querySelector(".names");
const message = document.querySelector(".message");
const message_btn = document.querySelector(".message_btn");



let arr = [];

if (JSON.parse(localStorage.getItem("arr")) !== null) {
    arr = JSON.parse(localStorage.getItem("arr"));
}

message_btn.addEventListener("click", (e) => {
    let obj = {
        email: "",
        names: "",
        message: "",
    }
    obj.email = email.value;
    obj.names = names.value;
    obj.message = message.value;
    arr.push(obj);

    localStorage.setItem("arr", JSON.stringify(arr));
    console.log("arr");
    console.log(JSON.parse(localStorage.getItem("arr")));

    e.preventDefault();
})

//form end
// reponsive navbar
const navbar_icon = document.querySelector(".navbar_icon");
const navBar = document.querySelector(".navBar");
const responsive = document.querySelector(".responsive");
navbar_icon.addEventListener("click", function () {
    navBar.classList.toggle("navBar_js")
    responsive.classList.toggle("responsive_show")
})