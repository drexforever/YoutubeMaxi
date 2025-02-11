document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    function checkPosition() {
        elements.forEach(element => {
            const position = element.getBoundingClientRect();

            if (position.top < window.innerHeight && position.bottom >= 0) {
                if (element.classList.contains('left')) {
                    element.classList.add('animate-left');
                } else if (element.classList.contains('right')) {
                    element.classList.add('animate-right');
                } else if (element.classList.contains('bottom')) {
                    element.classList.add('animate-bottom');
                }
            }
        });
    }

    window.addEventListener('scroll', checkPosition);
    checkPosition();
});

let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function moveSlide(n) {
    slideIndex += n;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    showSlide(slideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(slideIndex);
});