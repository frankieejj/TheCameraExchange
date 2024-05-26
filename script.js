// Script to automatically cycle through carasole slides every 6 seconds
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let circles = document.getElementsByClassName("circle");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";  
  circles[slideIndex - 1].className += " active";
  setTimeout(showSlides, 6000);
}

function currentSlide(n) {
  slideIndex = n;
  updateSlides();
}

// Script to update carasole slides when the corresponding circle is clicked
function updateSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  let circles = document.getElementsByClassName("circle");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < circles.length; i++) {
    circles[i].className = circles[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";  
  circles[slideIndex - 1].className += " active";
}


// Script for quantity button
const minusBtn = document.getElementById('minus-btn');
const plusBtn = document.getElementById('plus-btn');
const quantityDisplay = document.getElementById('quantity');


let quantity = 1; // initial quantity

minusBtn.addEventListener('click', minusQuantity);
function minusQuantity(){
  if (quantity > 1){
      quantity--;
      quantitySpan.textContent = quantity;
  }
}

plusBtn.addEventListener('click', addQuantity);
function addQuantity(){
  quantity++;
  quantitySpan.textContent = quantity;
}

// Script for Checkout Form
// document.addEventListener('DOMContentLoaded', function() {
//   const checkoutForm = document.getElementById('checkout-form');

//   checkoutForm.addEventListener('submit', function(event) {
//       event.preventDefault();

//       const fname = document.getElementById('fname').value;
//       const lname = document.getElementById('lname').value;
//       const adr = document.getElementById('adr').value;
//       const suburb = document.getElementById('suburb').value;
//       const state = document.getElementById('state').value;
//       const postcode = document.getElementById('postcode').value;

//       const summaryData = {
//           fname: fname,
//           lname: lname,
//           adr: adr,
//           suburb: suburb,
//           state: state,
//           postcode: postcode
//       };

//       localStorage.setItem('summaryData', JSON.stringify(summaryData));

//       window.location.href = 'checkout3.html';
//   });
// });


/**
 * Toggle to display the dropdown menu
 * Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_filter
 */
function dropdown() {
  document.getElementById("dropdown").classList.toggle("show");
}

/**
* Filter the dropdown menu items based on user input
* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_filter
*/
function filterFunction() {
  const input = document.getElementById("input");
  const filter = input.value.toUpperCase();
  const div = document.getElementById("dropdown");
  const a = div.getElementsByTagName("a");
  for (let i = 0; i < a.length; i++) {
      const txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          a[i].style.display = "";
      } else {
          a[i].style.display = "none";
      }
  }
}

function addToCart1(){
  var button = document.getElementById("list-button");
  button.value = "\u25cf"; // Change to  3 dots
  button.disabled = true;
  button.classList.add("button-disabled");

  setTimeout(addToCart2,1000);
}
function addToCart2(){
  var button = document.getElementById("list-button");
  button.value = "\u25cf \u25cf"; // Change to 2 dots
  setTimeout(addToCart3,1000);
}
function addToCart3(){
  var button = document.getElementById("list-button");
  button.value = "\u25cf \u25cf \u25cf"; // Change to 1 dot
  setTimeout(addedToCart,1000);
}
function addedToCart(){
  var button = document.getElementById("list-button");
  button.value = "\u2713"; // Change to a Tick when added
  button.disabled=false;
  button.classList.add("button-addedToCart");
}

function SecondAddToCart1(){
  var button = document.getElementById("list-button-2");
  button.value = "\u25cf"; // Change to  3 dots
  button.disabled = true;
  button.classList.add("button-disabled");

  setTimeout(SecondAddToCart2,1000);
}
function SecondAddToCart2(){
  var button = document.getElementById("list-button-2");
  button.value = "\u25cf \u25cf"; // Change to 2 dots
  setTimeout(SecondAddToCart3,1000);
}
function SecondAddToCart3(){
  var button = document.getElementById("list-button-2");
  button.value = "\u25cf \u25cf \u25cf"; // Change to 1 dot
  setTimeout(SecondAddedToCart,1000);
}
function SecondAddedToCart(){
  var button = document.getElementById("list-button-2");
  button.value = "\u2713"; // Change to a Tick when added
  button.disabled=false;
  button.classList.add("button-addedToCart");
}

function submitForm() {
  var formData = {
    firstname: document.getElementById("fname").value,
    lastname: document.getElementById("lname").value,
    address: document.getElementById("adr").value,
    suburb: document.getElementById("suburb").value,
    state: document.getElementById("state").value,
    postcode: document.getElementById("postcode").value
  };

  // Store form data in local storage
  localStorage.setItem("formData", JSON.stringify(formData));

  // Redirect to next page
  window.location.href = "checkout2.html";
}

document.addEventListener("DOMContentLoaded", function() {
  // Retrieve form data from local storage
  var formData = JSON.parse(localStorage.getItem("formData"));

  // Check if formData exists to prevent errors
  if (formData) {
      // Access the form data
      var firstname = formData.firstname;
      var lastname = formData.lastname;
      var address = formData.address;
      var suburb = formData.suburb;
      var state = formData.state;
      var postcode = formData.postcode;
    
      // Display form data on the page
      document.getElementById("summary-name").textContent = firstname + " " + lastname;
      document.getElementById("summary-address-line-1").textContent = address;
      document.getElementById("summary-address-line-2").textContent = suburb + " " + postcode + " " + state;
  }
});

// Function to toggle visibility state in localStorage
function changeCartState(productState) {
  let state = localStorage.getItem(elementKey) || 'hide';
  state = (state === 'show') ? 'hide' : 'show';
  localStorage.setItem(productState, state);
}

// Function to set visibility based on state
function setProductState(productId, productState) {
  let state = localStorage.getItem(productState) || 'hide';
  if (state === 'show') {
      document.getElementById(productId).style.display = 'flex';
  } else {
      document.getElementById(productId).style.display = 'none';
  }
}

// Function to toggle visibility state in localStorage and reload page
function removeFromCart(productState) {
  changeCartState(productState);
  location.reload();
}
