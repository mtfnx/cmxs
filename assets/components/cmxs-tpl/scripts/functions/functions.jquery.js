// (function($, global) {
//     $.fn.debugDashboard = function(options) {
//         var self = this;
//     }
//     var getCurrentTime = function() {
//
//         var currentTime = new Date(),
//             hours = currentTime.getHours(),
//             minutes = currentTime.getMinutes(),
//             seconds = currentTime.getSeconds();
//
//         if (minutes < 10)
//         minutes = "0" + minutes
//
//         if (seconds < 10)
//         seconds = "0" + seconds
//
//         var time = hours + ":" + minutes + ":" + seconds;
//         return time;
//     };
//
//     setInterval(function(){
//         $('.debug span[data-value="currentTime"]').html( getCurrentTime() );
//     }, 1000);
//     var debugVal = function(dataValue, newValue) {
//         $('.debug span[data-value="time"]').html( getCurrentTime() );
//
//         $('.debug span[data-value="' + dataValue + '"]').html(newValue).addClass('updated');
//
//         setTimeout(function() {
//             $('.debug span[data-value]').removeClass('updated');
//         }, 700);
//     };
//
//     var debugInputVal = function(dataValue, newValue) {
//         $('.debug .item__field[data-value="lastTime"]').html( getCurrentTime() );
//         $('.debug .item__field[data-value="' + dataValue + '"]').val(newValue).addClass('updated');
//
//         setTimeout(function() {
//             //$('.debug .item__field[data-value]').removeClass('updated');
//         }, 700);
//     };
//
//     var debugData = function() {
//         var width = global.outerWidth(),
//             height = global.outerHeight(),
//             scrollTop = global.scrollTop();
//
//         $('.debug *[data-value]').each(function(e, v) {
//             var dataValue = $(v).attr('data-value'),
//                 globalWidth = global.outerWidth(),
//                 globalHeight = global.outerHeight(),
//                 setValue;
//
//             if  (dataValue === 'width') {
//                 setValue = globalWidth;
//             } else if  (dataValue === 'height') {
//                 setValue = globalHeight;
//             }
//             debugVal(dataValue, setValue);
//
//         });
//     };
//
//     var headerScroll = function() {
//         var scrollTop = global.scrollTop(),
//             $header = $('.header'),
//             $headerHeight = $header.outerHeight();
//
//         debugInputVal('scrolltop', scrollTop);
//         debugInputVal('headerHeight', $headerHeight);
//
//         if ( scrollTop >= $headerHeight ) {
//             $header.addClass('header--scroll-mode');
//
//         } else if (scrollTop < $headerHeight && $header.hasClass('header--scroll-mode')) {
//             $header.removeClass('header--scroll-mode');
//         }
//     }
//
//     global.on('load', debugData).on('resize', debugData).on('scroll', headerScroll);
// }(jQuery, jQuery(window)));

(function($, global) {
    var header = {
            $: $('.header'),
            onScroll: 'header--onscroll',
            $onScroll: $('.' + this.onScroll),
            outerHeight: $(this).outerHeight(),
            outerWidth: $(this).outerHeight()
        },
        scroll = {
            //    topPos: global.position().top
        };
    //var $header = $('.header');
