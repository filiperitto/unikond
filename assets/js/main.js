$(document).ready(function () {

    // MAIN MENU ANIMATION
    // Menu change
    $(this).scrollTop(0); // importante <--
    var nav = $('header');


    $(window).scroll(function () {
        if ($(window).scrollTop() > 10) {
            nav.addClass("active");
        } else {
            nav.removeClass("active");
        }
    });

    // Hamburg Menu animation
    
    $('.hamb').click(function () {
        $('.hamb').toggleClass('open');
        $('nav').toggleClass('open');
    });



    
});


// Cache selectors
var lastId,
topMenu = $(".menu-item"),
// All list items
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
        return item;
    }
});
// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function (e) {

var href = $(this).attr("href")
//offsetTop = href === "#" ? 0 : $(href).offset().top+2;  
$('html, body').stop().animate({
    scrollTop: href === "#" ? 0 : $(href).offset().top - 80
}, 1000);

e.preventDefault();
});

var swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      type: 'fraction',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // Accordion

$(document).ready(function () {
    'use strict';

    $('.accordion-group').ariaAccordion({
        //expandOnlyOne: true,
        slideSpeed: 550
    });

});