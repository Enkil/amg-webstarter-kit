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


/**
 * Centering element with position: absolute in container block
 */
function positionedAbsoluteElementHorizontalCenter(containerSelector,elementSelector){

    if (document.querySelector(containerSelector)) {
        var container = document.querySelector(containerSelector),
            element = container.querySelector(elementSelector),
            elementWidth = element.clientWidth,
            containerWidth = container.clientWidth,
            leftIndent = (containerWidth / 2) - (elementWidth / 2);
        element.style.left = ''+leftIndent+'px';
    }
}
/* Call Owl Carousel if there is more items in block then need */

function setOwlCarouselIfMoreThen(container, count, navContainer) {
    navContainer = navContainer || false; // navContainer is optional argument, if it is not set - use default "false

    if (document.querySelector(container)) {
        var items = document.querySelector(container).children;

        if (items.length) { // check if there is children in container
            if (items.length > count ) { // call Owl if items more then count
                $(container).owlCarousel({
                    dots: false,
                    nav: true,
                    navContainer: navContainer,
                    navText:[],
                    loop: true,
                    responsive : {
                        // breakpoint from 740 up
                        300 : {
                            items: 1,
                            margin: 10
                        },
                        // breakpoint from 740 up
                        770 : {
                            items: 2,
                            margin: 10
                        },
                        // breakpoint from 1300 up
                        1300 : {
                            items: count,
                            margin: 30
                        }
                    }
                });
            }
        }
    }
}


var videoHTML5Youtube = function () {
    var videos = document.querySelectorAll("video");
    for (var i = 0, l = videos.length; i < l; i++) {
        var video = videos[i];
        var src = video.src || (function () {
                var sources = video.querySelectorAll("source");
                for (var j = 0, sl = sources.length; j < sl; j++) {
                    var source = sources[j];
                    var type = source.type;
                    var isMp4 = type.indexOf("mp4") != -1;
                    if (isMp4) return source.src;
                }
                return null;
            })();
        if (src) {
            var isYoutube = src && src.match(/(?:youtu|youtube)(?:\.com|\.be)\/([\w\W]+)/i);
            if (isYoutube) {
                var id = isYoutube[1].match(/watch\?v=|[\w\W]+/gi);
                id = (id.length > 1) ? id.splice(1) : id;
                id = id.toString();
                var mp4url = "http://www.youtubeinmp4.com/redirect.php?video=";
                video.src = mp4url + id;
            }
        }
    }
};

