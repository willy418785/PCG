"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const PlayerAction_1 = require("./PlayerAction");
class PlayerInputProcessor {
    constructor(character, playerInput) {
        this.character = character;
        this.playerInput = playerInput;
        this.playerAction = new PlayerAction_1.PlayerAction();
    }
    process() {
        if (this.playerInput.isProccessed) {
            return;
        }
        if (this.playerInput.playerInputList['right'] &&
            this.playerInput.playerInputList['left']) {
            return;
        }
        if (this.playerInput.playerInputList['right']) {
            this.characterMove(true);
        }
        if (this.playerInput.playerInputList['left']) {
            this.characterMove(false);
        }
        this.playerInput.reset();
    }
    characterMove(isMovingRight) {
        this.playerAction.characterMoveSideway(this.character, isMovingRight);
    }
    characterAttack() {
    }
    characterAttackWhileMoving() {
    }
}
exports.PlayerInputProcessor = PlayerInputProcessor;
