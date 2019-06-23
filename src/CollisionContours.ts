import { Point } from "./Point";

export class CollisionContours {
    public points: Array<Point>;
    public referencePoint: Point;
    constructor() {

    }
    getSegments(): Array<[Point, Point]> {
        let segments: Array<[Point, Point]> = new Array<[Point, Point]>();
        for (let index = 0; index < this.points.length; index++) {
            let lastIndex = this.points.length - 1;
            if (index != lastIndex) {
                segments.push([this.points[index], this.points[index + 1]]);
            }
            else {
                segments.push([this.points[lastIndex], this.points[0]]);
            }
        }
        return segments;
    }
}