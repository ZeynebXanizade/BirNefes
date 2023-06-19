const wishlist_container = document.getElementById("wishlist_container");
let wishlist_arr = [];
wishlist_arr = JSON.parse(localStorage.getItem("wishlist"));

wishlist_arr.forEach((element) => {
  const div = document.createElement("div");
  const name = document.createElement("h1");
  const surname = document.createElement("h1");
  const title = document.createElement("p");
  const btn = document.createElement("button");

  div.classList.add('card_wishlist');


  name.innerHTML = element.name;
  surname.innerHTML = element.surname;
  title.innerHTML = element.title;
  btn.innerHTML = "remove";

  btn.onclick = () => {
    console.log(element.id);
    wishlist_arr = wishlist_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("wishlist", JSON.stringify(wishlist_arr));
    btn.parentElement.remove();
  };

  div.append(name, surname, title, btn);
  wishlist_container.append(div);
});