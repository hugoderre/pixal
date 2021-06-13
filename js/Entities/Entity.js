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

        document.getElementById('game').prepend(this.DOMContainer);

        return this.DOMContainer;
    }

    destroyEntity(toDestroy, type, delay = 0, options = {}) {
        return setTimeout(() => {
            let indexEntity = this.game.entities[type].indexOf(toDestroy);
            if(indexEntity >= 0) {
                this.game.entities[type].splice(this.game.entities[type].indexOf(toDestroy), 1)
                toDestroy.DOMContainer.remove() 
            }
        }, delay);
    }
}

export default Entity