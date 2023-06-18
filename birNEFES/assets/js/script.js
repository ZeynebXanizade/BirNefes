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
      if (i < 4) {
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
        var info1 = document.createElement('h4');
        info1.classList.add('info');
        info1.textContent = data.name;
        var info2 = document.createElement('h4');
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

//wishlist
const wishlistIcons = document.querySelectorAll('.wishlist');
wishlistIcons.forEach(icon => {
  icon.addEventListener('click', () => {
    const card = icon.parentNode; // Tıklanan ikonun üst öğesini (kartı) al
    const cardInfo = {
      image: card.querySelector('img').src,
      button: card.querySelector('button').innerText,
      paragraph: card.querySelector('p').innerText
    };
    localStorage.setItem('selectedCard', JSON.stringify(cardInfo)); // Seçilen kartın bilgilerini yerel depolamaya kaydet
    window.location.href = 'favorites.html'; // Yeni sayfaya yönlendir
  });
});
//favo
function addToWishlist(cardId) {
  const selectedCard = {
    image: document.querySelector(`.card:nth-child(${cardId}) img`).src,
    button: document.querySelector(`.card:nth-child(${cardId}) button`).innerText,
    paragraph: document.querySelector(`.card:nth-child(${cardId}) p`).innerText
  };

  const urlParams = new URLSearchParams();
  urlParams.set('image', selectedCard.image);
  urlParams.set('button', selectedCard.button);
  urlParams.set('paragraph', selectedCard.paragraph);

  const url = `favorites.html?${urlParams.toString()}`;
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const image = urlParams.get('image');
  const button = urlParams.get('button');
  const paragraph = urlParams.get('paragraph');

  if (image && button && paragraph) {
    const cardInfoHTML = `
      <div class="card">
        <img src="${image}" alt="Fotoğraf">
        <button>${button}</button>
        <p>${paragraph}</p>
      </div>
    `;
    const wishlistInfoElement = document.getElementById('wishlist-info');
    wishlistInfoElement.innerHTML = cardInfoHTML;
  }
});

//carusel
document.addEventListener("DOMContentLoaded", function() {
  const carousel = document.querySelector(".carousel");
  const cards = carousel.querySelectorAll(".card");
  const prevBtn = carousel.querySelector(".prev");
  const nextBtn = carousel.querySelector(".next");
  let currentIndex = 0;

  showCard(currentIndex);

  prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex === 0) ? cards.length - 1 : currentIndex - 1;
    showCard(currentIndex);
  });

  nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex === cards.length - 1) ? 0 : currentIndex + 1;
    showCard(currentIndex);
  });

  function showCard(index) {
    cards.forEach(function(card) {
      card.classList.remove("active");
    });

    cards[index].classList.add("active");
  }
});

