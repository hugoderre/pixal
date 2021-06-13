import PhysicEntity from './PhysicEntity.js';
import { Animations } from '../../Utils.js';

class Fireshot extends PhysicEntity {
    constructor(size, frameSpeed, sprite, player) {
        super(parent)

        this.game = player.game;

        // Set fireshot in global entities array
        this.game.entities.fireshots = [... this.game.entities.fireshots, this]

        this.frameSpeed = frameSpeed;
        this.sprite = sprite;
        this.player = player;
        this.pos = this.player.pos
        this.size = size;
        this.classList = [
            'fireshot'
        ];

        this.fireshotDOM = this.setContainer()
        this.sprite.setSprite(this)
        this.shotAction();
        this.destroyEntity(this, 'fireshots', 10000);
    }

    shotAction() {
        this.fireShotPosY = this.pos.y;
        this.fireShotPosX = this.pos.x;
        let inter = setInterval(() => {
            this.fireshotDOM.style.top = this.fireShotPosY + 'px';
            this.fireShotPosY = this.fireShotPosY - this.frameSpeed;
            if(this.shotCollision()) {
                this.destroyEntity(this, 'fireshots', 500);
                clearInterval(this.mustBeDestroy)
                clearInterval(inter);
            } 
        }, 1)
    }

    shotCollision() {
        for (const key in this.game.entities.walls) {
            if (Object.hasOwnProperty.call(this.game.entities.walls, key)) {
                const wall = this.game.entities.walls[key];
                if (
                    this.fireShotPosX > wall.pos.x - this.size.y
                    && this.fireShotPosX < wall.pos.x + wall.size.x
                    && (this.fireShotPosY === wall.pos.y + wall.size.y || this.fireShotPosY === wall.pos.y + wall.size.y - this.frameSpeed)
                ) {
                    Animations.fadeOut(wall.DOMContainer)
                    this.destroyEntity(wall, 'walls', 500);
                    Animations.fadeOut(this.fireshotDOM)
                    return true;
                }
            }
        }
    }

}

export default Fireshot