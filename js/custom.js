$(document).ready(function () {

  /*start caro...*/
  var $myCarousel = $('#carousel1');
  $myCarousel.carousel({
    interval: 4000, /* 4s to next img */
    pause: null     /* override default behaviour ( pause caro.. on hover.. ) */
  });

  /*Cred to: https://www.sitepoint.com/bootstrap-carousel-with-css3-animations/ */
  function doAnimations(elems) {
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function () {
      var $this = $(this),
        $animationType = $this.data('animation');

      $this.show(); /* show text */
      // Add animate.css classes to
      // the elements to be animated
      // Remove animate.css classes
      // once the animation event has ended
      $this.addClass($animationType).one(animEndEv, function () {
        $this.removeClass($animationType);
      });
    });
  }

  // Select the elements to be animated
  // in the first slide on page load
  var $firstAnimatingElems = $myCarousel.find('.item:first')
    .find('[data-animation ^= "animated"]');
  // Apply the animation using our function
  doAnimations($firstAnimatingElems);

  // Attach our doAnimations() function to the
  // carousel's slide.bs.carousel event
  $myCarousel.on('slide.bs.carousel', function (e) {
    // Select the elements to be animated inside the active slide
    var $animatingElems = $(e.relatedTarget)
      .find("[data-animation ^= 'animated']");
    doAnimations($animatingElems);
  });

});
