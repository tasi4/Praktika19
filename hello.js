let productJSON = `[
{
"name": "Коала",
"id": "koala",
"price":"500 рублей"
},
{
"name": "Лемур",
"id": "lemur",
"price":"750 рублей"
},
{
"name": "Единорог",
"id": "unicorn",
"price":"800 рублей"
}]`;

let product = JSON.parse(productJSON);
console.log(productJSON);
let productsDiv = document.querySelector(".products");
updateCartCount();
for (let prod of product) {
  let div2 = document.createElement("div");
  div2.className = "stil";

  let button = document.createElement("img");
  button.src = "3916598.svg";
  button.addEventListener("click", () => {
    addToCart(prod);
  });
  button.classList.add("btn");

  let pRice = document.createElement("p");
  let nAme = document.createElement("p");
  let img = document.createElement("img");
  img.src = `${prod.id}.png`;
  nAme.textContent = prod.name;
  pRice.textContent = prod.price;

  div2.append(img);
  div2.append(nAme);
  div2.append(pRice);
  div2.append(button);
  productsDiv.append(div2);
}

function addToCart(product) {
let cart = JSON.parse(localStorage.getItem("cart")) || {};
if (cart[product.id]){
    cart[product.id].amount += 1;
} else {
    cart[product.id] = {...product, amount: 1};
}
localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
} 

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || {};
    let itemCount = 0;
    for (const key in cart) {
        if (cart.hasOwnProperty(key)){
            itemCount += cart[key].amount;
        }
    }
    document.querySelector("li span").textContent = itemCount;
}