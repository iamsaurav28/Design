function loadCart() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const container = document.getElementById("cartContainer");

  let total = 0;

  container.innerHTML = cart.map((item, index) => {

    total += item.price * item.quantity;
return `
  <div class="cart-item">
    <img src="${item.image}" class="cart-image" />

    <div class="cart-details">
      <h3>${item.name}</h3>
      <p>₹${item.price}</p>

      <select onchange="updateQuantity(${index}, this.value)">
        ${[1,2,3,4,5].map(num =>
          `<option value="${num}" ${num == item.quantity ? "selected" : ""}>${num}</option>`
        ).join("")}
      </select>

      <button class="remove-btn" onclick="removeFromCart(${index})">
        Remove
      </button>
    </div>

    <div class="cart-subtotal">
      ₹${item.price * item.quantity}
    </div>

  </div>
`;

  }).join("");

  document.getElementById("cartTotal").innerText = "Total: ₹" + total;
}

function updateQuantity(index, quantity) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  cart[index].quantity = parseInt(quantity);

  localStorage.setItem("cart", JSON.stringify(cart));

  loadCart();
}

loadCart();







function removeFromCart(index) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1); // remove product

  localStorage.setItem("cart", JSON.stringify(cart));
  localStorage.setItem("cartUpdated", "true");
  loadCart();

  if (typeof updateCartBadge === "function") {
    updateCartBadge();
  }
}
