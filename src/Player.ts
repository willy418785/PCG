// import { CollisionContours } from "./CollisionContours";
import { Point } from "./Point";
// import { ICharacter } from "./Interface/Character.interface";
import { ContourSkeleton } from "./ContourSkeleton";
import { Character } from "./Character";
import { CollisionContours } from "./CollisionContours";

export class Player extends Character {
    intitializeContours(): void {
        /// setup skeleton
        var points: Array<Point> = new Array<Point>();
        points.push(new Point(-10, -10), new Point(10, -10), new Point(10, 10), new Point(-10, 10));
        this.skeleton = new ContourSkeleton(points);

        /// setup CollisionContours
        var formulas: Array<(skeleton: ContourSkeleton) => Point>
            = new Array<(skeleton: ContourSkeleton) => Point>();
        formulas.push((skeleton: ContourSkeleton): Point => {
            return Point.add(skeleton.points[0], skeleton.referencePoint);
        });
        formulas.push((skeleton: ContourSkeleton): Point => {
            return Point.add(skeleton.points[1], skeleton.referencePoint);
        });
        formulas.push((skeleton: ContourSkeleton): Point => {
            return Point.add(skeleton.points[2], skeleton.referencePoint);
        });
        formulas.push((skeleton: ContourSkeleton): Point => {
            return Point.add(skeleton.points[3], skeleton.referencePoint);
        });
        this.collisionContour = new CollisionContours(this.skeleton, formulas);
    }
    // addBuff(){
    // }
    // removeBuff(){
    // }
}