let square = document.querySelector("#square");

let x = 0;
let y = 0;

var keyState = {};


function KeyboardController(keys, repeat) {

    var timers = {};

    document.onkeydown = function (event) {
        console.log(event);
        var key = (event || window.event).keyCode;
        if (!(key in keys))
            return true;
        if (!(key in timers)) {
            timers[key] = null;
            keys[key]();
            if (repeat !== 0)
                timers[key] = setInterval(keys[key], repeat);
        }
        return false;
    };

    document.onkeyup = function (event) {
        var key = (event || window.event).keyCode;
        if (key in timers) {
            if (timers[key] !== null)
                clearInterval(timers[key]);
            delete timers[key];
        }
    };

    window.onblur = function () {
        for (key in timers)
            if (timers[key] !== null)
                clearInterval(timers[key]);
        timers = {};
    };
};
KeyboardController({
    37: function() {    
        x-- 
        square.style.left = x + "px";
    },
    38: function() { 
        y--
        square.style.top = y + "px";
    },
    39: function() {
        x++
        square.style.left = x + "px";
    },
    40: function() { 
        y++
        square.style.top = y + "px";
    }
}, 10);




