class Player {
    
    constructor() {
        this.player = document.querySelector("#player");
        console.log(this.player);
        this.x = 50;
        this.y = 50;
        this.keyState = {};
        this.repeat = 10;

        this.initPos();
        
        this.eventHandler({
            37: this.left.bind(this),
            38: this.top.bind(this),
            39: this.right.bind(this),
            40: this.bottom.bind(this)
        });
    }

    initPos() {
        this.player.style.top = this.y + "px";
        this.player.style.left = this.x + "px";
    }

    top() {
        this.y--
        this.player.style.top = this.y + "px";
    }

    bottom() {
        this.y++
        this.player.style.top = this.y + "px";
    }

    left() {
        this.x--
        this.player.style.left = this.x + "px";
    }

    right() {
        this.x++
        this.player.style.left = this.x + "px";
    }

    eventHandler(keys) {

        let timers = {};

        document.onkeydown = function (event) {
            var key = (event || window.event).keyCode;
            if (!(key in keys))
                return true;
            if (!(key in timers)) {
                timers[key] = null;
                keys[key]();
                if (this.repeat !== 0)
                    timers[key] = setInterval(keys[key], this.repeat);
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
    }
}

