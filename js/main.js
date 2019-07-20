// Open and close hamburger menu for mobile devices
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
