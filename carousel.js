/**
* Automatically cycle through slideshow every 6 seconds
* W3Schools. (n.d.). How To Create a Slideshow. Retrieved from https://www.w3schools.com/howto/howto_js_slideshow.asp
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
* W3Schools. (n.d.). How To Create a Slideshow. Retrieved from https://www.w3schools.com/howto/howto_js_slideshow.asp
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