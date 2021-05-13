class Board {
    constructor(size, player) {
        this.board = document.querySelector("#board");
        this.player = player;

        this.size = size;
        this.initBoard();
        this.initPlayer();
    }

    initBoard() {
        this.board.style.width = this.size.x + "px";
        this.board.style.height = this.size.y + "px";
    }

    initPlayer() {
        this.pixal = new this.player(
            {
                x: 100,
                y: 100
            },
            {
                x: 10,
                y: 10
            }, 
            this
        )
    }

}

class Wall {
    constructor(pos, size, style) {
        this.pos = pos;
        this.size = size;
    }
}