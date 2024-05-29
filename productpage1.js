/**
 * Add to Cart Button - clicked, loads, ticks when complete and adds all product information to local storage
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

