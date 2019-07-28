import { Character } from "./Character";
import { ContourSkeleton } from "./ContourSkeleton";
import { Point } from "./Point";

export class CoolCharacter extends Character {
    intitializeContours(){
        this.skeleton = new ContourSkeleton([
            new Point(0, -this.characterWidth), 
            new Point(this.characterWidth, -this.characterWidth),
            new Point(this.characterWidth, 0), 
            new Point(0, 0)
        ]);
        
    }
}