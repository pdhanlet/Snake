import {Location} from "./Location";

export enum Direction {UP, DOWN, LEFT, RIGHT};
export let directionCoordinates = {
    [Direction.UP]: new Location(0, 1),
    [Direction.DOWN]: new Location(0, -1),
    [Direction.LEFT]: new Location(-1, 0),
    [Direction.RIGHT]: new Location(1, 0)
};