(function($) {
    var updirection = true;
    var x = 0;
    var y = 0;
    var banner = $("#banner");
    
    banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
    
    window.setInterval(function() {
        banner.css('backgroundPosition', x + 'px' + ' ' + y + 'px');
        y--;
    }, 40);
    
}) (jQuery);