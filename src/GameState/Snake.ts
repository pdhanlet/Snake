import {Location} from "./Location";
import {Direction, directionCoordinates} from "./Direction";

export class Snake {
    private position: Location[];
    private direction: Direction;

    constructor(positionVal: Location[]) {
        this.position = positionVal;
        this.direction = Direction.RIGHT;
    }

    public getNextHead(direction: Direction): Location {
        let nextHead = new Location(this.position[0]);
        nextHead.move(directionCoordinates[+direction]);
        return nextHead;
    }

    public getNextPosition(direction: Direction, eatsApple: boolean): Location[] {
        let nextPosition: Location[] = [... this.position];
        if (!eatsApple) {
            nextPosition.pop();
        }
        nextPosition.splice(0, 0, this.getNextHead(direction));
        return nextPosition;
    }

    public move(newPosition: Location[], direction: Direction): void {
        this.position = newPosition;
        this.direction = direction;

    }

    public getPosition(): Location[] {
        return this.position;
    }

    public getDirection(): Direction {
        return this.direction;
    }
}