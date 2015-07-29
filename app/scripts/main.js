/* jshint devel:true */
'use strict';
/*
function cycleImages() {
  var $active = $('.headerPhoto .active');
  var $next = ($active.next().length > 0) ? $active.next() : $('.headerPhoto img:first');
  $next.css('z-index', 2); // move the next image up the pile
  $active.fadeOut(1500, function() { // fade out the top image
    $active.css('z-index', 1).show().removeClass('active'); // reset the z-index and unhide the image
    $next.css('z-index', 3).addClass('active'); // make the next image the top one
  });
} */

//Thank you @JAM from Stack Overflow!

var imageIndex = 1;
var imagesArray = [
  '/images/header1.jpg',
  '/images/header2.jpg',
  '/images/header3.jpg',
  '/images/header4.jpg'
];

function headerSlides() {
  var index = imageIndex++ % imagesArray.length;
  $('.headerPhoto').css('background', 'url(\'' + imagesArray[index] + '\') no-repeat center center fixed');
}

$(document).ready(function() {

  setInterval(headerSlides, 3000);
});
