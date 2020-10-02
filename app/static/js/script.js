// maak een object vd dingen in de opdracht
// dit is een object literal - dit heeft key value pairs. in dit geval is init de key en function is de pair
// create local scope - dus alle code die er staat, staat in de scope van de IIFE

// import router from './router.js';

import api from './api.js';
import collection from './collection.js';
import render from './renderHTML.js'

'use strict';

// console.log('global scope');

(function() {
  // initialize application
  var app = {
    // hieronder is een method
    init: function() {
      routes.init()
    }
  }

  // handle routes and states
  var routes = {
    init: function() {
      var route = location.hash
      sections.toggle(route)
      route != '' ? sections.toggle(route) : window.location.hash = '#home'
      window.addEventListener('hashchange', function() {
        sections.toggle(window.location.hash)
      })
    }
  }

  // Render toggle sections
  var sections = {
    toggle: function(route) {
      var elements = document.querySelectorAll('section');
      // loop-ed door alle sections heen & adds class .hidden
      elements.forEach(function(el) {
        '#' + el.id == route ? el.classList.remove('hidden') : el.classList.add('hidden')
      })
    }
  }


  routie({
    'home': function() {
      api.firstCall('https://pokeapi.co/api/v2/pokemon/?limit=155')
    },
    'details/?:name': function(name) {
      console.log(name)
      api.secondCall(`http://pokeapi.co/api/v2/pokemon/${name}`)
    }
  })

  app.init()
})()