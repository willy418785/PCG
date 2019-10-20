import { CollisionContours } from "./CollisionContours";
import { Point } from "./Point";
import { ICharacter } from "./Interface/Character.interface";
import { ContourSkeleton } from "./ContourSkeleton";

export abstract class Character implements ICharacter {
    public get x(): number{
        return this.skeleton.referencePoint.x;
    }
    public set x(value:number){
        this.skeleton.referencePoint.x = value;
    }

    public get y(): number{
        return this.skeleton.referencePoint.y;
    }
    public set y(value:number){
        this.skeleton.referencePoint.y = value;
    }

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
    public upperSpeedAccelerationUnit: number;
    public lowerSpeedAccelerationUnit: number;
    public rightSpeedAccelerationUnit: number;
    public leftySpeedAccelerationUnit: number;
    public upperSpeedUpperBound: number;
    public lowerSpeedUpperBound: number;
    public rightSpeedUpperBound: number;
    public leftySpeedUpperBound: number;
    public upperSpeedAccelerationUpperBound: number;
    public lowerSpeedAccelerationUpperBound: number;
    public rightSpeedAccelerationUpperBound: number;
    public leftySpeedAccelerationUpperBound: number;
    public skeleton: ContourSkeleton;
    public collisionContour: CollisionContours;

    constructor(
        gravityCoefficient: number = 1,
        characterWidth: number = 10,
        characterHeight: number = 10,
        ATTACK_ANIMATION_FRAME: number = 30,
        TURN_AROUND_FRAME: number = 15,
        x: number = 0,
        y: number = 0,
        upperSpeedAccelerationUnit: number = 1,
        lowerSpeedAccelerationUnit: number = 1,
        rightSpeedAccelerationUnit: number = 1,
        leftySpeedAccelerationUnit: number = 1,
        upperSpeedUpperBound: number = 10,
        lowerSpeedUpperBound: number = 10,
        rightSpeedUpperBound: number = 10,
        leftySpeedUpperBound: number = 10,
        upperSpeedAccelerationUpperBound: number = 5,
        lowerSpeedAccelerationUpperBound: number = 5,
        rightSpeedAccelerationUpperBound: number = 5,
        leftySpeedAccelerationUpperBound: number = 5) {
            
        this.verticalSpeed = 0;
        this.verticalSpeedAcceleration = 0;
        this.horizontalSpeed = 0;
        this.horizontalSpeedAcceleration = 0;
        this.turnAroundAnimationCount = 0;
        this.attackAnimationCount = 0;
        this.isTurningRight = true;
        this.isTurningAround = false;

        this.intitializeContours();
        this.x = x;
        this.y = y;

        this.gravityCoefficient = gravityCoefficient;
        this.characterWidth = characterWidth;
        this.characterHeight = characterHeight;
        this.ATTACK_ANIMATION_FRAME = ATTACK_ANIMATION_FRAME;
        this.TURN_AROUND_FRAME = TURN_AROUND_FRAME;
        this.upperSpeedAccelerationUnit = upperSpeedAccelerationUnit;
        this.lowerSpeedAccelerationUnit = lowerSpeedAccelerationUnit;
        this.rightSpeedAccelerationUnit = rightSpeedAccelerationUnit;
        this.leftySpeedAccelerationUnit = leftySpeedAccelerationUnit;
        this.upperSpeedUpperBound = upperSpeedUpperBound;
        this.lowerSpeedUpperBound = lowerSpeedUpperBound;
        this.rightSpeedUpperBound = rightSpeedUpperBound;
        this.leftySpeedUpperBound = leftySpeedUpperBound;
        this.upperSpeedAccelerationUpperBound = upperSpeedAccelerationUpperBound;
        this.lowerSpeedAccelerationUpperBound = lowerSpeedAccelerationUpperBound;
        this.rightSpeedAccelerationUpperBound = rightSpeedAccelerationUpperBound;
        this.leftySpeedAccelerationUpperBound = leftySpeedAccelerationUpperBound;
    }
    process() : void {
        this.horizontalSpeed += this.horizontalSpeedAcceleration;
        if (this.horizontalSpeed <= 0) {
            this.horizontalSpeed = this.horizontalSpeed <= -(this.leftySpeedUpperBound) ?
                -(this.leftySpeedUpperBound) : this.horizontalSpeed;
        }
        else {
            this.horizontalSpeed = this.horizontalSpeed >= this.rightSpeedUpperBound ?
                this.rightSpeedUpperBound : this.horizontalSpeed;
        }
    }
    abstract intitializeContours() : void;
    // addBuff(){
    // }
    // removeBuff(){
    // }
}