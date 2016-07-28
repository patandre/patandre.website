$('a[href*="#"]:not([href="#"]):not([data-toggle])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html, body').animate({
                scrollTop: target.offset().top -119
            }, 1000);
            return false;
        }
    }
});

/*Doesnt Work well with accordion*/
/*$(function() {
    $('a').click(function() {
        $(this).find('i').toggleClass('fa-minus fa-plus');
    });
});*/