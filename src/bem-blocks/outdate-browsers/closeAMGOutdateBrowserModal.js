/**
 * Close AstraMediaGroup outdade browsers modal
 *
 * @class
 * @name closeAMGOutdateBrowserModal
 * @version 1.0.0
 * @author Igor Timohin <timohin.i@gmail.com>
 *
 * @param {string} cross - CSS class of Cross icon in head of modal
 * @param {string} btn - CSS class of "Thanks" text-btn in modal footer
 * @param {string} capWrapper - CSS class of Modal wrapper
 * @param {string} classFromBodyRemove - CSS class, which need to remobe from body tag when close modal
 *
 * @example
 * closeAMGOutdateBrowserModal();
 */
var closeAMGOutdateBrowserModal = function(cross, btn, capWrapper, classFromBodyRemove){
    cross = cross || "amg-outdate__close";
    btn = btn || "amg-outdate__btn-thx";
    capWrapper = capWrapper || "amg-outdate-wrapper";
    classFromBodyRemove = classFromBodyRemove || 'amg-outdate-modal-opened';

    /**
     * @param {string} modalCross - Cross icon in head of modal
     * @param {string} modalBtn - "Thanks" text-btn in modal footer
     * @param {string} modalWrapper - Modal wrapper
     * @param {string} documentBody - body html tag
     * @param {RegExp} removeClassRegExp - RegExp for removing CSS class
     */
    var modalCross = document.getElementById(cross),
        modalBtn = document.getElementById(btn),
        modalWrapper = document.getElementById(capWrapper),
        documentBody = document.body,
        removeClassRegExp = new RegExp("(^|\\s)" + classFromBodyRemove + "(\\s|$)", "g");

    // Hide modal and remove CSS class from body by click on cross
    modalCross.onclick = function() {
        modalWrapper.style.display = "none";
        documentBody.className = documentBody.className.replace(removeClassRegExp, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
    };

    // Hide modal and remove CSS class from body by click on "Thanx" text-button
    modalBtn.onclick = function() {
        modalWrapper.style.display = "none";
        documentBody.className = documentBody.className.replace(removeClassRegExp, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
    };

    // Hide modal and remove CSS class from body by pressing Esc keyboard button
    document.onkeydown = function(event) {
        events = event || window.event;
        if (event.keyCode == 27) {
            modalWrapper.style.display = "none";
            documentBody.className = documentBody.className.replace(removeClassRegExp, "$1").replace(/\s+/g, " ").replace(/(^ | $)/g, "")
        }
    };

}

closeAMGOutdateBrowserModal();
