/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(function () {
    $('.mainNavigation > li > a').on('click', function () {
        if ($(this).next().attr('class') !== 'dropdownBox openNav') {
            $('.mainNavigation > li > a').next().removeClass('openNav');
            $(this).next().addClass('openNav');
        } else {
            $(this).next().removeClass('openNav');
        }
    });
    $('.dropdownBox > ul > li > a').on('click', function () {
        if ($(this).next().attr('class') !== 'dropdownBox openNav') {
            $('.dropdownBox > ul > li > a').next().removeClass('openNav');
            $(this).next().addClass('openNav');
        } else {
            $(this).next().removeClass('openNav');
        }
    });
    $('.dropdownBox .ddTitle').on('click', function () {
        if ($(this).attr('class') !== 'ddTitle openNav') {
            $('.dropdownBox .ddTitle').removeClass('openNav');
            $(this).addClass('openNav');
        } else {
            $(this).removeClass('openNav');
        }
    });
    $('.closeNav, #navToggle').on('click', function () {
        $('body').toggleClass('navYes')
    });
});

//Keypress Event for closing opened Main Navigation and Product Filter Navigation
$(document).on('keydown', function (event) {
    if (event.keyCode === 27) {
        var dismisToggle = $('body').attr('class');
        if (dismisToggle !== '') {
            $('body').removeClass('navYes');
        }
    }
});


