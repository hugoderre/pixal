import PhysicEntity from './PhysicEntity.js';
import { Animations } from '../../Utils.js';

class Fireshot extends PhysicEntity {
    constructor(hitbox, frameSpeed, sprite, player) {
        super(parent)
        this.game = player.game;
        this.frameSpeed = frameSpeed;
        this.sprite = sprite;
        this.player = player;
        this.pos = this.player.pos
        this.createTime = Date.now();
        this.hitbox = hitbox;

        this.classList = [
            'fireshot'
        ];

        this.fireshotDOM = this.setContainer()
        this.sprite.setSprite(this)
        this.shotAction();
        this.destroyFireshot(2000);
    }

    shotAction() {
        this.fireShotPosY = this.pos.y;
        this.fireShotPosX = this.pos.x;
        let inter = setInterval(() => {
            this.fireshotDOM.style.top = this.fireShotPosY + 'px';
            this.fireShotPosY = this.fireShotPosY - this.frameSpeed;
            if(this.handleShotCollision()) {
                clearInterval(inter);
                this.destroyEntity(this.fireshotDOM, 500);
            } 
        }, 1)
    }

    handleShotCollision() {
        for (const key in this.game.walls) {
            if (Object.hasOwnProperty.call(this.game.walls, key)) {
                const wall = this.game.walls[key];
                if (
                    this.fireShotPosX > wall.pos.x - this.hitbox.y
                    && this.fireShotPosX < wall.pos.x + wall.hitbox.x
                    && (this.fireShotPosY === wall.pos.y + wall.hitbox.y || this.fireShotPosY === wall.pos.y + wall.hitbox.y - this.frameSpeed)
                ) {
                    delete this.game.walls[key]
                    Animations.fadeOut(wall.DOMContainer)
                    this.destroyEntity(wall.DOMContainer, 500);
                    Animations.fadeOut(this.fireshotDOM)
                    return true;
                }
            }
        }
    }

    destroyFireshot(delay) {
        this.destroyEntity(this.fireshotDOM, delay);
    }

}

export default Fireshot