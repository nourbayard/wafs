// maak een object vd dingen in de opdracht
// dit is een object literal - dit heeft key value pairs. in dit geval is init de key en function is de pair
// create local scope - dus alle code die er staat, staat in de scope van de IIFE
//console.log('global scope');
(function(){
  'use strict';
  //Initialize application
  var app = {
    //hieronder is een method
    init: function(){
      //console.log('app initialized');
      //console.log(location.hash);
      routes.init(); // hier in moet de hashchange
    }
  }

  // Handle routes and states
  var routes = {
    init: function(){
      // whats in the hash? / wat zit er in de link/# ?
      var route = location.hash
      sections.toggle(route)

      // Als de route niet leeg is, ga dan door naar route, als de route wel leeg is, begin dan bij #start
      route != '' ? sections.toggle(route) : window.location.hash = '#start'

      window.addEventListener('hashchange', function() {
          sections.toggle(window.location.hash) // pakt de section met de # waar de link (aan het einde) naar veranderd
      })
    }
  }

  // Render toggle sections
  var sections = {
    toggle: function(route){

      var elements = document.querySelectorAll('section');

      // Als de hashtag + element id WEL gelijk staat aan de route, verwijder de klas hidden.
      // Staat de hasthag + element id NIET gelijk aan de route, voeg de class hidden toe. 
      elements.forEach(function(el){
        '#' + el.id === route ? el.classList.remove('hidden') : el.classList.add('hidden')
      })
    }
  }

  // Start the application
  //app.init app = object, init = method
  app.init()
})()
