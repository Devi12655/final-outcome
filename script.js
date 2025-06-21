
document.addEventListener("DOMContentLoaded", () => {
  const products = [
    { id: 1, name: "Smart Watch", price: 3499, image: "https://via.placeholder.com/200?text=Smart+Watch" },
    { id: 2, name: "Gaming Mouse", price: 1099, image: "https://via.placeholder.com/200?text=Gaming+Mouse" },
    { id: 3, name: "Earbuds", price: 2999, image: "https://via.placeholder.com/200?text=Earbuds" },
    { id: 4, name: "Laptop Bag", price: 999, image: "https://via.placeholder.com/200?text=Laptop+Bag" },
    { id: 5, name: "LED Monitor", price: 7499, image: "https://via.placeholder.com/200?text=Monitor" }
  ];

  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Load products dynamically
  const productList = document.getElementById("product-list");
  if (productList) {
    productList.innerHTML = "";
    products.forEach(p => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${p.image}" alt="${p.name}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      `;
      productList.appendChild(card);
    });
  }

  // Load cart items dynamically
  const cartItems = document.getElementById("cart-items");
  if (cartItems) {
    updateCartUI(cart, cartItems, products);
  }
});

function addToCart(productId) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.push(productId);
  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Product added to cart!");
}

function updateCartUI(cart, cartItems, products) {
  cartItems.innerHTML = "";
  if (cart.length === 0) {
    cartItems.innerHTML = "<li>Your cart is empty</li>";
    return;
  }
  cart.forEach(id => {
    const product = products.find(p => p.id === id);
    if (product) {
      const li = document.createElement("li");
      li.textContent = `${product.name} - ₹${product.price}`;
      cartItems.appendChild(li);
    }
  });
}
