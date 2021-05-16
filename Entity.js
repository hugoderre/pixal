class Entity {
    constructor() {
        this.pos;
        this.hitbox;
        this.color;
        this.backgroundColor;
    }

    setPos(pos) {
        this.pos = pos;
    }

    setHitbox(hitbox) {
        this.hitbox = hitbox;
    }

    setBackgroundColor(backgroundColor) {
        this.backgroundColor = backgroundColor;
    }

    setContainer() {
        let element = document.createElement('div');
        element.style.position = 'absolute';
        element.style.top = this.pos.y + 'px';
        element.style.left = this.pos.x + 'px';
        element.style.height = this.hitbox.y + 'px';
        element.style.width = this.hitbox.x + 'px';
        element.style.backgroundColor = this.backgroundColor;
        document.getElementById('board').prepend(element)
    }
}