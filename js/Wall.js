class Wall extends Entity {
    constructor(board, pos, hitbox, sprite = '') {
        super(parent);
        this.classList = [
            'wall'
        ];
        this.board = board;
        this.sprite = sprite;
        
        this.setPos(pos);
        this.setHitbox(hitbox);
        this.setContainer();
        this.initScroll(false);
        // Setup sprite if defined
        if(this.sprite instanceof Sprite) {
            this.sprite.setSprite(this, 8, 8, 1024, 1024);
        }
    }
}