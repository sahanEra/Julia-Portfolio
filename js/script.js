'use strict';

/*============================== 
      add event on element 
==============================*/
const addEventOnElem = function (elem, type, callback) {
    if (elem.length > 1) {
        for (var i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback);
        }
    } else {
        elem.addEventListener(type, callback)
    }
}


/*==============================
        Toggle Navbar
==============================*/
const navbar = document.querySelector("[data-navbar]");
const navLinks = document.querySelectorAll("[data-navbar-link]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNav = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("[nav-active]");
}

addEventOnElem(navTogglers, "click", toggleNav);
addEventOnElem(navLinks, "click", toggleNav);


/*==============================
        Active Header
==============================*/
const header = document.querySelector("[data-header]");

const activeHeader = function () {
    if (window.scrollY > 100) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
}

addEventOnElem(window, "scroll", activeHeader);


/*==============================
        Scroll Reveal
==============================*/
const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const revealElementOnScroll = function () {
    for (var i = 0, len = revealElements.length; i < len; i++) {
        if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
            revealElements[i].classList.add("revealed");
        } else {
            revealElements[i].classList.remove("revealed");
        }
    }
}

for (var i = 0, len = revealDelayElements.length; i < len; i++) {
    revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

addEventOnElem(window, "scroll", revealElementOnScroll);
addEventOnElem(window, "load", revealElementOnScroll);