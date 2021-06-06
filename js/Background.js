class Background {
    constructor(board, source) {
        this.board = board;
        this.source = source;

        this.setBackground();
    }

    setBackground() {
        console.log(this.board);
        this.DOMContainer = document.createElement('div');
        this.DOMContainer.style.backgroundImage = "url(" + this.source + ")";
        this.DOMContainer.style.width = "512px";
        this.DOMContainer.style.height = "2048px";
        this.DOMContainer.style.position = "relative";
        this.DOMContainer.style.top = "-" + this.board.size.y * 2  + "px";
        this.DOMContainer.style.zIndex = "-1000";
        this.DOMContainer.animate([
            { // from
                transform: 'translateY(0px)'
                
            },
            { // to
                transform: "translateY(" + this.board.size.y * 2  + "px)"
            }
        ], {
            // timing options
            duration: 40000,
            iterations: Infinity
        })
        this.board.DOMContainer.appendChild(this.DOMContainer);
    }
}