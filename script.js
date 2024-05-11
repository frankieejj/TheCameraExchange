// JavaScript code for the carousel
let slideIndex = 0; // Start from the first slide
showSlides();

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n - 1); // Adjust index to match array index
}

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slides");
    let circles = document.getElementsByClassName("circle");
    
    // Increment slide index
    slideIndex++;
    
    // Reset slide index if it exceeds the number of slides
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    
    // Display the appropriate slide
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < circles.length; i++) {
        circles[i].classList.remove("active");
    }
    slides[slideIndex - 1].style.display = "block";
    circles[slideIndex - 1].classList.add("active");

    // Set timer for next slide
    setTimeout(showSlides, 20000); // Change slide every 2 seconds (adjust as needed)
}

// Add event listeners to slides for clicking
let slides = document.getElementsByClassName("slides");
for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("click", function() {
        currentSlide(i + 1); // Set current slide index when clicked
    });
}
