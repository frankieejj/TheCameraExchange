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