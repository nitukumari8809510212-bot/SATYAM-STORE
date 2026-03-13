const products = [
  {id:1, name:"T Shirt", price:500},
  {id:2, name:"Shoes", price:1200}
];

const container = document.getElementById("products");

products.forEach(p => {

  const div = document.createElement("div");

  div.innerHTML = `
  <h3>${p.name}</h3>
  <p>₹${p.price}</p>
  <button onclick="addToCart(${p.id})">Add to Cart</button>
  `;

  container.appendChild(div);

});

function addToCart(id){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(id);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}