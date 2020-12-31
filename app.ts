const canvas = document.querySelector<HTMLCanvasElement>("[data-canvas]");

const width = canvas.width;
const height = canvas.height;
const context = canvas.getContext("2d");

const TILE_SIZE = 10;
const TILES_X = width / TILE_SIZE;
const TILES_Y = height / TILE_SIZE;

context.fillStyle = "rgb(100, 240, 150)";
context.strokeStyle = "rgb(90, 90, 90)";
context.lineWidth = 1;

class Game {

    private _board: boolean[][];
    private _cycle: number;
    private _isRunning: boolean;

    public constructor() {
        this._cycle = 0;
        this._isRunning = false;
        this.prepareBoard();
        this.drawBoard();
    }

    public start(): void {

    }

    private drawBoard(): void {
        for (let i = 0; i < TILES_X; i++) {
            context.beginPath();
            context.moveTo(i * TILE_SIZE - 0.5, 0);
            context.lineTo(i * TILE_SIZE - 0.5, height);
            context.stroke();
        }

        for (let i = 0; i < TILES_Y; i++) {
            context.beginPath();
            context.moveTo(0, i * TILE_SIZE - 0.5);
            context.lineTo(width, i * TILE_SIZE - 0.5);
            context.stroke();
        }

        for (let y = 0; y < TILES_Y; y++) {
            for (let x = 0; x < TILES_X; x++) {
                if (this.isAlive(x, y))
                    context.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE - 1, TILE_SIZE - 1);
            }
        }
    }

    private prepareBoard(): void {
        this._board = [];
        for (let i = 0; i < TILES_Y; i++) {
            this._board[i] = [];
            for (let j = 0; j < TILES_X; j++) {
                this._board[i][j] = false;
            }
        }
    }

    private isAlive(x: number, y: number): boolean {
        return this._board[y][x];
    }

    private countNeighbours(x: number, y: number): number {
        let count = 0;


        return count;
    }

}

// Start of application
const game = new Game();
game.start();