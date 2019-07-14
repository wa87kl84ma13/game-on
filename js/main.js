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

// Create lightbox for game image gallery