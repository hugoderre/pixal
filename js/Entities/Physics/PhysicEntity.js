import Entity from "../Entity.js";

class PhysicEntity extends Entity  {
    
    isCollision(direction) {
        // Wall colision handling
        for (const key in this.game.walls) {
            if (Object.hasOwnProperty.call(this.game.walls, key)) {
                const wall = this.game.walls[key];
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
                            this.pos.y == this.game.size.y - this.hitbox.y
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
                            this.pos.x == this.game.size.x - this.hitbox.x
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
}

export default PhysicEntity