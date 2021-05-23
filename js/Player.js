class Player extends Entity {

    constructor(pos, hitbox, speed, board) {
        super(parent)
        
        this.board = board;
        this.speed = speed;
        this.classList = [
            'player'
        ];

        this.setPos(pos);
        this.setHitbox(hitbox);

        this.playerDOM = this.setContainer()

        this.keyHandler({
            32: this.fireshot.bind(this),
            37: this.left.bind(this),
            38: this.top.bind(this),
            39: this.right.bind(this),
            40: this.bottom.bind(this)
        });

        // this.initScroll();
        this.fireshot()
    }



    top() {
        if (this.isCollision('top')) return;
        this.pos.y--
        this.playerDOM.style.top = this.pos.y + "px";
    }

    bottom() {
        if (this.isCollision('bottom')) return;
        this.pos.y++
        this.playerDOM.style.top = this.pos.y + "px";
    }

    left() {
        if (this.isCollision('left')) return;
        this.pos.x--
        this.playerDOM.style.left = this.pos.x + "px";
    }

    right() {
        if (this.isCollision('right')) return;
        this.pos.x++
        this.playerDOM.style.left = this.pos.x + "px";
    }



    keyHandler(keys) {
        let timers = {};

        document.onkeydown = function (event) {
            var key = (event || window.event).keyCode;
            if (!(key in keys))
                return true;
            if (!(key in timers)) {
                timers[key] = null;
                keys[key]();
                if (this.repeat !== 0)
                    timers[key] = setInterval(keys[key], this.speed);
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

    fireshot() {
        if (!this.coolDown(1000)) return;
        this.fireshot = new Fireshot(
            {
                x: 100,
                y: 125
            },
            {
                x: 30,
                y: 30
            },
            this
        )
    }
}
