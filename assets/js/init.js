//jQuery doc ready
$(function () {

    //----------------------------------------
    // Init wow JS
    //----------------------------------------
    (function () {
        new WOW().init();
    }());

    //----------------------------------------
    // Intro Area
    //----------------------------------------

    //dynamic banner height
    (function () {
        $(".intro-banner").height($(window).height());

        $(window).resize(function () {
            $(".intro-banner").height($(window).height());
        });
    }());

    //parallax scrolling - using Stellar.js
    (function () {
        $.stellar({
            horizontalScrolling: false,
            responsive: true
        });
    }());

    //Typing skill Hashtags - using Typed.js
    (function () {
        var keySkills = ["Design","Architect", "Code", "Innovate", "Engineer", "Automate" ];

        $(".typing-area").typed({
            strings: keySkills,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 2000,
            loop:true,
        });
    }());

    //----------------------------------------
    // Page Navigation
    //----------------------------------------

    //Make NAV bar stick to top of the browser
    (function () {
        $("nav").sticky({ topSpacing: 0 });
    }());

    (function () {
        $("bar").sticky({ topSpacing: 0 });
    }());

    //Init single page nav (smooth scrolling)
    (function () {
        $('nav ul').onePageNav();
    }());

    //Init mobile navigation (sidebar)
    (function () {
        $(".button-collapse").sideNav();
    }());

    (function () {
        $("#desktop-nav li").addClass('waves-effect waves-blue');
    }());

    //----------------------------------------
    // Projects/Portfolio
    //----------------------------------------

    //Init Mixitup for Filtering of projects
    (function () {
        //$('#projects-container').mixItUp();

        var isoGrid = $('#projects-container').isotope({
            itemSelector: '.project',
            percentPosition: true,
            masonry: {
                // use element for option               
                columnWidth: '.project'
            }
        });

        $('#projects-filter').on('click', 'li', function () {
            var filterValue = $(this).attr('data-filter');
            isoGrid.isotope({ filter: filterValue });
        });

    }());


    //----------------------------------------
    // Certifications
    //----------------------------------------

    //Init carousel for certifications
    (function () {
        $('.carousel').carousel();
    }());    


}); //end of jQuery doc ready
