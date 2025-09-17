// Image slider
const sliderImages = ['image/slider1.jpg', 'image/slider2.jpg', 'image/slider3.jpg'];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    const slider = document.getElementById('slider-image');
    if (slider) {
        slider.src = sliderImages[currentIndex];
    }
}

setInterval(changeImage, 3000);

// Contact form validation
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const formMessage = document.getElementById('formMessage');

        if (!name || !email || !message) {
            formMessage.textContent = 'Please fill out all fields.';
            formMessage.style.color = 'red';
        } else {
            formMessage.textContent = 'Thank you for your message!';
            formMessage.style.color = 'green';
            form.reset();
        }
    });
}
// Image slider logic
const sliderImages = [
    'D:\USB Drive\ \FROM drive C\Wk-8-WebAssignment/slider1.jpg',
    'D:\USB Drive\ \FROM drive C\Wk-8-WebAssignment/slider2.jpg',
    'D:\USB Drive\ \FROM drive C\Wk-8-WebAssignment/slider3.jpg'
];

let currentIndex = 0;

function rotateSlider() {
    currentIndex = (currentIndex + 1) % sliderImages.length;
    const slider = document.getElementById('slider-image');
    if (slider) {
        slider.src = sliderImages[currentIndex];
    }
}

// Change image every 3 seconds
setInterval(rotateSlider, 3000);