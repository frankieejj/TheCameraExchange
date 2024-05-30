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