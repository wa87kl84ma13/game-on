// Open and close hamburger menu for mobile devices
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const closeNav = document.querySelector('.close');

hamburgerMenu.addEventListener('click', function() {
    mainNav.style.display = 'block';
});

closeNav.addEventListener('click', function() {
    mainNav.style.display = 'none';
});

// Create game image gallery
const currentImage = document.querySelector('#current');
const imageGallery = document.querySelectorAll('.review-gallery-image');

function selectedImage(e) {
    currentImage.src = e.target.src;

    currentImage.classList.add('fade-in');

    setTimeout(() => currentImage.classList.remove('fade-in'), 500);
}

imageGallery.forEach(img => img.addEventListener('click', selectedImage));
