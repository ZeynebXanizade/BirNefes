
//update

const update = document.querySelector(".update");
update.addEventListener("click", function () {
    fetch("http://localhost:3000/pepole/", {

        method: "PUT",
        body: JSON.stringify({
            name: "Nuray",
            surname: "Elizade",
            img: "https://www.shutterstock.com/image-photo/sick-senior-woman-suffer-sore-260nw-1539298682.jpg",
            unitPrice: 400000,
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
    fetch("http://localhost:3000/pepole/9", {

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

