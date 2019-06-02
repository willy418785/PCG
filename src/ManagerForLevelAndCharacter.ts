import { Level } from "./Level";
import { Character } from "./Character";

export class ManagerForLevelAndCharacter {
    private level: Level;
    private characterList: Array<Character>;
    constructor() {

    }
    addCharacter(character: Character) {
        this.characterList.push(character);
    }
    setLevel(level: Level) {
        this.level = level;
    }
    process() {
        this.characterList.forEach(element => {
            element.process();
            let tmpPositionX: number = element.x + element.horizontalSpeed;
            let tmpPositionY: number = element.y + element.verticalSpeed;

        });
 
    }
}