/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/tooltip.js
class Tooltip {
  constructor() {
    this.button = document.querySelector('.button');
    this.popover = document.querySelector('.popover');
  }
  onButtonClick() {
    this.button.addEventListener('click', () => {
      this.popover.classList.toggle('active');
    });
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

console.log('app.js bundled');
new Tooltip().onButtonClick();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;