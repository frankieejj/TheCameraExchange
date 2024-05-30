/**
 * Change to display the dropdown search button
 * W3Schools. (n.d.). How To Create a Filterable Dropdown. Retrieved from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_filter
 */
function dropdownSearch() {
  document.getElementById("dropdown").classList.toggle("show");
}

/**
* Filter the dropdown search button items based on user input
* W3Schools. (n.d.). How To Create a Filterable Dropdown. Retrieved from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_dropdown_filter
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
 * Delete all local storage when session is complete
 */
function deleteCart() {
  localStorage.clear();
}

/**
 * Add to Cart Button - clicked, loads, ticks when complete and adds all product information to local storage
 * W3Schools. (n.d.). Window localStorage Property. Retrieved from https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * freeCodeCamp Forum. (n.d.). How do I save the items of a shopping cart in the local storage?. Retrieved from https://forum.freecodecamp.org/t/how-do-i-save-the-items-of-a-shopping-cart-in-the-local-storage/254745/3
 */
function addToCart(id) {
    // display to user the loading and completion of input
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

    // define product details
    const price = parseFloat(document.getElementById('price').textContent);
    const productName = document.getElementById('product-name').textContent;
    const quantity = parseInt(document.getElementById('quantity-value').textContent);
    const image = document.getElementById('main-image').getAttribute('src');

    // create product object
    const product = {
        id: id,
        name: productName,
        price: price,
        quantity: quantity,
        image: image
    };

    // get cart from local storage
    let cart = JSON.parse(localStorage.getItem('cart'));

    // if cart is null
    if (cart == null) {
        // initialise with empty array
        cart = [];
    }

    // add product to cart
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
}

/**
 * Function to add and minus with Quantity Button
 */
function increaseQuantity(button) {
    // Define attributes
    var quantity = button.previousElementSibling.querySelector('#quantity-value');
    var quantityValue = parseInt(quantity.textContent);
  
    // Add quantity
    quantity.textContent = quantityValue + 1;
}
  
function decreaseQuantity(button) {
    // Define attributes
    var quantity = button.nextElementSibling.querySelector('#quantity-value');
    var quantityValue = parseInt(quantity.textContent);
  
    // As long as not less than one: minus quantity
    if (quantityValue > 1) {
      quantity.textContent = quantityValue - 1;
    }
}

/**
 * Function to change main-image on product page to corresponding thumbnail pressed
 */
function changeMainImage(src){
  document.getElementById("main-image").src = src;
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