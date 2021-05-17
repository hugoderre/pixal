class Player extends Entity {

    constructor(pos, hitbox, board) {
        super(parent)

        this.player = document.querySelector("#player");

        this.board = board;

        this.setPos(pos);
        this.setHitbox(hitbox);

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

    isCollision(direction) {
        // Wall colision handling
        for (const key in this.board.walls) {
            if (Object.hasOwnProperty.call(this.board.walls, key)) {
                const wall = this.board.walls[key];
                switch (direction) {
                    case 'top':
                        if (
                            this.pos.y == 0
                            || this.pos.x > wall.pos.x - this.hitbox.y
                            && this.pos.x < wall.pos.x + wall.hitbox.x
                            && this.pos.y === wall.pos.y + wall.hitbox.y
                        ) {
                            return true;
                        }
                        break;
                    case 'bottom':
                        if (
                            this.pos.y == this.board.size.y - this.hitbox.y
                            || this.pos.x > wall.pos.x - this.hitbox.y
                            && this.pos.x < wall.pos.x + wall.hitbox.x
                            && this.pos.y === wall.pos.y - this.hitbox.y
                        ) {
                            return true;
                        }
                        break;
                    case 'left':
                        if (
                            this.pos.x == 0
                            || this.pos.y > wall.pos.y - this.hitbox.x
                            && this.pos.y < wall.pos.y + wall.hitbox.y
                            && this.pos.x === wall.pos.x + wall.hitbox.x
                        ) {
                            return true;
                        }
                        break;
                    case 'right':
                        if (
                            this.pos.x == this.board.size.x - this.hitbox.x
                            || this.pos.y > wall.pos.y - this.hitbox.x
                            && this.pos.y < wall.pos.y + wall.hitbox.y
                            && this.pos.x === wall.pos.x - this.hitbox.x
                        ) {
                            return true;
                        }
                        break;
                    default:
                        break;
                }
            }
        }
    }

    top() {
        if (this.isCollision('top')) return;
        this.pos.y--
        this.player.style.top = this.pos.y + "px";
    }

    bottom() {
        if (this.isCollision('bottom')) return;
        this.pos.y++
        this.player.style.top = this.pos.y + "px";
    }

    left() {
        if (this.isCollision('left')) return;
        this.pos.x--
        this.player.style.left = this.pos.x + "px";
    }

    right() {
        if (this.isCollision('right')) return;
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

