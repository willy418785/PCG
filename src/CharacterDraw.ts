import { Character } from "./Character";

export class CharacterDraw {
    character: Character;
    canvas: HTMLCanvasElement;
    ctx;
    constructor(character, canvas) {
        this.character = character;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }
    draw() {

        this.canvas.width = this.canvas.width;
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        var tmp = this.character.collisionContour.getSegments();

        this.ctx.lineTo(tmp[0][0].x, tmp[0][0].y);
        this.ctx.lineTo(tmp[1][0].x, tmp[1][0].y);
        this.ctx.lineTo(tmp[2][0].x, tmp[2][0].y);
        this.ctx.lineTo(tmp[3][0].x, tmp[3][0].y);
        this.ctx.lineTo(tmp[0][0].x, tmp[0][0].y);
        this.ctx.stroke();
    }
}