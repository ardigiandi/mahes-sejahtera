const scrollContainer = document.getElementById("scroll-container");

// Adjusted smooth scroll parameters
let scrollAmount = 0;
const scrollDistance = 0.5; // Smaller increments for smoother scrolling (half-pixel movement)
const scrollSpeed = 10; // Faster intervals for smoother transitions

function smoothScroll() {
  scrollAmount += scrollDistance;
  scrollContainer.scrollLeft = scrollAmount;

  // If we've reached the end, reset the scroll position for continuous looping
  if (
    scrollAmount >=
    scrollContainer.scrollWidth - scrollContainer.clientWidth
  ) {
    scrollAmount = 0;
  }
}

setInterval(smoothScroll, scrollSpeed);

// NAVBAR
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

menuToggle.addEventListener("click", () => {
  sidebar.classList.toggle("-translate-x-full");
});

// FORM

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const firstNameInput = form.querySelectorAll("input[type='text']")[0];
  const lastNameInput = form.querySelectorAll("input[type='text']")[1];
  const emailInput = form.querySelector("input[type='email']");
  const messageInput = form.querySelector("textarea");
  const sendButton = form.querySelector("a");

  sendButton.addEventListener("click", (event) => {
    event.preventDefault();

    const formData = {
      firstName: firstNameInput.value.trim(),
      lastName: lastNameInput.value.trim(),
      email: emailInput.value.trim(),
      message: messageInput.value.trim(),
    };

    if (validateForm(formData)) {
      console.log("Form Submitted", formData);
      alert("Your message has been sent successfully!");
      form.reset();
    } else {
      alert("Please fill in all fields correctly.");
    }
  });

  function validateForm({ firstName, lastName, email, message }) {
    return (
      firstName !== "" &&
      lastName !== "" &&
      validateEmail(email) &&
      message !== ""
    );
  }

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
