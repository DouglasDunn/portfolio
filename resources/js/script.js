$(document).ready(function() {
/* ----------------------------------------- */
/* isotope */
/* ----------------------------------------- */
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows'
    });

    $('.filter-button-group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.button-group').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });

    /* For the sticky navigation */
    $(".section-services").waypoint(function(direction) {
        if (direction === "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: '605px'
    });

    /* Scroll on buttons */
    //  Learn more button
    $(".js--scroll-to-services").click(function() {
        $("html, body").animate({scrollTop: $(".section-services").offset().top}, 1000);
    });

    //  footer up icon
    $(".js--scroll-to-header").click(function() {
        $("html, body").animate({scrollTop: $("header").offset().top}, 1000);
    });

    /* Navigation scroll */
    $(function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                    if (target.length) {
                        $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

/* ----------------------------------------- */
/* scrollspy */
/* ----------------------------------------- */
    var stickyNavLinks = $(".sticky .main-nav li a"),
        navLinks = $(".main-nav li a")
        navH = $("nav").height(),
        section = $("section"),
        documentEl = $(document);

    documentEl.on("scroll", function() {
        var currentScrollPos = documentEl.scrollTop();

        section.each(function() {
            var self = $(this);

            if ( self.offset().top < (currentScrollPos + navH) && (currentScrollPos + navH) < (self.offset().top + self.outerHeight()) ) {
                var targetClass = "." + self.attr("class") + "-marker";
                navLinks.removeClass("active");
                stickyNavLinks.removeClass("active");
                $(targetClass).addClass("active");
            }

            if ((currentScrollPos + navH) < (self.offset().top) && self.offset().top < 1000) {
                navLinks.removeClass("active");
                stickyNavLinks.removeClass("active");
            }
        });
    });

    /* Animations on scroll */
    $(".js--wp-1").waypoint(function(direction) {
        $(".js--wp-1").addClass("animated fadeIn");
    }, {
        offset: "80%"
    });

    $(".js--wp-2").waypoint(function(direction) {
        $(".js--wp-2").addClass("animated fadeInUp");
    }, {
        offset: "80%"
    });

    $(".js--wp-3").waypoint(function(direction) {
        $(".js--wp-3").addClass("animated fadeInUp");
    }, {
        offset: "80%"
    });

    $(".js--wp-4").waypoint(function(direction) {
        $(".js--wp-4").addClass("animated fadeIn");
    }, {
        offset: "80%"
    });

    $(".js--wp-5").waypoint(function(direction) {
        $(".js--wp-5").addClass("animated pulse");
    }, {
        offset: "90%"
    });

    $(".js--wp-6").waypoint(function(direction) {
        $(".js--wp-6").addClass("animated fadeInUp");
    }, {
        offset: "80%"
    });

    $(".js--wp-7").waypoint(function(direction) {
        $(".js--wp-7").addClass("animated fadeIn");
    }, {
        offset: "80%"
    });

    $(".js--wp-8").waypoint(function(direction) {
        $(".js--wp-8").addClass("animated fadeIn");
    }, {
        offset: "80%"
    });

    $(".js--wp-9").waypoint(function(direction) {
        $(".js--wp-9").addClass("animated fadeInUp");
    }, {
        offset: "80%"
    });

    /* Mobile nav */
    $(".js--nav-icon").click(function() {
        var nav = $(".js--main-nav");
        var icon = $(".js--nav-icon i");

        nav.slideToggle(200);
        if (icon.hasClass("ion-navicon-round")) {
            icon.addClass("ion-close-round");
            icon.removeClass("ion-navicon-round");
        } else {
            icon.addClass("ion-navicon-round");
            icon.removeClass("ion-close-round");
        }
    });

    //This works basically like a media query for jQuery, where we can take different actions depending on the screen width
    //fixes the bug for after you click the x icon and resize the window to a full width screen to show the nav
    $(window).resize(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');

        if ($(window).width() > 767){
            nav.css("display", "block");
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            nav.css("display", "none");
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }

    });


});
