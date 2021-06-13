import Entity from "../Entity.js";

class PhysicEntity extends Entity  {
    
    isCollision(direction) {
        // Wall colision handling
        for (const key in this.game.entities.walls) {
            if (Object.hasOwnProperty.call(this.game.entities.walls, key)) {
                const wall = this.game.entities.walls[key];
                switch (direction) {
                    case 'top':
                        if (
                            this.pos.y == 0
                            || this.pos.x > wall.pos.x - this.size.y
                            && this.pos.x < wall.pos.x + wall.size.x 
                            && (this.pos.y === wall.pos.y + wall.size.y || this.pos.y === wall.pos.y + wall.size.y - 1)
                        ) {
                            this.pos.y++
                            return true;
                        }
                        break;
                    case 'bottom':
                        if (
                            this.pos.y == this.game.size.y - this.size.y
                            || this.pos.x > wall.pos.x - this.size.y
                            && this.pos.x < wall.pos.x + wall.size.x
                            && this.pos.y === wall.pos.y - this.size.y
                        ) {
                            return true;
                        }
                        break;
                    case 'left':
                        if (
                            this.pos.x == 0
                            || this.pos.y > wall.pos.y - this.size.x
                            && this.pos.y < wall.pos.y + wall.size.y
                            && this.pos.x === wall.pos.x + wall.size.x
                        ) {
                            return true;
                        }
                        break;
                    case 'right':
                        if (
                            this.pos.x == this.game.size.x - this.size.x
                            || this.pos.y > wall.pos.y - this.size.x
                            && this.pos.y < wall.pos.y + wall.size.y
                            && this.pos.x === wall.pos.x - this.size.x
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