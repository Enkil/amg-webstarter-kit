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
