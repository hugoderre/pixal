class Fireshot extends Entity {
    constructor(hitbox, speed, player) {
        super(parent)
        this.player = player;
        this.speed = speed;        
        this.pos = this.player.pos
        
        this.hitbox = hitbox;
        
        this.classList = [
            'fireshot'
        ];
        
        this.fireshotDOM = this.setContainer()
        this.shotAction();
    }

    shotAction() {
        let initPos = this.pos.y;
        setInterval(() => {
            this.fireshotDOM.style.top = initPos + 'px';
            initPos = initPos - 2;

        }, 1)
        
    }
}
