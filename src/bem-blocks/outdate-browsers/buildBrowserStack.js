/**
 * Set current user browser link to browserStack block center
 *
 * @class
 * @name buildBrowserStack
 * @version 1.0.0
 * @author Igor Timohin <timohin.i@gmail.com>
 * @requires getOutDateBrowserLink
 *
 * @param {string} browserLinksClass - CSS class to find all browsers link
 * @param {string} classToCheck - CSS class to check current browser (this class placed by getOutDateBrowserLink.js)
 * @param {string} browsersStackClass - CSS class to find browsersStack
 *
 * @example
 * buildBrowserStack();
 */
var buildBrowserStack = function(browserLinksClass, classToCheck, browsersStackClass) {
    browserLinksClass = browserLinksClass || '.amg-outdate__browser';
    classToCheck = classToCheck || 'amg-outdate__browser--isUsed';
    browsersStackClass = browsersStackClass || '.amg-outdate__browsers-stack';

    var browsersStack = document.querySelector(browsersStackClass);
    var browsersLinks = document.querySelectorAll(browserLinksClass);

    if (browsersLinks.length) {
        /**
         * Go throw browsersLinks and find link with classToCheck, than cache it position in browserLinksClass
         */
        for (i = 0; i < browsersLinks.length; i++) {
            if (browsersLinks[i].className.match(new RegExp('(\\s|^)' + classToCheck + '(\\s|$)'))) {
                var browsersLinkPosition = i;
            }
        }

        /**
         * Cache current position if outdate browser link and IE link (before IE link is in center by default)
         */
        var browsersLinksCurrent = browsersLinks[browsersLinkPosition];
        var browsersLinksIE = browsersLinks[2];

        /**
         * Set new position of outdate browser link and IE link
         */
        if (browsersLinkPosition < 2) {
            browsersStack.replaceChild(browsersLinksCurrent, browsersLinksIE);
            browsersStack.insertBefore(browsersLinksIE, browsersLinks[0])
        } else if (browsersLinkPosition > 2) {
            browsersStack.replaceChild(browsersLinksCurrent, browsersLinksIE);
            browsersStack.appendChild(browsersLinksIE);
        } else {
            // do nothing
        }

    }
}

buildBrowserStack();
