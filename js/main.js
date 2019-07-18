// JQUERY DROP DOWN HAMBURGER MENU ON CLICK
$('.hamburger-menu').bind('click touchstart', function(){
    $('.main-nav').slideDown();
  });

$('.close').bind('click touchstart', function() {
    $('.main-nav').slideUp();
});

// JQUERY CHANGE IMG SRC ON CLICK
$('.small-image').bind('click touchstart', function() {
    var largeImage = $(this).attr('src');
    $('#large-image').attr('src',largeImage);
    $('#large-image').addClass('fade-in');
    setTimeout(function() {
        document.querySelector('#large-image').classList.remove('fade-in')
    }, 500);
});
