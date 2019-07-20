// Open and close hamburger menu for mobile/tablet devices
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const closeNav = document.querySelector('.close');

function hideMenu(e) {
    if(mainNav.style.display === 'block') {
        mainNav.style.display = 'none';
    } else {
        mainNav.style.display = 'block';
    }

    e.preventDefault();
}

hamburgerMenu.addEventListener('click', hideMenu);

closeNav.addEventListener('click', function(e) {
    mainNav.style.display = 'none';

    e.preventDefault();
});

// Create image gallery
const largeImage = document.querySelector('#large-image');
const smallImages = document.querySelectorAll('.small-image');

function selectedImage(e) {
    largeImage.src = e.target.src;

    largeImage.classList.add('fade-in');

    setTimeout(function() {
        largeImage.classList.remove('fade-in');
    }, 500);

    e.preventDefault();
}

smallImages.forEach(function(img) {
    img.addEventListener('click', selectedImage);
});
