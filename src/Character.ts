export class Character {
    verticalSpeed: number; // positive direction is down
    verticalSpeedAcceleration: number;
    horizontalSpeed: number;// positive direction is right
    horizontalSpeedAcceleration: number;
    turnAroundAnimationCount: number;
    attackAnimationCount: number;
    isTurningRight: boolean;
    isTurningAround: boolean;
    gravityCoefficient: number;
    characterWidth: number;
    characterHeight: number;
    ATTACK_ANIMATION_FRAME: number;
    TURN_AROUND_FRAME: number;
    x: number;
    y: number;
    upperSpeedAccelerationUnit: number;
    lowerSpeedAccelerationUnit: number;
    rightSpeedAccelerationUnit: number;
    leftySpeedAccelerationUnit: number;
    upperSpeadUpperBound: number;
    lowerSpeadUpperBound: number;
    rightSpeadUpperBound: number;
    leftySpeadUpperBound: number;
    upperSpeedAccelerationUpperBound: number;
    lowerSpeedAccelerationUpperBound: number;
    rightSpeedAccelerationUpperBound: number;
    leftySpeedAccelerationUpperBound: number;
    constructor(
        gravityCoefficient,
        characterWidth,
        characterHeight,
        ATTACK_ANIMATION_FRAME,
        TURN_AROUND_FRAME,
        x,
        y,
        upperSpeedAccelerationUnit,
        lowerSpeedAccelerationUnit,
        rightSpeedAccelerationUnit,
        leftySpeedAccelerationUnit,
        upperSpeadUpperBound,
        lowerSpeadUpperBound,
        rightSpeadUpperBound,
        leftySpeadUpperBound,
        upperSpeedAccelerationUpperBound,
        lowerSpeedAccelerationUpperBound,
        rightSpeedAccelerationUpperBound,
        leftySpeedAccelerationUpperBound) {
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
    process(){
        this.horizontalSpeed += this.horizontalSpeedAcceleration;
        this.x += this.horizontalSpeed;
    }
    // addBuff(){
    // }
    // removeBuff(){
    // }
}