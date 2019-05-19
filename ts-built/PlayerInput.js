"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class PlayerInput {
    constructor() {
        this.isProccessed = false;
        this.playerInputList = [];
        this.playerInputList['up'] = false;
        this.playerInputList['right'] = false;
        this.playerInputList['down'] = false;
        this.playerInputList['left'] = false;
        this.playerInputList['specialMovement'] = false;
        this.playerInputList['attack1'] = false;
        this.playerInputList['attack2'] = false;
        this.playerInputList['menu'] = false;
        this.isProccessed = false;
    }
    reset() {
        this.playerInputList['up'] = false;
        this.playerInputList['right'] = false;
        this.playerInputList['down'] = false;
        this.playerInputList['left'] = false;
        this.playerInputList['specialMovement'] = false;
        this.playerInputList['attack1'] = false;
        this.playerInputList['attack2'] = false;
        this.playerInputList['menu'] = false;
        this.isProccessed = true;
    }
}
exports.PlayerInput = PlayerInput;
