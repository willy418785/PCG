import { Point } from "./Point";
import { ContourSkeleton } from "./ContourSkeleton";

export class CollisionContours {
    public skeleton: ContourSkeleton;
    private pointFormulas: Array<(skeleton: ContourSkeleton) => Point>;
    constructor(skeleton: ContourSkeleton, formulas : Array<(skeleton: ContourSkeleton) => Point>) {
        this.pointFormulas = formulas;
        this.skeleton = skeleton;
    }
    getSegments(): Array<[Point, Point]> {
        let segments: Array<[Point, Point]> = new Array<[Point, Point]>();
        for (let index = 0; index < this.pointFormulas.length; index++) {
            let lastIndex = this.pointFormulas.length - 1;
            if (index != lastIndex) {
                segments.push([
                    this.pointFormulas[index](this.skeleton),
                    this.pointFormulas[index + 1](this.skeleton)
                ]);
            }
            else {
                segments.push([
                    this.pointFormulas[lastIndex](this.skeleton),
                    this.pointFormulas[0](this.skeleton)
                ]);
            }
        }
        return segments;
    }
    
}