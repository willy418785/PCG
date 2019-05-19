import {PlayerInput} from './PlayerInput';
import {PlayerAction} from './PlayerAction';
import { Character } from './Character';
export class PlayerInputProcessor {
    character: Character;
    playerInput: PlayerInput;
    playerAction: PlayerAction;
    constructor(character, playerInput) {
        this.character = character;
        this.playerInput = playerInput;
        this.playerAction = new PlayerAction();
    }
    process() {
        if (this.playerInput.isProccessed) {
            return;
        }

        if (this.playerInput.playerInputList['right'] &&
            this.playerInput.playerInputList['left']) {
            return;
        }
        if(this.playerInput.playerInputList['right']){
            this.characterMove(true);
            
        }
        if(this.playerInput.playerInputList['left']){
            this.characterMove(false);
        }
        this.playerInput.reset();
    }
    characterMove(isMovingRight) {
        this.playerAction.characterMoveSideway(this.character, isMovingRight);
    }
    characterAttack() {

    }
    characterAttackWhileMoving() {

    }
}