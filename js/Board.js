class Board {
    constructor(size, backgroundClass, playerClass, wallClass) {
        this.DOMContainer = document.querySelector("#board");
        this.size = size;

        this.backgroundClass = backgroundClass;
        this.playerClass = playerClass;
        this.wallClass = wallClass;

        this.players = {};
        this.walls = {};

        this.initBoard();
        this.initBackground();
        this.initWalls();
        this.initPlayer();
    }

    initBackground() {
        this.background = new this.backgroundClass(this, '../assets/img/background.png');
    }

    initBoard() {
        this.DOMContainer.style.width = this.size.x + "px";
        this.DOMContainer.style.height = this.size.y + "px";
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
        this.walls = []
        setInterval(() => {
            this.walls.push(
                new this.wallClass(
                    this,
                    {
                        x: 128,
                        y: 128
                    },
                )
            )
        }, 2000)
    }
}