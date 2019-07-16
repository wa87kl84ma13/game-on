// Open and close hamburger menu for mobile devices
/*
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mainNav = document.querySelector('.main-nav');
const closeNav = document.querySelector('.close');

hamburgerMenu.addEventListener('click', function() {
    mainNav.style.display = 'block';
});

closeNav.addEventListener('click', function() {
        mainNav.style.display = 'none';
});
*/

// JQUERY EQUIVALENT EVENT LISTENER CLICK
$('.hamburger-menu').click(function(){
    $('.main-nav').slideDown();
  });

$('.close').click(function() {
    $('.main-nav').slideUp();
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

// Close modal
const closeModalBox = document.querySelector('.close-modal-sign-up');

function closeModal() {
    signUpModal.style.display = 'none';
}

closeModalBox.addEventListener('click', closeModal);

// Sign up modal
const signUpModal = document.querySelector('#modal');
const signUp = document.querySelector('#sign-up');
const thankYouModal = document.querySelector('#thank-you-modal');

function loadModal() {
    signUpModal.style.display = 'block';
    if (window.matchMedia("(min-width: 320px) and (max-width: 768px)").matches) {
         mainNav.style.display = 'none';
    } else {
        console.log('error');
    }
}

signUp.addEventListener('click', loadModal);

// Form validation
const signUpForm = document.querySelector('#form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const errorMessage = document.querySelector('#error');
const success = document.querySelector('#success');

function validateForm(e) {
    if(email.value === '' || password.value === '') {
        errorMessage.innerHTML = 'Please fill in the fields';
        errorMessage.classList.add('error-message');
        setTimeout(() => errorMessage.remove(), 4000);
    } else {
        thankYouModal.style.display = 'block';
        signUpModal.style.display = 'none';
        setTimeout(() => thankYouModal.remove(), 6000);
    }

    e.preventDefault();
}

signUpForm.addEventListener('submit', validateForm);
