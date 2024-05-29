/**
 * Function of generating a summary of user informaiton from input into form checkout
 */
document.addEventListener('DOMContentLoaded', function() {
    // add customer details from local storage
    const customerDetails = JSON.parse(localStorage.getItem('customerDetails'));
    const customerSummary = document.getElementById('delivery-address');
    const customerText = document.createElement('p');
    customerText.textContent = `${customerDetails.fname} ${customerDetails.lname}\n${customerDetails.adr}\n${customerDetails.suburb} ${customerDetails.state} ${customerDetails.postcode}`;
    customerSummary.appendChild(customerText);

    // add payment details from local storage
    const paymentDetails = JSON.parse(localStorage.getItem('payment'));
    const paymentSummary = document.getElementById('payment');
    const paymentText = document.createElement('p');
    paymentText.textContent = `${paymentDetails.ccnum}\n${paymentDetails.cname}\n${paymentDetails.expdate}`;
    paymentSummary.appendChild(paymentText);
});
