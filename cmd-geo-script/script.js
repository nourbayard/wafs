// Debugging
function _geo_error_handler(code, message) {
    debug_message('geo.js error '+code+': '+message);
}
function debug_message(message){
    (customDebugging && debugId)?document.getElementById(debugId).innerHTML:console.log(message);
}
function set_custom_debugging(debugId){
    debugId = this.debugId;
    customDebugging = true;
}

// Variable declaration
(function () { 
    var app = {
        init: function (){
            position.set();
        }
    },

    var position = {
        set: function (){
            helper.isNumber('1');
            this.check();
        },
        check: function (){
            var el = document.body;
            var self = this;
            this.set();

            el.addEvenetListener('touchstart', function() {
                self.update();
            })
        },
        update: function (){},
        getDistance: function (){},
    },

    var gMap = {
        generation: function (){},
        update: function (){},
    },

    var helper = {
        isNumber: function (){
    
        },
        getElement: function (element){
            return document.querySelector(element);
        },
        getElements: function (element){
            return document.querySelector(element);
        }
    }

    var $ = helper.getElement();

    // Start the app
    app.init();
})();