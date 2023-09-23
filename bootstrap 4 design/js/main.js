$(function () {
    'use strict';
    //adjust slider height
    var winH = $(window).height(),
    upperH = $('.upper-bar').innerHeight(),
    navH = $('.navbar').innerHeight();
    $('.slider, .carousel-item').height(winH - ( upperH + navH ));

    //featured work shuffle
    $('.featured-work ul li').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        if($(this).data('class') === 'all') {
            $('.shuffle .col-sm').css('opacity' , 1);
        } else{
            $('.shuffle .col-sm').css('opacity' , '.08');
            $($(this).data('class')).parent().css('opacity' , 1);
        }
    });

});