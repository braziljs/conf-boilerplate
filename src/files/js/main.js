// 21 Dez 2012, 4:42

;(function ($, window, document, undefined) {
  var mainFunctions = ({
    animateScroll : function () {
      $('.nav-link').on('click', function (event) {
        var $this = $(this),
            $htmlBody = $('html, body'),
            linkTarget = $this.attr('href'),
            offSetTop;

      // If not start with #, stop here!
        if (linkTarget[0] !== '#') { return false }

        event.preventDefault();

      // Get distance of top
        offSetTop = $(linkTarget).offset().top;

      // Animate the scroll
        $htmlBody.stop().animate({scrollTop : offSetTop}, function () {
          location.hash = linkTarget;
        });
      });
    },

    init : function () {
      var that = this;

      $(function () {
        that.animateScroll();
      });
    }
  }).init();

  $(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
      $('.scrollup').fadeIn();
    } else {
      $('.scrollup').fadeOut();
    }
    $('.scrollup').click(function(){
      $("html, body").animate({ scrollTop: 0 }, 600);
      return false;
    });
  });

}(jQuery, window, document))