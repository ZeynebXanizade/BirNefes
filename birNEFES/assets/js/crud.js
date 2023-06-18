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
                const btn = document.createElement("h4");
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


//update

const update = document.querySelector(".update");
update.addEventListener("click", function () {
    fetch("http://localhost:3000/pepole", {

        method: "PUT",
        body: JSON.stringify({
            name: "nuray",
            surname: "elizade",
            img: "team.jpc",
            title: "Göz xesteliyi"
        }),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },

    })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
        })

})

//delete
const del = document.querySelector(".delete");
del.addEventListener("click", function () {
    fetch("http://localhost:3000/pepole/4", {

        method: "DELETE"
    })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
        })

})

//post
const create = document.querySelector(".create");
create.addEventListener("click", function () {
    const name = document.querySelector(".name").value;
    const surname = document.querySelector(".surname").value;
    const title = document.querySelector(".title").value;
    const img = document.querySelector(".img").value;

    let obj = {
        name: name,
        surname: surname,
        img: img,
        title: title
    }
    fetch("http://localhost:3000/pepole", {

        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj),
    })
        .then((res) => res.json())
        .then(data => {
            console.log(data);
        })

})

