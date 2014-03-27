/*jshint unused:false */
/*global $:false, _:false, Swiper:false, Hammer:false */

/*
 * Nav module for Boston.com prototype
 * by Nathan Hass c/o Upstatement (@upstatement)
 *
 */
$(function() {

    $(function test() {
        var dWidth = $('.device-chrome').width();
        var dRad = (dWidth * .1);
        
        console.log(dWidth);
        console.log(dRad);

        $('.device-chrome').css({
            'border-radius': dRad + 'px'
        });
    });

	var states = 'iphone ipad white';

	var keyObj = {
        49: function() {
            $('.devices-mod').removeClass(states).addClass('iphone');
        },
        50: function() {
            $('.devices-mod').removeClass(states).addClass('ipad');
        },
        51: function() {
            $('.devices-mod').toggleClass('dark').toggleClass('light');
        }
    };

    $(document).on('keydown', function(e) {
        if ($.inArray(e.which + '', Object.keys(keyObj)) >= 0) {
            keyObj[e.which]();
        }
        test();
    });

    $('.device-color').click(function() {
        $('.devices-mod').toggleClass('light');
    });
    
    $('.device-type').click(function() {
        $('.devices-mod').toggleClass('iphone').toggleClass('ipad');
    });

});