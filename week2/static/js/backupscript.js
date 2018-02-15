// maak een object vd dingen in de opdracht
// dit is een object literal - dit heeft key value pairs. in dit geval is init de key en function is de pair
// create local scope - dus alle code die er staat, staat in de scope van de IIFE

'use strict';

// render.all & render.detail
console.log('global scope');
(function(){

  // var config = {
  //   url: 'https://pokeapi.co/api/v2/pokemon/?limit=151'
  // }
  var app = {
    init: function(){
      router.init(){
      };
    }

    // const fetchAsync = async () =>
    // await (await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')).json()
    //
    // fetchAsync()
    //   .then((data) => {
    //
    //     console.log(data)
    //   })
    //   .catch(reason => console.log(reason.message))

    console.log('var app works');
  }

  var router = {
    //hieronder is een method
    init: function(){
        routie({
        'pokemon': function() {

        },

        'details': function() {
          api.getData();        // api.getStory
        },

        'details:/id':function(id){ // 'stories:id'
          api.getData(id)     // api.getStories


        //  'details:/id':function(id){ // 'stories:id'
            //api.getData(id)     // api.getStories
      //       console.log('gfvgjbh');
          }

        },

        // '*': function(){
        //
        // }

      });
    };
      // door naar api
      // api.init()
  }

  var api = {
    //.getData -> hier een XHR http req. doen ('get', [url])
    // boven een ajax call doen
    //xhr.onload() -> hier verwijzen naar de render functie in template
    url: 'https://pokeapi.co/api/v2/pokemon/?limit=151',
    key: 123456789,
    getData: function(route){
      // var xhr = new XMLHttpRequest('GET', url, true); // hier gaan we de ajax initieren + url meegeven

      var xhr = new XMLHttpRequest('GET', this.url+ '?api-key' +this.key, true); // hier gaan we de ajax initieren + url meegeven
    }

    // door naar coll ? / door naar template
    // template.init()
  }

  var collection = { // coll. obj aangemaakt 'database' waar je data in opslaat, daarin staat een filter methode in + data die je wil filteren // keyword ingevuld  in dat formulier
    allStories: function(data){

        template.render()
    },

    filter: function(data, keyword){
      data.filter(function(item){
        return item.title === keyword;
        // return item.title.contains(keyword);
      });
    }
    // template.init()
  }

  var template = {
   //.render(data)
   //.toggle
   template.render(data)
    render: function(){

    }
  }



  //Initialize application WEEK 1
  // var app = {
  //   //hieronder is een method
  //   init: function(){
  //     //console.log('app initialized');
  //     //console.log(location.hash);
  //     routes.init(); // hier in moet de hashchange
  //   }
  // }

  // // Handle routes and states WEEK 1
  // var routes = {
  //   init: function(){
  //     // whats in the hash? / wat zit er in de link/# ?
  //     var route = location.hash
  //     sections.toggle(route)
  //
  //     route != '' ? sections.toggle(route) : window.location.hash = '#start'
  //
  //     window.addEventListener('hashchange', function() {
  //         sections.toggle(window.location.hash) // pakt de section met de # waar de link (aan het einde) naar veranderd
  //     })
  //   }
  // }


  // Render toggle sections WEEK 1
  // var sections = {
  //   toggle: function(route){
  //
  //     var elements = document.querySelectorAll('section');
  //
  //     // loop-ed door alle sections heen & adds class .hidden
  //     elements.forEach(function(el){
  //       '#' + el.id === route ? el.classList.remove('hidden') : el.classList.add('hidden')
  //     })
  //   }
  // }

  app.init()
})()
