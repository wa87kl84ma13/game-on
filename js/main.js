// Open and close hamburger menu for mobile devices
var hamburgerMenu = document.querySelector('.hamburger-menu');
var mainNav = document.querySelector('.main-nav');
var closeNav = document.querySelector('.close');

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
var currentImage = document.querySelector('#large-image');
var imageGallery = document.querySelectorAll('.small-image');

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
