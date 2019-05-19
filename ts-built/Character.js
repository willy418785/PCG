"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Character {
    constructor(gravityCoefficient, characterWidth, characterHeight, ATTACK_ANIMATION_FRAME, TURN_AROUND_FRAME, x, y, upperSpeedAccelerationUnit, lowerSpeedAccelerationUnit, rightSpeedAccelerationUnit, leftySpeedAccelerationUnit, upperSpeadUpperBound, lowerSpeadUpperBound, rightSpeadUpperBound, leftySpeadUpperBound, upperSpeedAccelerationUpperBound, lowerSpeedAccelerationUpperBound, rightSpeedAccelerationUpperBound, leftySpeedAccelerationUpperBound) {
        this.verticalSpeed = 0;
        this.verticalSpeedAcceleration = 0;
        this.horizontalSpeed = 0;
        this.horizontalSpeedAcceleration = 0;
        this.turnAroundAnimationCount = 0;
        this.attackAnimationCount = 0;
        this.isTurningRight = true;
        this.isTurningAround = false;
        this.gravityCoefficient = gravityCoefficient;
        this.characterWidth = characterWidth;
        this.characterHeight = characterHeight;
        this.ATTACK_ANIMATION_FRAME = ATTACK_ANIMATION_FRAME;
        this.TURN_AROUND_FRAME = TURN_AROUND_FRAME;
        this.x = x;
        this.y = y;
        this.upperSpeedAccelerationUnit = upperSpeedAccelerationUnit;
        this.lowerSpeedAccelerationUnit = lowerSpeedAccelerationUnit;
        this.rightSpeedAccelerationUnit = rightSpeedAccelerationUnit;
        this.leftySpeedAccelerationUnit = leftySpeedAccelerationUnit;
        this.upperSpeadUpperBound = upperSpeadUpperBound;
        this.lowerSpeadUpperBound = lowerSpeadUpperBound;
        this.rightSpeadUpperBound = rightSpeadUpperBound;
        this.leftySpeadUpperBound = leftySpeadUpperBound;
        this.upperSpeedAccelerationUpperBound = upperSpeedAccelerationUpperBound;
        this.lowerSpeedAccelerationUpperBound = lowerSpeedAccelerationUpperBound;
        this.rightSpeedAccelerationUpperBound = rightSpeedAccelerationUpperBound;
        this.leftySpeedAccelerationUpperBound = leftySpeedAccelerationUpperBound;
    }
}
exports.Character = Character;
