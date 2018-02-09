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

    // Start de application 
    app.init();
})()
