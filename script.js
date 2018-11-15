$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

$(document).ready(function() {
  /** ===========================================
        Hide / show the master navigation menu
    ============================================ */

  // console.log('Window Height is: ' + $(window).height());
  // console.log('Document Height is: ' + $(document).height());

  console.log("Window Height is: " + $(window).height());
  console.log("Document Height is: " + $(document).height());

  var previousScroll = 0;

  $(window).scroll(function() {
    var currentScroll = $(this).scrollTop();

    /*
          If the current scroll position is greater than 0 (the top) AND the current scroll position is less than the document height minus the window height (the bottom) run the navigation if/else statement.
        */
    if (
      currentScroll > 0 &&
      currentScroll < $(document).height() - $(window).height()
    ) {
      /*
              If the current scroll is greater than the previous scroll (i.e we're scrolling down the page), hide the nav.
            */
      if (currentScroll > previousScroll) {
        window.setTimeout(hideNav, 150);
        /*
                  Else we are scrolling up (i.e the previous scroll is greater than the current scroll), so show the nav.
                */
      } else {
        window.setTimeout(showNav, 100);
      }
      /* 
              Set the previous scroll value equal to the current scroll.
            */
      previousScroll = currentScroll;
    }
  });

  function hideNav() {
    $(".navbar").fadeOut();
  }
  function showNav() {
    $(".navbar").fadeIn();
  }
});
