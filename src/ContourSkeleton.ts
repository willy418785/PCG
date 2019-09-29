import { Point } from "./Point";

export class ContourSkeleton {
    // The points is put in clockwise order.
    public points: Array<Point>;
    
    public referencePoint: Point;

    constructor(points: Array<Point>, referencePoint: Point = new Point(0, 0)) {
        this.points = points;
        this.referencePoint = referencePoint;
    }
}