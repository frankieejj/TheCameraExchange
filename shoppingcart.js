/**
 * Function of generating a summary of product cards of user's purchases
 */
document.addEventListener('DOMContentLoaded', function() {
    // get all information about cart from local storage
    const cart = JSON.parse(localStorage.getItem('cart'));

    // define cart summary on html page
    const cartSummary = document.getElementById('cart-items');

    // summary prices
    let subTotal = 0;

    // if cart is not null and has items: create product summaries according to information in local storage
    if (cart && cart.length > 0) {
        cart.forEach(function(product) {
            // create product card
            const card = document.createElement('div');
            card.classList.add('product-checkout-preview');

            // set attributes
            card.setAttribute('id', 'product-' + product.id);

            const x = document.createElement('img');
            x.classList.add('x');
            x.src = 'res/x.png';
            x.addEventListener('click', removeProduct);
            

            const image = document.createElement('div');
            image.classList.add('product-checkout-image');
            image.innerHTML = '<img src="' + product.image + '">';

            const name = document.createElement('h9');
            name.classList.add('product-name');
            name.textContent = product.name;

            const quantity = document.createElement('div');
            quantity.classList.add('quantity-button');
            const value = document.createElement('h8');
            value.textContent = 'x' + product.quantity;
            quantity.appendChild(value);

            const price = document.createElement('div');
            const totalPrice = product.price * product.quantity;
            price.classList.add('price');
            price.innerHTML = '<h9>$' + totalPrice + '</h9>';

            // change subtotal prices in summary
            subTotal += totalPrice;
            
            // make product card
            card.appendChild(x);
            card.appendChild(image);
            card.appendChild(name);
            card.appendChild(quantity);
            card.appendChild(price);

            // add card to cart
            cartSummary.appendChild(card);
        });

        // update price summaries
        const orderSummary = document.getElementById('price-summary');
        orderSummary.innerHTML = '<h9>$' + subTotal.toFixed(2) + '</h9>';

        const totalOrderSummary = document.getElementById('total-price-summary');
        totalOrderSummary.innerHTML = '<h7>$' + (subTotal + 1.99).toFixed(2) + '</h7>';
    } else {
        // cart is empty: place empty cart notification to user
        const emptyCart = document.createElement('img');
        emptyCart.src = 'res/empty-cart.png';
        emptyCart.style.width = '60%';
        emptyCart.style.margin = '0 6vh';
        cartSummary.appendChild(emptyCart);
    }
});

/**
 * Remove Product from Shopping Cart
 */
function removeProduct(id){
    productId = 'product-' + id;
    const remove = document.getElementById(productId);
    remove.style.display = 'none';
}
