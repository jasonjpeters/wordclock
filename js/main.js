'use strict';

(function($){
    $(document).ready(function(){

        var time,
            hour,
            minute,
            seconds,
            interval;

        function getTime(){
            time    = new Date();
            hour    = time.getHours() >= 12 ? time.getHours() - 12: time.getHours();
            minute  = time.getMinutes();
            seconds = time.getSeconds();
        }

        function round5(x){
            return Math.floor(x/5)*5;
        }

        function updateTime(){
            getTime();
            $('.letter').removeClass('on');
            $('.hour.' + hour).addClass('on');
            $('.minute.' + round5(minute)).addClass('on');
        }

        setInterval(function(){
            updateTime();
        }, 1000);

    });
})(jQuery);