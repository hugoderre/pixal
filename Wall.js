class Wall extends Entity {
    constructor(pos, hitbox, backgroundColor) {
        super(parent)
        this.setPos(pos)
        this.setHitbox(hitbox)
        this.setBackgroundColor(backgroundColor)
        this.setContainer()
    }
}