export class Location {
    x: number;
    y: number;

    constructor(xVal: number, yVal: number);
    constructor(location: Location);
    constructor(a: number | Location, b?: number) {
        if (typeof a === "number") {
            this.x = a;
            this.y = b;
        }
        else {
            this.x = a.x;
            this.y = a.y;
        }
    }

    public move(xMove: number, yMove: number): void;
    public move(move: Location): void;
    public move(a: number | Location, b?: number): void {
        if (typeof a === "number") {
            this.x += a;
            this.y += b;
        }
        else {
            this.move(a.x, a.y);
        }
    }

    public equals(other: Location): boolean {
        return this.x == other.x && this.y == other.y;
    }
}