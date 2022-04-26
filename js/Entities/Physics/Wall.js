import PhysicEntity from "./PhysicEntity.js";
import Sprite from "../Sprite.js";

class Wall extends PhysicEntity {
    constructor(game, size, sprite = new Sprite('./assets/img/asteroids.png')) {
        super(parent);

        this.game = game;

        // Set wall in global entities array
        this.game.entities.walls = [... this.game.entities.walls, this]

        this.size = size;
        this.sprite = sprite;
        this.scrollSpeed = 20;
        this.classList = [
            'wall'
        ];

        this.pos = this.randomPos();
        this.setPos(this.pos);
        this.setSize(size);
        this.setContainer();
        this.initScroll(this.scrollSpeed, false);
        // Setup sprite if defined
        if(this.sprite instanceof Sprite) {
            this.sprite.setSprite(this, 8, 8, 1024, 1024);
        }
        this.destroyEntity(this, 'walls', 15000);
    }

    randomPos() {
        let limitX = this.game.size.x - this.size.x
        let pos = {};
        pos.x = Math.floor(Math.random() * limitX); ;
        pos.y = -100;
        return pos;
    }

}

export default Wall