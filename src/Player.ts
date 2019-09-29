// import { CollisionContours } from "./CollisionContours";
import { Point } from "./Point";
// import { ICharacter } from "./Interface/Character.interface";
import { ContourSkeleton } from "./ContourSkeleton";
import { Character } from "./Character";

export class Player extends Character {
    intitializeContours() : void{
        var points:Array<Point> = new Array<Point>();
        points.push(new Point(-1, -1), new Point(1, -1), new Point(1, 1), new Point(-1, 1));
        this.skeleton = new ContourSkeleton(points);
    }
    // addBuff(){
    // }
    // removeBuff(){
    // }
}