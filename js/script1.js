jQuery(function ($) {
    "use strict"
    $('.toggle-submenu-show').on('click', function () {
        $('.toggle-submenu').slideToggle();
    });

    $('.menu-tggle').on('click', function () {
        $('.menu-toggle-bar').addClass('show');

    });

    $('.toggle-close-btn').on('click', function () {
        $('.menu-toggle-bar').removeClass('show');
    });




    $('.menu-search').on('click', function () {
        $('.search-panel').removeClass('popup-hide');
    });

    $('.btn-popup-close').on('click', function () {
        $('.search-panel').addClass('popup-hide');
    });


    $('.video-icon').magnificPopup({
        type: 'iframe'

    });
});