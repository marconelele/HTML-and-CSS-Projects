// open the modal
function openModal() {
    document.getElementById("pizzaModal").style.display = "block";
}

function closeModal() {
    document.getElementById("pizzaModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

//next/prev controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("pizzaSlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}