let Korzina = JSON.parse(localStorage.getItem("cart")) || {};
// // const poductsContainer = document.querySelector("product");
// // for (const key in Korzina) {
// //     const product = Korzina[key];
    

    
//   }
  
let itemCount = 0;
  for (const key in cart) {
    itemCount += cart[key].quantity;
  }
  let container = document.querySelector(".products");

  for (const key in cart) {
    const product = cart[key];
    const productDiv = document.createElement("div");
    productDiv.classList.add("productDiv");
    container.append(productDiv);

    const productImage = document.createElement("img");
    productImage.src = `${product.id}.png`;
    productDiv.append(productImage);

    const productName = document.createElement("p");
    productName.textContent = product.name;
    productDiv.append(productName);

    const productPraice = document.createElement("p");
    productPraice.textContent = product.praice;
    productDiv.append(productPraice);

    const productItem = document.createElement('p');
    productItem.textContent = product.amount;
    productDiv.append(productItem);



    // создать и добавить элементы для одного товара
  }


updateCartCount();