function testWebP(callback) {
  var webP = new Image();
  webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
  };
  webP.src =
    "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
  if (support == true) {
    document.querySelector("body").classList.add("webp");
  } else {
    document.querySelector("body").classList.add("no-webp");
  }
});

$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger,.header_navigation").toggleClass("active");
  });
  $(".acordion_item_trigger").click(function () {
    $(this).toggleClass("acordion_item_trigger_active");
    $(this).next(".acordion_item_content").slideToggle();
  });
});

new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper_button_next",
    prevEl: ".swiper_button_prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {},
  },
});


/*
jQuery(function($) {
  function fixDiv() {
    var $cache = $('#header_nav');
    if ($(window).scrollTop() > 80)
      $cache.css({
        'position': 'fixed',
        'top': '0px'
      });
    else
      $cache.css({
        'position': 'relative',
      });
  }
  $(window).scroll(fixDiv);
  fixDiv();
});
$(document).ready(function() {
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 110) {
      $("#header_burger").addClass("scrolled");
    } else {
      $("#header_burger").removeClass("scrolled");
    }
  });
});*/