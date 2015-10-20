window.onload = function(){

    /**
     * Init Images lazy loading
     * https://github.com/verlok/lazyload
     * DO NOT set src attribute to img tag.
     * SET data-original="path_to_img"
     * SET CSS class .lazyload to all img tags
     * Example: <img class="lazyload" data-original="img/img.png" alt="alt text" title="title text">
     **/
    var AMGLazyLoad = new LazyLoad({
        elements_selector: ".lazyload", // img
        data_srcset: "original", // original-set
        skip_invisible: false
    });

    // Call Owl-Carousel on header slider
    $(".js-owl-top-slider").owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        navContainer: ".owl-own-nav",
        navText:[],
        loop: true
    });

    // Center header slider dots
    positionedAbsoluteElementHorizontalCenter('.js-owl-top-slider','.owl-dots');

    // Call Owl-Carousel on our works block if there os more than 4 works
    setOwlCarouselIfMoreThen(".js-owl-works-slider", 4, ".owl-own-nav-works");

    // Call Owl-Carousel on projects block if there os more than 4 works
    setOwlCarouselIfMoreThen(".js-owl-projects-slider", 3, ".owl-own-nav-projects");

    // Call Owl-Carousel on partners block if there os more than 4 works
    setOwlCarouselIfMoreThen(".js-owl-partners-slider", 4, ".owl-own-nav-partners");

    // Call Owl-Carousel on video block if there os more than 4 works
    setOwlCarouselIfMoreThen(".js-owl-video-slider", 3, ".owl-own-nav-video");

    // Find html5 video and activate
    //videoHTML5Youtube();
};

