class Sprite {
    constructor(source, isStatic = false) {
        this.source = source;
        this.isStatic = isStatic;
    }

    async setSprite(entity, countX, countY, imgWidth, imgHeight) {

        const timer = ms => new Promise(res => setTimeout(res, ms))
        entity.DOMContainer.style.backgroundImage = "url('" + this.source + "')";
        if (!this.isStatic) {
            
            while (true) {
                let cursorX = 0;
                let cursorY = 0;
                for (let i = 0; i < countX * countY; i++) {
                    entity.DOMContainer.style.backgroundPosition = cursorX + "px " + cursorY + "px";
                    console.log(entity.DOMContainer.style.backgroundPosition);
                    if (cursorX == imgWidth) {
                        cursorY += imgHeight / countY;
                        cursorX = 0;
                        break;
                    }
                    cursorX += imgWidth / countX;
                    await timer(1000);
                }
            }
        }


    }
}