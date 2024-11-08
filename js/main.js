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
      var carousel_item_div = document.createElement("div");
      var counter = 1;
      var carousel_item_per_slide = 3; // number of image to display per slide
      carousel_item_div.setAttribute("class", "carousel-item active");
      var dir = "./img/" + folderName;
      // $pattern="(\.jpg$)|(\.png$)|(\.jpeg$)|(\.gif$)"; //valid image extensions
      var fileextension = [".png", ".jpg"];
      $.ajax({
        url: dir,
        success: function (data) {
          $(data)
            .find(
              "a:contains(" +
                fileextension[0] +
                "), a:contains(" +
                fileextension[1] +
                ")"
            )
            .each(function () {
              console.log("counter" + counter);
              if (counter > 3 && counter % carousel_item_per_slide == 1) {
                carousel_item_div = document.createElement("div");
                carousel_item_div.setAttribute("class", "carousel-item");
              }
  
              if (window.location.protocol === "http:")
                var filename = this.href
                  .replace(window.location.host, "")
                  .replace("http:///", "");
              if (window.location.protocol === "https:")
                var filename = this.href
                  .replace(window.location.host, "")
                  .replace("https:///", "");
              console.log("filename================" + filename);
              var slide_item = document.createElement("div"); // Create a <button> div.
              let attributeValue = "col-md-4 mb-4 portfolio-item" + filterName;
              slide_item.setAttribute("class", attributeValue);
              var card_div = document.createElement("div");
              card_div.setAttribute("class", "card");
              var img = document.createElement("img");
              img.src = filename;
              img.classList.add("img-fluid");
              card_div.appendChild(img);
              slide_item.appendChild(card_div);
              carousel_item_div.appendChild(slide_item);
              counter = counter + 1;
              $(".carousel-inner").append(carousel_item_div);
            });
        },
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
  
    // Porfolio isotope and filter
    $(window).on("load", function () {
      loadFromFolder("Latest","filter-latest");
      var portfolioIsotope = $(".portfoilo-container").isotope({
        itemSelector: ".portfolio-item",
      });
      $("#portfolio-filters li").on("click", function (event) {
        let folderName=event.target.innerHTML;
        let filter = event.target.dataset.filter;
        console.log(folderName+ "====" +filter);
        loadFromFolder(folderName,filter);
        $("#portfolio-filters li").removeClass("filter-active");
        $(this).addClass("filter-active");
        portfolioIsotope.isotope({
          filter: $(this).data("filter"),
        });
        aos_init();
      });
      // Initiate venobox (lightbox feature used in portofilo)
      $(document).ready(function () {
        $('[data-spy="scroll"]').each(function () {
          var $spy = $(this).scrollspy("refresh");
        });
        $(".venobox").venobox();
      });
    });
  
    //Init AOS -Animate on scroll library
    function aos_init() {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    }
    aos_init();
  })(jQuery);