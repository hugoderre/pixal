class Background {
    constructor(game, source) {
        this.game = game;
        this.source = source;

        this.setBackground();
    }

    setBackground() {
        this.DOMContainer = document.createElement('div');
        this.DOMContainer.style.backgroundImage = "url(" + this.source + ")";
        this.DOMContainer.style.width = this.game.size.x + "px";
        this.DOMContainer.style.height = this.game.size.y * 4 + "px";
        this.DOMContainer.style.position = "relative";
        this.DOMContainer.style.top = "-" + this.game.size.y * 2  + "px";
        this.DOMContainer.style.zIndex = "-1000";
        this.DOMContainer.animate([
            { // from
                transform: 'translateY(0px)'
                
            },
            { // to
                transform: "translateY(" + this.game.size.y * 2  + "px)"
            }
        ], {
            // timing options
            duration: 40000,
            iterations: Infinity
        })
        this.game.DOMContainer.appendChild(this.DOMContainer);
    }
}

export default Background