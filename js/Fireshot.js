class Fireshot extends Entity {
    constructor(hitbox, frameSpeed, player) {
        super(parent)
        this.board = player.board;
        this.player = player;
        this.frameSpeed = frameSpeed;
        this.pos = this.player.pos

        this.hitbox = hitbox;

        this.classList = [
            'fireshot'
        ];

        this.fireshotDOM = this.setContainer()
        this.shotAction();
    }

    shotAction() {
        this.dynamicPos = this.pos.y;
        let inter = setInterval(() => {
            this.fireshotDOM.style.top = this.dynamicPos + 'px';
            this.dynamicPos = this.dynamicPos - this.frameSpeed;
            if(this.handleShotCollision()) {
                clearInterval(inter);
                this.destroyEntity(this.fireshotDOM, 500);
            } 
        }, 1)
    }

    handleShotCollision() {
        for (const key in this.board.walls) {
            if (Object.hasOwnProperty.call(this.board.walls, key)) {
                const wall = this.board.walls[key];
                if (
                    this.pos.x > wall.pos.x - this.hitbox.y
                    && this.pos.x < wall.pos.x + wall.hitbox.x
                    && (this.dynamicPos === wall.pos.y + wall.hitbox.y || this.dynamicPos === wall.pos.y + wall.hitbox.y - this.frameSpeed)
                ) {
                    delete this.board.walls[key]
                    wall.DOMContainer.classList.add('fade-out');
                    this.destroyEntity(wall.DOMContainer, 500);
                    this.fireshotDOM.classList.add('fade-out');
                    return true;
                }
            }
        }
    }

    

}
