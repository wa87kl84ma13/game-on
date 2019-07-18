const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const closeNav = document.querySelector('.close');

hamburgerMenu.onclick = function () {}

hamburgerMenu.addEventListener('click touchstart', function() {
    mainNav.style.display = 'block';
});

closeNav.addEventListener('click touchstart', function() {
        mainNav.style.display = 'none';
});
