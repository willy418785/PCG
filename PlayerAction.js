class PlayerAction{
    constructor(character) {
        this.character = character;
    }
    characterMove(){
        if(this.playerInput.isProcessed){
            if(this.playerInput.playerInputList['right']){
                character.horizontalSpeedAcceleration = character.horizontalSpeedAccelerationUnit// speedNext = speed + acceleration - fraction
            }
        }
    }
    characterAttack(){
        if(this.playerInput.isProcessed){
            if(this.playerInput.playerInputList['right']){
                character.horizontalSpeedAcceleration = character.horizontalSpeedAccelerationUnit// speedNext = speed + acceleration - fraction
            }
        }
    }
    characterAttackMove(){
        if(this.playerInput.isProcessed){
            if(this.playerInput.playerInputList['right']){
                character.horizontalSpeedAcceleration = character.horizontalSpeedAccelerationUnit// speedNext = speed + acceleration - fraction
            }
        }
    }
}