const formBtn = document.getElementById("close-form"),
  form = document.querySelector("form"),
  main = document.querySelector("main"),
  cart = document.createElement("div"),
  emailInput = document.querySelector('input'),
  emailList = [],
  formContainer = document.getElementsByClassName("form-container")[0];
let cartItems = 0;

const toggler = () => {
  form.classList.toggle("hide");
  formBtn.innerText === "X"
    ? (formBtn.innerText = "+")
    : (formBtn.innerText = "X");
};

const validateForm = () => {
  if (!emailInput.value) {
    emailInput.style.border = "2px solid red";
    alert("please enter an email address to subscribe");
  } else {
    displayThankYou();
  }
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  validateForm();
});

const displayThankYou = () => {
  formContainer.innerText = "Thank you for subscribing!";
  setTimeout(removeMessage, 3000);
};

const removeMessage = () => {
  formContainer.remove();
};

emailInput.addEventListener("change", () => {
  emailInput.style.border = "none";
});

const addToCart = () => {
  if (cartItems === 0) {
    cartItems = 1;
    cart.setAttribute("class", "cart-display");
    cart.innerText = `Your Cart: ${cartItems} item`;
    main.appendChild(cart);
  } else {
    cartItems += 1;
    cart.innerText = `Your Cart: ${cartItems} items`;
  }
};
