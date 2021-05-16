class Board {
    constructor(size, player, wall) {
        this.board = document.querySelector("#board");
        this.size = size;

        this.player = player;
        this.wall = wall;

        this.initBoard();
        this.initPlayer();
        this.initWalls();
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

    initWalls() {
        new this.wall(
            {
                x: 0,
                y: 0
            },
            {
                x: 100,
                y: 100
            }, 
            "#000"
        )
        new this.wall(
            {
                x: 150,
                y: 150
            },
            {
                x: 100,
                y: 100
            },
            "#000"
        )
    }

}