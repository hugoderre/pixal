class Wall extends Entity {
    constructor(pos, hitbox, sprite, board) {
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
    }
}