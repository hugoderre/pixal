import Background from './Entities/Background.js'
import Player from './Entities/Physics/Player.js'
import Wall from './Entities/Physics/Wall.js'
import Sprite from './Entities/Sprite.js'
import HealthHUD from './Entities/HUD/HealthHUD.js';

class Game {
    constructor() {
        this.DOMContainer = document.querySelector("#game");

        this.size = {
            x: 512,
            y: 512
        };

        this.entities = {};
        this.entities.players = [];
        this.entities.walls = [];
        this.entities.fireshots = [];

        this.initGame();
        this.initBackground();
        this.initWalls();
        this.initPlayer();
        this.initHUD();
    }

    initGame() {
        this.DOMContainer.style.width = this.size.x + "px";
        this.DOMContainer.style.height = this.size.y + "px";
    }

    initBackground() {
        this.background = new Background(this, '../assets/img/background.png');
    }

    initPlayer() {
        this.entities.players = [
            new Player(
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
        ]
    }

    initWalls() {
        setInterval(() => {

            this.entities.walls = [... this.entities.walls, new Wall(
                this,
                {
                    x: 128,
                    y: 128
                },
            )]
            console.log(this.entities);
        }, 2000)
    }

    initHUD() {
        new HealthHUD()
    }


}

new Game()
export default Game