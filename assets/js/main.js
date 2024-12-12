// side menu
 function openNav() {
   document.getElementById("mySidenav").classList.add("open");
  document.body.classList.add("content-shift");
 }

 function closeNav() {
  document.getElementById("mySidenav").classList.remove("open");
  document.body.classList.remove("content-shift");
 }


(function ($) {
  "use strict";


    document.addEventListener("scroll", () => {
      const cards = document.querySelectorAll(".card-wrapper");
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top <= 10 && rect.bottom > window.innerHeight / 4) {
          card.classList.add("sticky");
        } else {
          card.classList.remove("sticky");
        }
      });
    });



  function thmSwiperInit() {
    // swiper slider
    if ($(".thm-swiper__slider").length) {
      $(".thm-swiper__slider").each(function () {
        let elm = $(this);
        let options = elm.data("swiper-options");
        let thmSwiperSlider = new Swiper(elm, options);
      });
    }
  }

  function thmOwlInit() {
    // owl slider

    if ($(".thm-owl__carousel").length) {
      $(".thm-owl__carousel").each(function () {
        let elm = $(this);
        let options = elm.data("owl-options");
        let thmOwlCarousel = elm.owlCarousel(options);
      });
    }
  }






  if ($(".wow").length) {
    var wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      mobile: true,
      live: true
    });
    wow.init();
  }



  // window load event

  $(window).on("load", function () {
    thmSwiperInit();
    thmOwlInit();
  });



})(jQuery);