//Count to Script
(function($){
    $.fn.countTo = function(options){
        return this.each(function(){
            var FRAME_RATE = 60;
            
            var $el = $(this);
            var countFrom = 
                parseInt($el.attr('data-count-from'));
            var countTo = 
                parseInt($el.attr('data-count-to'));
            var countSpeed = $el.attr('data-count-speed');
            
            
            var rafId;
            var increment;
            var currentCount = countFrom;
            var countAction = function(){
                if(currentCount < countTo) {
                    $el.text(Math.floor(currentCount));
                    
                    increment = countSpeed / FRAME_RATE;
                    
                    currentCount += increment;
                    
                    rafId = requestAnimationFrame(countAction);
                } 
                else{
                    $el.text(countTo);
                }
            };
            rafId = requestAnimationFrame(countAction);
        });
    };
}(jQuery));

$('.number-counter').countTo();