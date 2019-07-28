export interface ICharacter {
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
    upperSpeedUpperBound: number;
    lowerSpeedUpperBound: number;
    rightSpeedUpperBound: number;
    leftySpeedUpperBound: number;
    upperSpeedAccelerationUpperBound: number;
    lowerSpeedAccelerationUpperBound: number;
    rightSpeedAccelerationUpperBound: number;
    leftySpeedAccelerationUpperBound: number;

    process() :void;
    intitializeContours() :void;
}