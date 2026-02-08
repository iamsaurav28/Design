// GET URL PARAMETERS
const params = new URLSearchParams(window.location.search);

const name = params.get("name");
const price = params.get("price");
const image = params.get("image");
const rating = params.get("rating");

// DISPLAY DATA
document.getElementById("productName").textContent = name;
document.getElementById("productPrice").textContent = price;
document.getElementById("productRating").textContent = rating;
document.getElementById("productImage").src = image;


// BUY NOW BUTTON CLICK
document.getElementById("buyNowBtn").addEventListener("click", () => {
  buyNowWhatsApp(name, price, image);
});
