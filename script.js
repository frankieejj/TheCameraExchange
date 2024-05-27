/**
* Automatically cycle through slideshow every 6 seconds
* Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
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

/**
* Function to keep track of current slide
*/
function currentSlide(n) {
  slideIndex = n;
  updateSlides();
}

/**
* Update carasole slides when the corresponding circle is clicked
* Source: https://www.w3schools.com/howto/howto_js_slideshow.asp
*/
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

/**
 * Change to display the dropdown menu
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

/**
 * Add to Cart Button - clicked, loads, ticks when complete
 */
function addToCart1(){
  var button = document.getElementById("list-button");
  button.value = "\u25cf"; // Change to 1 dots
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
  button.value = "\u25cf \u25cf \u25cf"; // Change to 3 dot
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
  button.value = "\u25cf"; // Change to 1 dots
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
  button.value = "\u25cf \u25cf \u25cf"; // Change to 3 dot
  setTimeout(SecondAddedToCart,1000);
}
function SecondAddedToCart(){
  var button = document.getElementById("list-button-2");
  button.value = "\u2713"; // Change to a Tick when added
  button.disabled=false;
  button.classList.add("button-addedToCart");
}

/**
 * Function to change main-image on product page to corresponding thumbnail pressed
 * @param {*} src Source on image for new main image
 */
function changeMainImage(src){
  document.getElementById("main-image").src = src;
}