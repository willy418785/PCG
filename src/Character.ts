import { CollisionContours } from "./CollisionContours";
import { Point } from "./Point";
import { ICharacter } from "./Interface/Character.interface";

export abstract class Character implements ICharacter {
    public verticalSpeed: number; // positive direction is down
    public verticalSpeedAcceleration: number;
    public horizontalSpeed: number;// positive direction is right
    public horizontalSpeedAcceleration: number;
    public turnAroundAnimationCount: number;
    public attackAnimationCount: number;
    public isTurningRight: boolean;
    public isTurningAround: boolean;
    public gravityCoefficient: number;
    public characterWidth: number;
    public characterHeight: number;
    readonly ATTACK_ANIMATION_FRAME: number;
    readonly TURN_AROUND_FRAME: number;
    public x: number;
    public y: number;
    public upperSpeedAccelerationUnit: number;
    public lowerSpeedAccelerationUnit: number;
    public rightSpeedAccelerationUnit: number;
    public leftySpeedAccelerationUnit: number;
    public upperSpeadUpperBound: number;
    public lowerSpeadUpperBound: number;
    public rightSpeadUpperBound: number;
    public leftySpeadUpperBound: number;
    public upperSpeedAccelerationUpperBound: number;
    public lowerSpeedAccelerationUpperBound: number;
    public rightSpeedAccelerationUpperBound: number;
    public leftySpeedAccelerationUpperBound: number;
    public charaterContours: CollisionContours;

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

        this.intitializeContours();
            
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
    process() : void {
        this.horizontalSpeed += this.horizontalSpeedAcceleration;
        if (this.horizontalSpeed <= 0) {
            this.horizontalSpeed = this.horizontalSpeed <= -(this.leftySpeadUpperBound) ?
                -(this.leftySpeadUpperBound) : this.horizontalSpeed;
        }
        else {
            this.horizontalSpeed = this.horizontalSpeed >= this.rightSpeadUpperBound ?
                this.rightSpeadUpperBound : this.horizontalSpeed;
        }
    }
    abstract intitializeContours() : void;
    // addBuff(){
    // }
    // removeBuff(){
    // }
}