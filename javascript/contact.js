// ===============================
// EMAILJS CONTACT FORM
// ===============================

// Initialize EmailJS
(function () {
  emailjs.init("sm1q1F39cDuwTw2pM"); // 🔴 replace with your EmailJS public key
})();

// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector(".contact-form form");

  if (!contactForm) return;

  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();

    // Get current date & time
    const now = new Date();
    const formattedTime = now.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Prepare template parameters
    const templateParams = {
      name: contactForm.name.value,
      email: contactForm.email.value,
      phone: contactForm.phone.value,
      message: contactForm.message.value,
      time: formattedTime,
    };

    // Send email
    emailjs
      .send(
        "service_7apddus",   // 🔴 replace with EmailJS service ID
        "template_hz1u59b",  // 🔴 replace with EmailJS template ID
        templateParams
      )
   .then(function () {
  const successBox = document.getElementById("contact-success");

  successBox.style.display = "block";

  setTimeout(() => {
    successBox.style.display = "none";
  }, 2000); // 2 seconds

  contactForm.reset();
},
        function (error) {
          console.error("EmailJS Error:", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  });
});
