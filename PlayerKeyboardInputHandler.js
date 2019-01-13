class PlayerKeyboardInputHandler{
    constructor(character, playerInput) {
        this.character = character;
        this.playerInput = playerInput;
    }
    process(){
        if(this.playerInput.isProcessed){
            if(this.playerInput.playerInputList['right']){
                character.horizontalSpeedAcceleration = character.horizontalSpeedAccelerationUnit// speedNext = speed + acceleration - fraction
            }
        }
    }
}