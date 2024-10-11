let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-image');
const totalSlides = slides.length;

function showSlide(index) {
    const slideWidth = slides[0].clientWidth;
    const carouselSlide = document.querySelector('.carousel-slide');
    carouselSlide.style.transform = `translateX(${-index * slideWidth}px)`;
}


function nextSlide() {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    showSlide(currentIndex);
}


function prevSlide() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1;
    }
    showSlide(currentIndex);
}
setInterval(nextSlide, 4550); 