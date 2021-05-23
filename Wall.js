class Wall extends Entity {
    constructor(pos, hitbox, backgroundColor, board) {
        super(parent)
        this.classList = [
            'wall'
        ]
        this.board = board;
        this.setPos(pos)
        this.setHitbox(hitbox)
        this.setBackgroundColor(backgroundColor)
        this.setContainer()
        this.initScroll(false)
    }
}