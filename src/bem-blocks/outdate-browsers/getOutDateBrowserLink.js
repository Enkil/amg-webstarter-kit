/**
 * Get outdate browser link in AMG modal cap and set up css class to it
 *
 * @class
 * @name getOutDateBrowserLink
 * @version 1.0.0
 * @author Igor Timohin <timohin.i@gmail.com>
 * @requires detectBrowser
 *
 * @param {string} browserLinksClass - CSS class off browsers links
 * @param {string} classToAdd - CSS class, which will be added to user current browsers link
 * @param {string} dataset - data-attribute of browsers links with browsers name, to compare current user browser and browsers link
 * @param {string } capWrapper - Modal wrapper
 * @param {string } classToBodyAdd - CSS class which added to document.body when modal opened
 *
 * @example
 * setUpLink = new getOutDateBrowserLink();
 */
var getOutDateBrowserLink = function(browserLinksClass, classToAdd, dataset, capWrapper, classToBodyAdd) {
    browserLinksClass = browserLinksClass || '.amg-outdate__browser';
    classToAdd = classToAdd || ' amg-outdate__browser--isUsed';
    dataset = dataset || 'data-browser';
    capWrapper = capWrapper || 'amg-outdate-wrapper';
    classToBodyAdd = classToBodyAdd || 'amg-outdate-modal-opened';

    var browser = new RegExp('chrome|opera|mozilla|msie', 'i'),
        version = new RegExp('^6{1}|^7{1}|^8{1}|^9{1}|^38{1}|^39{1}|^40{1}');
    var modalWrapper = document.getElementById(capWrapper),
        documentBody = document.body;

    /**
     * Test browser and version and show modal if needed
     */
    if (userBrowserIs.getBrowser() == 'safari' && userBrowserIs.getVersion() == '7' ) {
        modalWrapper.style.display = 'block';
        documentBody.className += (' ' + classToBodyAdd);
    } else if (browser.test(userBrowserIs.getBrowser()) && version.test(userBrowserIs.getVersion()) ) {
        modalWrapper.style.display = 'block';
        documentBody.className += (' ' + classToBodyAdd);
    }

    var browserLinks = document.querySelectorAll(browserLinksClass);

    /**
     * Check which browser link mateches current users browser and add special CSS class to it
     */
    if (browserLinks.length) {
        for (var i = 0; i < browserLinks.length; i++) {
            if (browserLinks[i].getAttribute(dataset) == userBrowserIs.getBrowser()) {
                browserLinks[i].className += (' ' + classToAdd);
            }
        }
    }

}

getOutDateBrowserLink();

