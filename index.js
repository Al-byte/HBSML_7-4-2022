$(document).ready(function() {  
    
    $(document).scroll(function () {
        var y = $(this).scrollTop();
        if (y > 750) {
            $('.bottomMenu').fadeIn();
        } else {
            $('.bottomMenu').fadeOut();
        }
    });

    $("#top-icon").click(function(){            
        $('html, body').animate({
                scrollTop: $("#home").position().top-0
            }, 1000);
    });

    // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();
    
    $(window).scroll(function(event){
        didScroll = true;
    });
    
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    
    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('header').removeClass('nav-down').addClass('nav-up');
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('header').removeClass('nav-up').addClass('nav-down');
            }
        }
        
        lastScrollTop = st;
    };

    $(".collapse").on('show.bs.collapse', function() {
        $(this).prev(".panel-heading").find(".fa").removeClass("fa-chevron-down").addClass("fa-chevron-up");
      }).on('hide.bs.collapse', function() {
        $(this).prev(".panel-heading").find(".fa").removeClass("fa-chevron-up").addClass("fa-chevron-down");
      });


    
});

