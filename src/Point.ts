export class Point {
    public x: number;
    public y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    static add(p1: Point, p2: Point): Point{
        var p: Point = new Point(0, 0);
        p.x = p1.x + p2.x;
        p.y = p1.y + p2.y;
        return p;
    }
}