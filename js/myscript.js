// Start of Tawk.to Script
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/5bb85e09b033e9743d028ff2/default';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
// End of Tawk.to Script


// Slick Slider
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  });
});

// counter up section
$(document).ready(function($) {
    $(".counterup-text span").counterUp({
        delay: 2,
        time: 1000
    });
});

// parallax window
$('.parallax-window').parallax({imageSrc: '/images/counter.jpg'});


// Smooth scroll anchor
var $root = $('html, body');

$(document).ready(function($) {
$('a[href^="#"]').click(function () {
    $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 1000);

    return false;
  });
});

// for wow.js
$(document).ready(function($) {
  new WOW().init();
});
