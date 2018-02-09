console.log('Global scope');

// Create local scope d.m.v. een 'immediate invoked function expression'
(function(){
    "use strict"

    console.log('Local scope');
    // Initialize application
    var app = {
        // Method - key: value
        init:function (){
            console.log('App initialized');
            routes.init();
        },
        // Property
        rootElement: document.body
    }

    // Handle routes & state
    var routes = {
        init:function () {
            console.log('Route initialized')
            window.addEventListener("hashchange", function(){
                var route = location.hash
                sections.toggle(route)
                console.log(location.hash)
            });
        }
    }

    // Render / toggle sections
    var sections = {
        hide: function() {
            var sections = document.querySelectorAll('section')
            for (var i = 0; i < sections.length; i++) {
                sections[i].classList.remove("active")
            }
        },

        toggle:function(route) {
            // Activeer functie om alle classes te hiden
            this.hide();

            // Hash binnanhalen die route meegeeft en de class active toevoegen
            document.querySelector(route).classList.add('active')
            console.log(route)
        }
    }

  // bovenste stukje code is goed! alleen het kan wat korter/netter: zie code beneden - pas wel de classes aan die van toepassing zijn op jouw website
  // var sections = {
  //   toggle: function(route){
  //
  //     var elements = document.querySelectorAll('section');
  //     // loop-ed door alle sections heen & adds class .hidden
  //       elements.forEach(function(el){
  //         if('#' + el.id === route){
  //         el.classList.remove('hidden')
  //       }
  //       else{
  //         el.classList.add('hidden')
  //       }
  //     })
  //   }
  // }

    // Start de application
    app.init();
})()
