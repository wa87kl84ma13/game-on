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

// JQUERY EQUIVALENT EVENT LISTENER CLICK
/*
$('.hamburger-menu').bind('click touchstart', function(){
    $('.main-nav').slideDown();
  });

$('.close').bind('click touchstart', function() {
    $('.main-nav').slideUp();
});
*/


// Create game image gallery
const currentImage = document.querySelector('#large-image');
const imageGallery = document.querySelectorAll('.small-image');

function selectedImage(e) {
    currentImage.src = e.target.src;

    currentImage.classList.add('fade-in');

    setTimeout(function() {
        currentImage.classList.remove('fade-in')
    }, 4000);
}

imageGallery.forEach(function(img) {
    img.addEventListener('click', selectedImage);
});
