const navbar_icon = document.querySelector(".navbar_icon");
const navBar = document.querySelector(".navBar");
const responsive = document.querySelector(".responsive");
navbar_icon.addEventListener("click", function () {
  navBar.classList.toggle("navBar_js")
  responsive.classList.toggle("responsive_show")
})

//carusel cards
const total = document.querySelector(".total");
const carousel = document.querySelector(".carousel");

let basket_arr = [];
let wishlist_arr = [];
fetch("http://localhost:3000/pepole")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      createCard(element);
    });
  });
// eger data varsa localstorage
window.onload = function () {
  if (localStorage.getItem("basket") !== null) {
    basket_arr = JSON.parse(localStorage.getItem("basket"));
  }
  if (localStorage.getItem("wishlist") !== null) {
    wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));
  }
};

function createCard(data) {
  const div = document.createElement("div");
  const name = document.createElement("h3");
  const surname = document.createElement("h3");
  const title = document.createElement("p");
  const img = document.createElement("img");
  const p = document.createElement("p");
  const basket_btn = document.createElement("button");
  const wishlist_btn = document.createElement("button");

  div.classList.add("card_child");

  name.innerText = data.name;
  surname.innerText = data.surname;
  title.innerText = data.title;
  img.src = data.img;
  p.innerText = data.unitPrice;

  basket_btn.innerHTML = `<i class="fa-solid fa-hand-holding-heart"></i>`;
  wishlist_btn.innerHTML = `<i class="fa-solid fa-heart-circle-plus"></i>`;

  if (wishlist_arr.find((x) => x.id == data.id) !== undefined) {
    wishlist_btn.style.backgroundColor = "#234b55";
  }
  // basket
  basket_btn.onclick = function () {
    //eger bu idli elemnent yoxdursa push et
    if (basket_arr.find((x) => x.id == data.id) === undefined) {
      basket_arr.push({ ...data, count: 1 });
      basket_btn.style.backgroundColor = "#234b55";
       } else {
      basket_arr = basket_arr.filter((x) => x.id !== data.id);
      basket_btn.style.backgroundColor = "white";
    }
    localStorage.setItem("basket", JSON.stringify(basket_arr));
  };

  // wishlist

  wishlist_btn.onclick = () => {
    if (wishlist_arr.find((x) => x.id == data.id) === undefined) {
      wishlist_arr.push(data);
      wishlist_btn.style.backgroundColor = "#234b55";
    } else {
      wishlist_arr = wishlist_arr.filter((x) => x.id !== data.id);
      wishlist_btn.style.backgroundColor = "white";
    }
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
  };
  div.append(img,name,surname,title, p, basket_btn, wishlist_btn);
  carousel.appendChild(div);
}

//
