const navbar_icon = document.querySelector(".navbar_icon");
const navBar = document.querySelector(".navBar");
const responsive = document.querySelector(".responsive");
navbar_icon.addEventListener("click", function () {
  navBar.classList.toggle("navBar_js")
  responsive.classList.toggle("responsive_show")
})
//card
const flipcards = document.querySelector(".flip-cards");
fetch("http://localhost:3000/pepole")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((item, i) => {
      if (i < 3) {
        const card = document.createElement("div");
        card.classList.add("card");
        const name = document.createElement("p");
        const surname = document.createElement("p");
        const img = document.createElement("img");
        img.classList.add("imgs")
        const title = document.createElement("p");
        const flipcardfront = document.createElement("div");
        flipcardfront.classList.add("flip-card-front")
        const flipcardback = document.createElement("div");
        flipcardback.classList.add("flip-card-back")

        img.src = item.img;
        name.innerText = "Name: " + item.name;
        surname.innerText = "Surname: " + item.surname;
        title.innerText = "Xestelik: " + item.title;

         flipcardfront.append(img);
        flipcardback.append(name, surname, title);
        card.append(flipcardfront, flipcardback);
        flipcards.append(card);
      }
    });
  })

