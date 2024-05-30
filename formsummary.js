/**
 * Function of generating a summary of user informaiton from input into form checkout
 * W3Schools. (n.d.). HTML Web Storage. Retrieved from https://www.w3schools.com/html/html5_webstorage.asp
 */
document.addEventListener('DOMContentLoaded', function() {
    // add customer details from local storage
    const customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    const customerSummary = document.getElementById('delivery-address');
    const customerText = document.createElement('p');

    // add information to html
    customerText.innerHTML = `${customerDetails.fname} ${customerDetails.lname}<br>
        ${customerDetails.adr}<br>${customerDetails.suburb} ${customerDetails.state} 
        ${customerDetails.postcode}`;
    customerText.style.color = '#536681';
    customerSummary.appendChild(customerText);



    // add payment details from local storage
    const paymentDetails = JSON.parse(localStorage.getItem('payment'));
    const paymentSummary = document.getElementById('payment');
    const paymentText = document.createElement('p');

    // add information to html
    paymentText.innerHTML = `${paymentDetails.ccnum}<br>${paymentDetails.cname}
        <br>${paymentDetails.expdate}`;
        paymentText.style.color = '#536681';
    paymentSummary.appendChild(paymentText);
});