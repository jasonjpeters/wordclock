'use strict';

(function($){
    $(document).ready(function(){

        var time,
            hour,
            minute;

        function getTime(){
            time    = new Date();
            hour    = time.getHours() >= 12 ? time.getHours() - 12: time.getHours();
            minute  = time.getMinutes();
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