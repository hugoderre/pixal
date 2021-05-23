class Fireshot extends Entity {
    constructor(pos, hitbox, player) {
        super(parent)
        this.player = player;
        this.pos = this.player.pos;
        this.hitbox = hitbox;
        
        this.classList = [
            'fireshot'
        ];
        
        this.setContainer()
    }
}
