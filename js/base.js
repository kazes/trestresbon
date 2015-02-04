/*------------------------------------------------------------------------------
    JS Document (https://developer.mozilla.org/en/JavaScript)

    project:    Très Très Bon
    created:    2015-02-02
    author:     kazes
    
----------------------------------------------------------------------------- */


/*  =CONSTANTES
----------------------------------------------------------------------------- */
var d = document;
var w = window;
pm = {};
var debug = /localhost|127.0.0.1/.test(document.location.host);


/*  =WINDOW.ONLOAD
----------------------------------------------------------------------------- */
$(d).ready(function(){

    // call functions
    pm.example();                 // just an example


});


/*  =EXAMPLE
----------------------------------------------------------------------------- */
pm.example = function() {
    if (debug)console.log('example');


    // source : http://www.paris-premiere.fr/emission-tres_tres_bon

    /*
     Émission 1
     Commerce de bouche: TASCA - 37, rue du Roi de Sicile Paris, 75004 
     Dossier Anguille:
     - NODAIWA - 272 Rue Saint Honoré, 75001
     - OFFICINA SCHENATTI - 15 Rue Frédéric Sauton, 75005
     - LES DESERTEURS - 46 Rue Trousseau, 75011
     Table de la semaine: MOLITOR - 10, Avenue de la Porte Molitor, 75016
     Street-Food: COMPTOIR URBAIN - 12, Rue de Paradis, 75010
     Bec Sucré: WE ARE TIRAMISU - 10, Rue Bayen, 75017

     Émission 2
     Commerce de bouche: JOYA MIA - 96 Rue de Charenton, 75012
     Dossier Bière:
     - BIEROCRATIE : 32 Rue de l'Espérance, 75013
     - DECK AND DONOHUE - 71 Rue de la Fraternité, 93100 Montreuil
     - LA FINE MOUSSE - 6 Avenue Jean Aicard, 75011
     Table de la semaine: GINZA ONODERA - 18 Rue du Louvre, 75001
     Street-Food: BOTTEGA ROMANA - 60 Rue La Boétie, 75008
     Bec Sucré: CHAMBELLAND - 14 Rue Ternaux, 75011

     */


    $.ajax({
        url : "json/places.json",
        type : 'GET',
        success : function(data){
            var places = data.places;

            var result = "";

            for (var i = 0; i < places.length; i++) {
                var place = places[i];
                if (debug)console.log('place', place);

                for(var prop in place){
                    // filter by category (example)
                    if(place.hasOwnProperty(prop) && place['category'] == 0) {
                        if (debug)console.log('prop', prop);
                        if(prop !== 'category' && prop !== 'episode' && prop !== 'season'){
                            result += prop + " : " + place[prop] + "<br>";
                        }
                    }
                }
                result += '<br>';
            }

            // display results
            $('#places').html(result);
        },
        fail:function(){
            console.error('Load Ajax failed');
        }
    });
};











