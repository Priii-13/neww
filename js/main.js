!(function ($) {
    "use strict";

    // Preloader
    $(window).on("load", function () {
        if ($("#preloader").length) {
            $("#preloader")
                .delay(100)
                .fadeOut("slow", function () {
                    $(this).remove();
                });
        }
    });

    function loadFromFolder(folderName, filterName) {
        $(".carousel-inner").html("");
        let carousel_item_div = document.createElement("div");
        let counter = 1;
        const carousel_item_per_slide = 3; // Number of images to display per slide
        carousel_item_div.setAttribute("class", "carousel-item active");
        const dir = `./img/${folderName}`;
        const fileExtensions = [".png", ".jpg"];

        $.ajax({
            url: dir,
            success: function (data) {
                $(data)
                    .find(`a:contains(${fileExtensions[0]}), a:contains(${fileExtensions[1]})`)
                    .each(function () {
                        if (counter > 3 && counter % carousel_item_per_slide === 1) {
                            carousel_item_div = document.createElement("div");
                            carousel_item_div.setAttribute("class", "carousel-item");
                        }

                        let filename = this.href.replace(window.location.origin + "/", "");
                        let slide_item = document.createElement("div"); // Create a <div> for the slide item
                        slide_item.setAttribute("class", `col-md-4 mb-4 portfolio-item ${filterName}`);
                        
                        let card_div = document.createElement("div");
                        card_div.setAttribute("class", "card");
                        
                        let img = document.createElement("img");
                        img.src = filename;
                        img.classList.add("img-fluid");
                        
                        card_div.appendChild(img);
                        slide_item.appendChild(card_div);
                        carousel_item_div.appendChild(slide_item);
                        counter++;

                        $(".carousel-inner").append(carousel_item_div);
                    });
            },
            error: function () {
                console.error("Failed to load images from the directory.");
            }
        });
    }

    // Toggle .header-scrolled class to #header when page is scrolled
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $("#header").addClass("header-scrolled");
            $("#topbar").addClass("topbar-scrolled");
        } else {
            $("#header").removeClass("header-scrolled");
            $("#topbar").removeClass("topbar-scrolled");
        }
    });

    if ($(window).scrollTop() > 100) {
        $("#header").addClass("header-scrolled");
        $("#topbar").addClass("topbar-scrolled");
    }

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $(".back-to-top").fadeIn("slow");
        } else {
            $(".back-to-top").fadeOut("slow");
        }
    });

    $(".back-to-top").click(function () {
        $("html, body").animate(
            {
                scrollTop: 0,
            },
            1500,
            "easeInOutExpo"
        );
        return false;
    });

    // Portfolio isotope and filter
    $(window).on("load", function () {
        loadFromFolder("Latest", "filter-latest");
        const portfolioIsotope = $(".portfolio-container").isotope({
            itemSelector: ".portfolio-item",
        });

        $("#portfolio-filters li").on("click", function (event) {
            const folderName = event.target.innerHTML;
            const filter = event.target.dataset.filter;
            loadFromFolder(folderName, filter);
            $("#portfolio-filters li").removeClass("filter-active");
            $(this).addClass("filter-active");
            portfolioIsotope.isotope({
                filter: $(this).data("filter"),
            });
            aos_init();
        });

        // Initiate venobox (lightbox feature used in portfolio)
        $(document).ready(function () {
            $('[data-spy="scroll"]').each(function () {
                $(this).scrollspy("refresh");
            });
            $(".venobox").venobox();
        });
    });

    // Init AOS - Animate on scroll library
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }
    aos_init();
})(jQuery);
