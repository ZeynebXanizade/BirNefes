const navbar_icon = document.querySelector(".navbar_icon");
const navBar = document.querySelector(".navBar");
const responsive = document.querySelector(".responsive");
navbar_icon.addEventListener("click", function () {
  navBar.classList.toggle("navBar_js")
  responsive.classList.toggle("responsive_show")
})
//card
var cardContainer = document.getElementById('cardContainer');
fetch("http://localhost:3000/pepole")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((data, i) => {
      if (i < 3) {
        var card = document.createElement('div');
        card.classList.add('card');
        var card = createCard(data);

        var cardImage = document.createElement('div');
        cardImage.classList.add('card-image');
        var img = document.createElement('img');
        img.src = data.img;
        img.alt = data.title;
        cardImage.appendChild(img);
        card.appendChild(cardImage);

        var cardContent = document.createElement('div');
        cardContent.classList.add('card-content');
        var title = document.createElement('h3');
        title.textContent = data.title;
        var info1 = document.createElement('p');
        info1.classList.add('info');
        info1.textContent = data.name;
        var info2 = document.createElement('p');
        info2.classList.add('info');
        info2.textContent = data.surname;
        const btn = document.createElement("a");
        btn.classList.add('btn_cards');
        btn.innerHTML = "Ətraflı";
        btn.href = "people_about.html";
        btn.target = "_blank";
        cardContent.appendChild(title);
        cardContent.appendChild(info1);
        cardContent.appendChild(info2);
        cardContent.appendChild(btn);
        card.appendChild(cardContent);
        cardContainer.appendChild(card);
        return card;
      }
    });
  })

function createCard(data) {
  var card = document.createElement('div');
  card.classList.add('card');
  return card;
}

