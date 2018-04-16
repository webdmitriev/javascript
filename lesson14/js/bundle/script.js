window.addEventListener('DOMContentLoaded', function() {

    /*Урок 14*/
    let ajax = require('../parts/ajax.js'),
        animateMenu = require('../parts/animateMenu.js'),
        calc = require('../parts/calc.js'),
        modal = require('../parts/modal.js'),
        slider = require('../parts/slider.js'),
        tab = require('../parts/tab.js'),
        timer = require('../parts/timer.js');

    ajax();
    animateMenu();
    calc();
    modal();
    slider();
    tab();
    timer();        
});
