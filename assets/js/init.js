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

    //Skill Cloud
    (function () {
        var myConfig = {
            type: 'wordcloud',
            options: {
                words:
                    [
                        {
                            text: "Azure",
                            count: 65
                        },
                        {
                            text: "SharePoint",
                            count: 60
                        },
                        {
                            text: "C#",
                            count: 55
                        },
                        {
                            text: ".Net",
                            count: 55
                        },
                        {
                            text: "PowerShell",
                            count: 50
                        },
                        {
                            text: "jQuery",
                            count: 40
                        },
                        {
                            text: "SQL",
                            count: 40
                        },
                        {
                            text: "JavaScript",
                            count: 40
                        },
                        {
                            text: "SharePoint Online",
                            count: 45
                        },
                        {
                            text: "Office 365",
                            count: 44
                        },
                        {
                            text: "Cloud Migration",
                            count: 50
                        },
                        {
                            text: "Visual Studio",
                            count: 45
                        },
                        {
                            text: "Azure DevOps",
                            count: 45
                        },
                        {
                            text: "GitHub",
                            count: 40
                        },
                        {
                            text: "BitBucket",
                            count: 40
                        },
                        {
                            text: "ServiceNow",
                            count: 39
                        },
                        {
                            text: "Remedy",
                            count: 40
                        },
                        {
                            text: "Scrum",
                            count: 38
                        },
                        {
                            text: "JIRA",
                            count: 40
                        },
                        {
                            text: "Resource Provisioning",
                            count: 40
                        },
                        {
                            text: "ARM Templates",
                            count: 40
                        },
                        {
                            text: "Automation Accounts",
                            count: 35
                        },
                        {
                            text: "Runbooks",
                            count: 35
                        },
                        {
                            text: "Bot Framework",
                            count: 36
                        },
                        {
                            text: "QnA Maker",
                            count: 36
                        },
                        {
                            text: "Language Understanding",
                            count: 34
                        },
                        {
                            text: "Vision API",
                            count: 34
                        },
                        {
                            text: "Azure Function",
                            count: 33
                        },
                        {
                            text: "App Services",
                            count: 33
                        },
                        {
                            text: "Logic Apps",
                            count: 33
                        },
                        {
                            text: "Application Insights",
                            count: 30
                        },
                        {
                            text: "Log Analytics",
                            count: 30
                        },
                        {
                            text: "Key Vault",
                            count: 30
                        },
                        {
                            text: "Azure Storage",
                            count: 32
                        },
                        {
                            text: "Cosmos DB",
                            count: 30
                        },
                        {
                            text: "Virtual Machines",
                            count: 31
                        },
                        {
                            text: "Azure AD",
                            count: 31
                        },
                        {
                            text: "Cost Management",
                            count: 29
                        },
                        {
                            text: "HTML",
                            count: 28
                        },
                        {
                            text: "CSS",
                            count: 28
                        },
                        {
                            text: "ASP.NET",
                            count: 40
                        },
                        {
                            text: "Web Servies",
                            count: 27
                        },
                        {
                            text: "AJAX",
                            count: 26
                        },
                        {
                            text: "PowerShell ISE",
                            count: 30
                        },
                        {
                            text: "SSMS",
                            count: 25
                        },
                        {
                            text: "Visual Studio Code",
                            count: 40
                        }
                        
                    ],
                minLength: 5,
                ignore: [],
                maxItems: 50,
                aspect: 'spiral',
                colorType: 'palette',
                //palette: ['#D32F2F', '#5D4037', '#1976D2', '#E53935', '#6D4C41', '#1E88E5', '#F44336', '#795548', '#2196F3', '#EF5350', '#8D6E63', '#42A5F5'],
                palette: ['#F8B195', '#F67280', '#C06C84', '#6C5B7B', '#355C7D', '#594F4F', '#547980', '#45ADA8', '#9DE0AD'],
                style: {
                    //backgroundColor: '#024e9b',
                    fontFamily: 'create round',
                    hoverState: {
                        backgroundColor: '#337ab7',
                        borderRadius: 1,
                        fontColor: 'white'
                    },
                    tooltip: {
                        text: '%text: %hits',
                        visible: false,
                        alpha: 0.9,
                        backgroundColor: '#1976D2',
                        borderRadius: 2,
                        borderColor: 'none',
                        fontColor: 'white',
                        fontFamily: 'Segoe UI',
                        textAlpha: 1
                    }
                }
            }
        };

        zingchart.render({
            id: 'skillCloud',
            data: myConfig,
            height: 400,
            width: '100%'
        });
    }());

}); //end of jQuery doc ready
