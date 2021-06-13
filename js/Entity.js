class Entity {

    setPos(pos) {
        this.pos = pos;
    }

    setHitbox(hitbox) {
        this.hitbox = hitbox;
    }

    setContainer() {
        this.DOMContainer = document.createElement('div');
        this.DOMContainer.style.position = 'absolute';
        this.DOMContainer.style.top = this.pos.y + 'px';
        this.DOMContainer.style.left = this.pos.x + 'px';
        this.DOMContainer.style.height = this.hitbox.y + 'px';
        this.DOMContainer.style.width = this.hitbox.x + 'px';

        for (const className of this.classList) {
            this.DOMContainer.classList.add(className);
        }

        document.getElementById('board').prepend(this.DOMContainer);

        return this.DOMContainer;
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
                            && (this.pos.y === wall.pos.y + wall.hitbox.y || this.pos.y === wall.pos.y + wall.hitbox.y - 1)
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

    initScroll(scrollSpeed, bottomCollision = true) {
        setInterval(() => {
            if (bottomCollision && this.isCollision('bottom')) return;
            this.DOMContainer.style.top = this.pos.y++ + "px";
        }, scrollSpeed);
    }

    coolDown(time) {
        if (!this.CD)
            this.CD = Date.now();
        if (Date.now() < this.CD + time) return;
        delete this.CD;
        return true;
    }

    destroyEntity(toDestroy, delay = 0, options = {}) {
        setTimeout(() => {
            toDestroy.remove()
        }, delay);
    }
}

export default Entity