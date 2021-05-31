class Board {
    constructor(size, playerClass, wallClass) {
        this.board = document.querySelector("#board");
        this.size = size;

        this.playerClass = playerClass;
        this.wallClass = wallClass;

        this.players = {};
        this.walls = {};

        this.initBoard();
        this.initWalls();
        this.initPlayer();
    }

    initBoard() {
        this.board.style.width = this.size.x + "px";
        this.board.style.height = this.size.y + "px";
    }

    initPlayer() {
        this.players = new this.playerClass(
            this,
            {
                x: 300,
                y: 300
            },
            {
                x: 30,
                y: 30
            },
            1,
            new Sprite('../assets/img/spaceship.png', true),
        )
    }

    initWalls() {
        this.walls = [
            new this.wallClass(
                this,
                {
                    x: 15,
                    y: 2
                },
                {
                    x: 100,
                    y: 100
                },
                new Sprite('../assets/img/asteroids.png'),
            )
            ,
            new this.wallClass(
                this,
                {
                    x: 100,
                    y: 100
                },
                {
                    x: 100,
                    y: 100
                },
                new Sprite('../assets/img/asteroids.png'),
            )
            ,
            new this.wallClass(
                this,
                {
                    x: 250,
                    y: 70
                },
                {
                    x: 100,
                    y: 100
                },
                new Sprite('../assets/img/asteroids.png'),
            )
            ,
            new this.wallClass(
                this,
                {
                    x: 380,
                    y: -100
                },
                {
                    x: 100,
                    y: 100
                },
                new Sprite('../assets/img/asteroids.png'),
            )
        ]
    }
}