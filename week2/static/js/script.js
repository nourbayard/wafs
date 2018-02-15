'use strict';

console.log('global scope');
(function(){

  const fetchAsync = async () =>
  await (await fetch('https://pokeapi.co/api/v2/pokemon/?limit=151')).json()
  fetchAsync()
    .then((data) => {
      console.log(data)
    })
    .catch(reason => console.log(reason.message))

  console.log('var app works');

  var app = {
    init: function(){
      routes.init()
      console.log('hallo')
    }
  }

    var routes = {
      //hieronder is een method
      // render.all & render.detail
      init: function(){

        routie({
          'pokemon': function(){
            console.log('hey this actually works!');
          },
          'details': function(){
            api.getData()
            console.log('and this works too!');
          }
        })
      }
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
        console.log('de route werkt');
        var xhr = new XMLHttpRequest('GET', this.url+ '?api-key' +this.key, true); // hier gaan we de ajax initieren + url meegeven
      }

      // door naar collection eerst ?? maybe
      // template.init();
    }

    // var collection = { // coll. obj aangemaakt 'database' waar je data in opslaat, daarin staat een filter methode in + data die je wil filteren // keyword ingevuld  in dat formulier
    //   allStories: function(data){
    //
    //       template.render()
    //   },
    //
    //   filter: function(data, keyword){
    //     // data.filter(function(item){
    //     //   return item.title === keyword;
    //       // return item.title.contains(keyword);
    //     });
    //   }
    //   // template.init()
    // }

    // var template = {
    //  //.render(data)
    //  //.toggle
    //  template.render(data)
    //
    //   render: function(){
    //
    //   }
    //
    //   template.toggle(data)
    //
    //   toggle: function(){
    //
    //   }
    //
    // }



  app.init()
})();
