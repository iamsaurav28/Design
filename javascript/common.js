document.addEventListener("DOMContentLoaded", () => {
  // Load Navbar
fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;
    updateCartBadge(); // ⭐ important
  });


  // Load Footer
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
});


function toggleSidebar() {
  const sidebar = document.getElementById("homeSidebar");
  const overlay = document.getElementById("sidebarOverlay");

  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-260px";
    overlay.style.display = "none";
  } else {
    sidebar.style.left = "0px";
    overlay.style.display = "block";
  }
}


function buyNowWhatsApp(name, price, imageUrl) {
  const phoneNumber = "917972950133";

  // Current product page link
  const productPageLink = window.location.href;

  const message = `🛍️ Rangilo Order Request

Product: ${name}
Price: ${price}

View Full Product:
${productPageLink}`;

  const encodedMessage = encodeURIComponent(message);

  window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
}




function addToCart(name, price, image) {

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingProduct = cart.find(item => item.name === name);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({
      name,
      price: parseInt(price.replace(/[₹,]/g, "")),
      image,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  updateCartBadge();

  location.reload(); // ⭐ refresh to disable button
}






function updateCartBadge() {

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const badge = document.getElementById("cartCountBadge");

  if (!badge) return;

  let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalItems > 0) {
    badge.style.display = "inline-block";
    badge.innerText = totalItems;
  } else {
    badge.style.display = "none";
  }
}
