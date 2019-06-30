import { Point } from "./Point";

export class ContourSkeleton {
    public points: Array<Point>;
    public referencePoint: Point;
    constructor(points: Array<Point>, referencePoint: Point) {
        this.points = points;
        this.referencePoint = referencePoint;
    }
}