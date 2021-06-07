class Wall extends Entity {
    constructor(board, hitbox, sprite = new Sprite('../assets/img/asteroids.png')) {
        super(parent);
        this.classList = [
            'wall'
        ];
        this.board = board;
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
    }

    randomPos() {
        let limitX = this.board.size.x - this.hitbox.x
        let pos = {};
        pos.x = Math.floor(Math.random() * limitX); ;
        pos.y = -100;
        return pos;
    }
}