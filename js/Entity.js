class Entity {
    setPos(pos) {
        this.pos = pos;
    }

    setHitbox(hitbox) {
        this.hitbox = hitbox;
    }

    setContainer() {
        this.DOMContainer = document.createElement('div');
        this.DOMContainer.style.position = 'absolute';
        this.DOMContainer.style.top = this.pos.y + 'px';
        this.DOMContainer.style.left = this.pos.x + 'px';
        this.DOMContainer.style.height = this.hitbox.y + 'px';
        this.DOMContainer.style.width = this.hitbox.x + 'px';

        for (const className of this.classList) {
            this.DOMContainer.classList.add(className);
        }

        document.getElementById('board').prepend(this.DOMContainer);

        return this.DOMContainer;
    }

    destroyEntity(toDestroy, delay = 0, options = {}) {
        setTimeout(() => {
            toDestroy.remove()
        }, delay);
    }
}

export default Entity