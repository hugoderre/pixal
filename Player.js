class Player {
    
    constructor(pos, hitbox, board) {
        this.player = document.querySelector("#player");
        
        this.board = board;
        this.pos = pos;
        this.hitbox = hitbox;
        
        this.repeat = 10;

        this.initPos();
        this.initHitbox();
        
        this.eventHandler({
            37: this.left.bind(this),
            38: this.top.bind(this),
            39: this.right.bind(this),
            40: this.bottom.bind(this)
        });
    }

    initPos() {
        this.player.style.top = this.pos.y + "px";
        this.player.style.left = this.pos.x + "px";
    }

    initHitbox() {
        this.player.style.width = this.hitbox.x + "px";
        this.player.style.height = this.hitbox.y + "px";
    }

    top() {
        this.pos.y--
        this.player.style.top = this.pos.y + "px";
    }

    bottom() {
        this.pos.y++
        this.player.style.top = this.pos.y + "px";
    }

    left() {
        this.pos.x--
        this.player.style.left = this.pos.x + "px";
    }

    right() {
        this.pos.x++
        this.player.style.left = this.pos.x + "px";
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

