/**
* Automatically cycle through slideshow every 6 seconds
* Inspiration & Help Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
slideNum = 0;
showSlides();
function showSlides() {
  // Define attributes
  let i;
  let slides = document.getElementsByClassName("slides");
  let circles = document.getElementsByClassName("circle");

  // for each slide in carasole: set display to none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // increase index of slides
  slideNum++;

  // when index has reached end of slides: bring index back to 1
  if (slideNum > slides.length) {
    slideNum = 1;
  }

  // for each circle in carasole navigation: deactivate
  for (i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = "#E4DEDC";
  }

  // current index: make corresponding slide and circle active
  slides[slideNum - 1].style.display = "block";  
  circles[slideNum - 1].style.backgroundColor = "#F27238";

  // redo method every 6 seconds
  setTimeout(showSlides, 6000);
}

/**
* Function to keep track of current slide and trigger update slides
*/
function currentSlide(n) {
  slideNum = n;
  updateSlides();
}

/**
* Update carasole slides when the corresponding circle is clicked
* Inspiration & Help Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
function updateSlides() {
  // Define attributes
  let i;
  let slides = document.getElementsByClassName("slides");
  let circles = document.getElementsByClassName("circle");

  // for each slide in carasole: set display to none
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // for each circle in carasole navigation: deactivate
  for (i = 0; i < circles.length; i++) {
    circles[i].style.backgroundColor = "#E4DEDC";
  }

  // activate slide depending on input of user
  slides[slideNum - 1].style.display = "block";  
  circles[slideNum - 1].style.backgroundColor = "#F27238";
}

/**
 * Change to display the dropdown search button
 * Inspiration & Help Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_filter
 */
function dropdownSearch() {
  document.getElementById("dropdown").classList.toggle("show");
}

/**
* Filter the dropdown search button items based on user input
* Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_filter
*/
function filterSearchResults() {
  // Define attributes
  const input = document.getElementById("input");
  const userSearched = input.value.toUpperCase();
  const pages = document.getElementById("dropdown").getElementsByTagName("a");

  // show or hide pages depending on user input
  for (let i = 0; i < pages.length; i++) {
    const pageTitle = pages[i].textContent || pages[i].innerText;
    if (pageTitle.toUpperCase().indexOf(userSearched)>-1){
      pages[i].style.display = "";
    } else {
      pages[i].style.display = "none";
    }
  }
}

/**
 * Add to Cart Button - clicked, loads, ticks when complete
 */
function addToCart(id){
  var button=document.getElementById(id);
  button.value = "\u25cf"; // Loads with 1 dot
  button.style.backgroundColor = "#536681";
  setTimeout(()=>{
    button.value = "\u25cf \u25cf"; // Loads with 2 dots
    setTimeout(()=>{
      button.value = "\u25cf \u25cf \u25cf"; // Loads with 3 dots
      setTimeout(()=>{
        button.value = "\u2713"; // Confirms with a tick
      }, 500);
    }, 500);
  }, 500); // every 0.5 seconds
}

/**
 * Function to change main-image on product page to corresponding thumbnail pressed
 */
function changeMainImage(src){
  document.getElementById("main-image").src = src;
}

/**
 * Function to add and minus with Quantity Button
 */
function increaseQuantity(element) {
  // Define attributes
  var quantity = element.previousElementSibling.querySelector('#quantity-value');
  var quantityValue = parseInt(quantity.textContent);

  // Add quantity
  quantity.textContent = quantityValue + 1;
}

function decreaseQuantity(element) {
  // Define attributes
  var quantity = element.nextElementSibling.querySelector('#quantity-value');
  var quantityValue = parseInt(quantity.textContent);

  // As long as not less than one: minus quantity
  if (quantityValue > 1) {
    quantity.textContent = quantityValue - 1;
  }
}

/**
 * Delete all local storage when session is complete
 */
function deleteCart() {
  localStorage.clear();
}

/**
 * Submit customer information form into local storage
 */
function sumbitCustomerDetails() {
  // Collect attributes
  const fname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const adr = document.getElementById('adr').value;
  const suburb = document.getElementById('suburb').value;
  const state = document.getElementById('state').value;
  const postcode = document.getElementById('postcode').value;

  // JSON of details
  const customerDetails = {
    fname: fname,
    lname: lname,
    adr: adr,
    suburb: suburb,
    state: state,
    postcode: postcode
  };

  // put into local storage
  localStorage.setItem('customerDetails', JSON.stringify(customerDetails));
}

/**
 * Submit payment details form into local storage
 */
function submitPayment() {
  // Collect attributes
  const cname = document.getElementById('cname').value;
  const ccnum = document.getElementById('ccnum').value;
  const expdate = document.getElementById('expdate').value;
  const cvv = document.getElementById('cvv').value;

  // JSON of details
  const payment = {
    cname: cname,
    ccnum: ccnum,
    expdate: expdate,
    cvv: cvv,
  };

  // put into local storage
  localStorage.setItem('payment', JSON.stringify(payment));
}

