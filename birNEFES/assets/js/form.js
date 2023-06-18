const form = document.querySelector("form");
const ad = document.querySelector("#ad");
const soyad = document.querySelector("#soyad");
const dogumTarihi = document.querySelector("#dogumTarihi");
const finKodu = document.querySelector("#finKodu");
const sekil = document.querySelector("#sekil");
const hastalik = document.querySelector("#hastalik");
const ekBilgiler = document.querySelector("#ekBilgiler");
const submitbtn = document.querySelector(".submit-btn");


let arr = [];

if (JSON.parse(localStorage.getItem("arr")) !== null) {
    arr = JSON.parse(localStorage.getItem("arr"));
}

submitbtn.addEventListener("click", (e) => {
    let obj = {
        ad: "",
        soyad: "",
        dogumTarihi: "",
        finKodu: "",
        sekil: "",
        hastalik: "",
        ekBilgiler: "",
    }
    obj.ad = ad.value;
    obj.finKodu = finKodu.value;
    obj.soyad = soyad.value;
    obj.dogumTarihi = dogumTarihi.value;
    obj.sekil = sekil.value;
    obj.hastalik = hastalik.value;
    obj.ekBilgiler = ekBilgiler.value;
    arr.push(obj);

    localStorage.setItem("arr", JSON.stringify(arr));
    console.log("arr");
    console.log(JSON.parse(localStorage.getItem("arr")));

    e.preventDefault();
})
// reponsive navbar
const navbar_icon = document.querySelector(".navbar_icon");
const navBar = document.querySelector(".navBar");
const responsive = document.querySelector(".responsive");
navbar_icon.addEventListener("click", function () {
    navBar.classList.toggle("navBar_js")
    responsive.classList.toggle("responsive_show")
})