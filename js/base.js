/*------------------------------------------------------------------------------
    JS Document (https://developer.mozilla.org/en/JavaScript)

    project:    Project
    created:    YYYY-MM-DD
    author:     johdoe
    
----------------------------------------------------------------------------- */


/*  =CONSTANTES
----------------------------------------------------------------------------- */
//jQuery.noConflict();
var d = document;
var w = window;
pm = {};


/*  =UTILITIES
----------------------------------------------------------------------------- */
var log = function(x) {
    if (typeof console != 'undefined') {
        console.log(x);
    }
};


/*  =WINDOW.ONLOAD
----------------------------------------------------------------------------- */
$(d).ready(function(){

    // call functions
    pm.example();                 // just an example


});


/*  =EXAMPLE
----------------------------------------------------------------------------- */
pm.example = function() {
    log('example function');
    
};











