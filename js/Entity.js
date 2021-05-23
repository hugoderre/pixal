class Entity {

    setPos(pos) {
        this.pos = pos;
    }

    setHitbox(hitbox) {
        this.hitbox = hitbox;
    }

    setBackgroundColor(backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    setContainer() {
        this.container = document.createElement('div');
        this.container.style.position = 'absolute';
        this.container.style.top = this.pos.y + 'px';
        this.container.style.left = this.pos.x + 'px';
        this.container.style.height = this.hitbox.y + 'px';
        this.container.style.width = this.hitbox.x + 'px';
        this.container.style.backgroundColor = this.backgroundColor;

        for (const className of this.classList) {
            this.container.classList.add(className);
        }

        document.getElementById('board').prepend(this.container)

        return this.container;
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
                            this.pos.y++
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

    initScroll(bottomCollision = true) {
        setInterval(() => {
            if (bottomCollision && this.isCollision('bottom')) return;
            this.container.style.top = this.pos.y++ + "px";
        }, 100);
    }

    coolDown(time) {
        if (!this.fireCoolDown)
            this.fireCoolDown = Date.now();
        if (Date.now() < this.fireCoolDown + time) return;
        delete this.fireCoolDown;
        return true;
    }
}