"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CharacterDraw {
    constructor(character, canvas) {
        this.character = character;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.pLTX = 0;
        this.pLTY = 0;
        this.pRTX = 0;
        this.pRTY = 0;
        this.pRBX = 0;
        this.pRBY = 0;
        this.pLBX = 0;
        this.pLBY = 0;
    }
    formBasicShape() {
        this.pLTX = this.character.x;
        this.pLTY = this.character.y - this.character.characterHeight;
        this.pRTX = this.character.x + this.character.characterWidth;
        this.pRTY = this.character.y - this.character.characterHeight;
        this.pRBX = this.character.x + this.character.characterWidth;
        this.pRBY = this.character.y;
        this.pLBX = this.character.x;
        this.pLBY = this.character.y;
    }
    draw() {
        this.formBasicShape();
        this.canvas.width = this.canvas.width;
        this.ctx.strokeStyle = "black";
        this.ctx.lineWidth = 1;
        this.ctx.lineTo(this.pLTX, this.pLTY);
        this.ctx.lineTo(this.pRTX, this.pRTY);
        this.ctx.lineTo(this.pRBX, this.pRBY);
        this.ctx.lineTo(this.pLBX, this.pLBY);
        this.ctx.lineTo(this.pLTX, this.pLTY);
        this.ctx.stroke();
    }
}
exports.CharacterDraw = CharacterDraw;
