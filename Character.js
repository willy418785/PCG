class Character {
    constructor(
        gravityCoefficient,
        characterWidth,
        characterHeight,
        ATTACK_ANIMATION_FRAME,
        TURN_AROUND_FRAME,
        x,
        y,
        verticalSpeedAccelerationUnit,
        horizontalSpeedAccelerationUnit,
        verticalSpeadUpperBound,
        verticalSpeadLowerBound,
        horizontalSpeadUpperBound,
        horizontalSpeadLowerBound,
        verticalSpeedAccelerationUpperBound,
        verticalSpeedAccelerationLowerBound,
        horizontalSpeedAccelerationUpperBound,
        horizontalSpeedAccelerationLowerBound) {

        this.verticalSpeed = 0; // positive direction is down
        this.verticalSpeedAcceleration = 0;
        this.horizontalSpeed = 0; // positive direction is right
        this.horizontalSpeedAcceleration = 0;
        this.turnAroundAnimationCount = 0
        this.attackAnimationCount = 0;
        this.isTurningRight = true;
        this.isTurningAround = false;
        this.x = x;
        this.y = y;
        this.verticalSpeedAccelerationUnit = verticalSpeedAccelerationUnit;
        this.horizontalSpeedAccelerationUnit = horizontalSpeedAccelerationUnit;
        this.gravityCoefficient = gravityCoefficient;
        this.characterWidth = characterWidth;
        this.characterHeight = characterHeight;
        this.ATTACK_ANIMATION_FRAME = ATTACK_ANIMATION_FRAME;
        this.TURN_AROUND_FRAME = TURN_AROUND_FRAME;
        this.verticalSpeadUpperBound = verticalSpeadUpperBound;
        this.verticalSpeadLowerBound = verticalSpeadLowerBound;
        this.horizontalSpeadUpperBound = horizontalSpeadUpperBound;
        this.horizontalSpeadLowerBound = horizontalSpeadLowerBound;
        this.verticalSpeedAccelerationUpperBound = verticalSpeedAccelerationUpperBound;
        this.verticalSpeedAccelerationLowerBound = verticalSpeedAccelerationLowerBound;
        this.horizontalSpeedAccelerationUpperBound = horizontalSpeedAccelerationUpperBound;
        this.horizontalSpeedAccelerationLowerBound = horizontalSpeedAccelerationLowerBound;
    }

    // addBuff(){
    // }
    // removeBuff(){
    // }
}