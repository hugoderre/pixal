import PhysicEntity from "./PhysicEntity.js";
import Sprite from "../Sprite.js";

class Wall extends PhysicEntity {
    constructor(game, hitbox, sprite = new Sprite('../assets/img/asteroids.png')) {
        super(parent);
        this.classList = [
            'wall'
        ];
        this.game = game;
        this.hitbox = hitbox;
        this.sprite = sprite;
        this.scrollSpeed = 20;
        this.pos = this.randomPos();
        this.setPos(this.pos);
        this.setHitbox(hitbox);
        this.setContainer();
        this.initScroll(this.scrollSpeed, false);
        // Setup sprite if defined
        if(this.sprite instanceof Sprite) {
            this.sprite.setSprite(this, 8, 8, 1024, 1024);
        }
        this.destroy();
    }

    randomPos() {
        let limitX = this.game.size.x - this.hitbox.x
        let pos = {};
        pos.x = Math.floor(Math.random() * limitX); ;
        pos.y = -100;
        return pos;
    }

    destroy() {
        this.destroyEntity(this.DOMContainer, 15000);
    }
}

export default Wall