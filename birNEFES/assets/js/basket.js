const basket_container = document.getElementById("basket_container");
const h2 = document.querySelector("h2");
let basket_arr = [];

basket_arr = JSON.parse(localStorage.getItem("basket"));
getTotal();
basket_arr.forEach((element) => {
  const div = document.createElement("div");
  div.classList.add('card_basket');
  const name = document.createElement("h3");
  const surname = document.createElement("h3");
  const title = document.createElement("p");
  const p = document.createElement("p");
  const del = document.createElement("button");
  const dec = document.createElement("button");
  const inc = document.createElement("button");
  const btn = document.createElement("a");
  btn.classList.add('btn_basket');
  btn.innerHTML = "Ödəniş et";
  btn.href = "payment.html";
  btn.target = "_blank";

  name.innerHTML = element.name;
  surname.innerHTML = element.surname;
  title.innerHTML = element.title;
  del.innerHTML = "Sil";
  inc.innerHTML = "+";
  p.innerHTML = element.count;
  dec.innerHTML = "-";


  //artma
  inc.onclick = () => {
    p.innerHTML++;

    basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count++;
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();
  };
  //azalma
  dec.onclick = () => {
    if (p.innerHTML === "1") {
      return;
    }
    p.innerHTML--;

    basket_arr[basket_arr.findIndex((x) => element.id === x.id)].count--;
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();
  };

  //delete
  del.onclick = () => {
    basket_arr = basket_arr.filter((x) => x.id !== element.id);
    localStorage.setItem("basket", JSON.stringify(basket_arr));
    getTotal();

    del.parentElement.remove();
  };


  div.append(name, surname, title,btn,del, inc, p,dec,);
  basket_container.append(div);
});

function getTotal() {
  h2.innerHTML = basket_arr.reduce(
    (sum, prev) => sum + prev.unitPrice * prev.count,
    0
  );
}