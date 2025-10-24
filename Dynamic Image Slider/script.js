const slides = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let index = 0;
const totalSlides = images.length;

// Update slider & dots
function updateSlider() {
  slides.style.transform = `translateX(${-index * 100}%)`;
  dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
}

// Next / Prev slide
function nextSlide() {
  index = (index + 1) % totalSlides;
  updateSlider();
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Dot click
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    updateSlider();
  });
});

// Buttons
nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto slide
setInterval(nextSlide, 3000);

// Initialize
updateSlider();


