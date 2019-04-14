class PlayerAction {
    constructor() {}
    characterMoveSideway(character, isMovingRight) {
        var accelerationUnit =
            isMovingRight ?
            character.rightSpeedAccelerationUnit : character.leftySpeedAccelerationUnit;
        var speedAccelerationUpperBound =
            isMovingRight ?
            character.rightSpeedAccelerationUpperBound : character.leftySpeedAccelerationUpperBound;
        var isLessThanUpperBound =
            character.horizontalSpeedAcceleration + accelerationUnit <= speedAccelerationUpperBound;

        var acceleration;
        if (isLessThanUpperBound) {
            acceleration = character.horizontalSpeedAcceleration + accelerationUnit;
        } else {
            acceleration = character.horizontalSpeedAccelerationUpperBound;
        }
        if (!isMovingRight) {
            acceleration = -acceleration;
        }
        character.horizontalSpeed += acceleration;
        character.x += character.horizontalSpeed;
    }
    characterMoveUp() {

    }
    characterMoveDown() {

    }
    characterAttackSideway() {

    }
    characterAttackUp() {

    }
    characterAttackDown() {

    }
}