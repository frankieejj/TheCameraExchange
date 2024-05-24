// Script to automatically cycle through carasole slides every 6 seconds
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

function currentSlide(n) {
  slideIndex = n;
  updateSlides();
}

// Script to update carasole slides when the corresponding circle is clicked
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
