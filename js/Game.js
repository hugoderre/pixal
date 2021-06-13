import Background from './Background.js'
import Player from './Player.js'
import Wall from './Wall.js'
import Sprite from './Sprite.js'
import HealthHUD from './HUD/HealthHUD.js';

class Game {
    constructor() {
        this.DOMContainer = document.querySelector("#board");

        this.size = {
            x: 512,
            y: 512
        };

        this.players = {};
        this.walls = [];
        this.HUD = {};

        this.initBoard();
        this.initBackground();
        this.initWalls();
        this.initPlayer();
        this.initHUD();
    }
    
    initBoard() {
        this.DOMContainer.style.width = this.size.x + "px";
        this.DOMContainer.style.height = this.size.y + "px";
    }

    initBackground() {
        this.background = new Background(this, '../assets/img/background.png');
    }

    initPlayer() {
        this.players = new Player(
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
        setInterval(() => {
            this.walls.push(
                new Wall(
                    this,
                    {
                        x: 128,
                        y: 128
                    },
                )
            )
        }, 2000)
    }

    initHUD() {
        this.HUD.healthHUD = new HealthHUD()
    }

    
}

new Game()
export default Game