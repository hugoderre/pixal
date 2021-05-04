class Board {
    constructor(size) {
        this.board = document.querySelector("#board");
        this.size = size;
        this.init();
    }

    init() {
        this.board.style.width = this.size.x + "px";
        this.board.style.height = this.size.y + "px";
    }

}