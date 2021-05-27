class Sprite {
    constructor(source) {
        this.source = source;
    }

    setSprite(entity) {
        // Cut x
        // Cut y 
        // Offset X
        // Offset Y
        console.log(this);
        console.log(entity);
        entity.DOMContainer.style.backgroundImage = "url('" + this.source + "')";
    }
}