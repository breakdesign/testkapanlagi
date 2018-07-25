$(document).ready(function(){
    new WOW().init();
    $(".nav__owl__carousel").owlCarousel({
        dots: false,
        autoWidth: true
    });
    $(".slider__owl__carousel").owlCarousel({
        dots: false,
        items: 1,
    });
    $(".trending__topic__owl__carousel").owlCarousel({
        dots: true,
        items: 1,
    });
    $(".rekomended__topic__owl__carousel").owlCarousel({
        dots: false,
        items: 1.8,
        loop: true,
        margin: 10,
    });
    $('.nav__owl__carousel li a').on('click', function(){
        $('.nav__owl__carousel li.active').removeClass('active');
        $(this).parent().addClass('active');
    });
    $('.popular__content').infiniteScroll({
        // options
        path: 'index-{{#}}.html',
        append: '.content__populer',
        history: false,
        loading: {
            img: 'img/loader.gif',
        }
    });
    $('.search').click(function() {
        $(this).toggleClass('on');
        $('.search_on').slideToggle("slow");
    });
    
});
if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)) {
    var viewportmeta = document.querySelector('meta[name="viewport"]');
    if (viewportmeta) {
        viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, initial-scale=1.0';
        document.body.addEventListener('gesturestart', function () {
            viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.6';
        }, false);
    }
}