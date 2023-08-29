"use strict";
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav-links");
const navDiv = document.querySelector(".nav");
const shadow = "rgba(0, 0, 0, 0.3) 0px 0px 0px 1000vmax"; //0 0 0 1000vmax rgba(0,0,0,0.3)
const noShadow = " rgba(0, 0, 0, 0) 0px 0px 0px 1000vmax";
menuBtn.addEventListener('click', () => {
    var _a, _b;
    if (!nav.classList.contains('rollDown')) {
        nav.classList.toggle('rollDown');
        nav.classList.remove('rollUp');
        navDiv.style.boxShadow = shadow;
        (_a = menuBtn.firstElementChild) === null || _a === void 0 ? void 0 : _a.setAttribute('src', './images/icon-close.svg');
    }
    else {
        nav.classList.add('rollUp');
        nav.classList.remove('rollDown');
        nav.addEventListener('animationend', () => {
            nav.classList.remove('rollUp');
        });
        navDiv.style.boxShadow = noShadow;
        (_b = menuBtn.firstElementChild) === null || _b === void 0 ? void 0 : _b.setAttribute('src', './images/icon-hamburger.svg');
    }
});
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && navDiv.style.boxShadow == shadow) {
        navDiv.style.boxShadow = noShadow;
    }
    else if (window.innerWidth < 768 && nav.classList.contains('rollDown')) {
        navDiv.style.boxShadow = shadow;
    }
});
