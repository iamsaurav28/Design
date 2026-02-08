document.addEventListener("DOMContentLoaded", () => {

  
  // ✅ AUTO REFRESH CHECK
  if (localStorage.getItem("cartUpdated")) {
    localStorage.removeItem("cartUpdated");
    location.reload();
    return;
  }


  // TRENDING PRODUCTS
  const trendingProducts = [
    { name: "Shirt", price: "₹12,499", image: "./saree/saree1.jpg", rating: "★★★★☆" },
    { name: "Saree", price: "₹8,499", image: "./saree/saree2.jpg", rating: "★★★★★" },
    { name: "Pants", price: "₹9,899", image: "./saree/saree3.jpg", rating: "★★★★☆" },
    { name: "Boxers", price: "₹11,799", image: "./saree/saree4.jpg", rating: "★★★☆☆" }
  ];

  // LATEST DESIGNS
  const latestProducts = [
    { name: "Red Latkan Blouse", price: "₹2,999", image: "/blouse/blouse1.jpg", rating: "★★★★☆" },
    { name: "Cream Latkan Blouse", price: "₹3,499", image: "/blouse/blouse2.jpg", rating: "★★★★☆" },
    { name: "Casual Shoes", price: "₹2,999", image: "/blouse/blouse3.jpg", rating: "★★★★☆" },
    { name: "Amazing Shirt", price: "₹2,199", image: "/blouse/blouse4.jpg", rating: "★★★★☆" }
  ];

  // GRID ELEMENTS
  const trendingGrid = document.getElementById("trendingProductsGrid");
  const latestGrid = document.getElementById("latestProductsGrid");

function isProductInCart(name) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  return cart.some(item => item.name === name);
}

function generateProductCard(product) {

  const disabled = isProductInCart(product.name);

  return `
    <div class="home-product-card">

      <img src="${product.image}" class="home-product-image" />

      <h3>${product.name}</h3>
      <div>${product.rating}</div>
      <div>${product.price}</div>

      <div class="home-product-buttons">
        <button class="home-btn buy-now"
        onclick="buyNowWhatsApp('${product.name}','${product.price}','${product.image}')">
        Buy Now
        </button>

        <button class="home-btn add-cart"
        onclick="addToCart('${product.name}','${product.price}','${product.image}')"
        ${disabled ? "disabled" : ""}>
        ${disabled ? "Added ✓" : "Add to Cart"}
        </button>

      </div>
    </div>
  `;
}



  // RENDER PRODUCTS
  trendingGrid.innerHTML = trendingProducts.map(generateProductCard).join("");
  latestGrid.innerHTML = latestProducts.map(generateProductCard).join("");
});
