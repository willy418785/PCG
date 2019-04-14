class PlayerInputProcessor {
    constructor(character, playerInput) {
        this.character = character;
        this.playerInput = playerInput;
        this.playerAction = new PlayerAction();
    }
    process() {
        if (this.playerInput.isProccessed) {
            return;
        }

        if (playerInput.playerInputList['right'] &&
            playerInput.playerInputList['left']) {
            return;
        }
        if(playerInput.playerInputList['right']){
            this.characterMove(true);
            
        }
        if(playerInput.playerInputList['left']){
            this.characterMove(false);
        }
        this.playerInput.reset();
        this.playerInput.isProccessed = true;
    }
    characterMove(isMovingRight) {
        this.playerAction.characterMoveSideway(this.character, isMovingRight);
    }
    characterAttack() {

    }
    characterAttackWhileMoving() {

    }
}