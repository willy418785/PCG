class Character{
    constructor(gravityCoefficient, characterWidth, characterHeight, ATTACK_ANIMATION_FRAME, TURN_AROUND_FRAME, x, y){
        this.fallSpeed = 0;
        this.horizontalSpeed = 0;
        this.turnAroundAnimationCount = 0
        this.attackAnimationCount = 0; 
        this.isTurningRight = true;
        this.isTurningAround = false;
        this.x = x;
        this.y = y;
        this.gravityCoefficient = gravityCoefficient;
        this.characterWidth = characterWidth;
        this.characterHeight = characterHeight;
        this.ATTACK_ANIMATION_FRAME = ATTACK_ANIMATION_FRAME;
        this.TURN_AROUND_FRAME = TURN_AROUND_FRAME;
    }

    // addBuff(){
    // }
    // removeBuff(){
    // }
}