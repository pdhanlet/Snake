import {Location} from "./Location";
import {Direction} from "./Direction";
import {Snake} from "./Snake";
import {Apple} from "./Apple";


export enum TileOccupant {
    HEAD,
    BODY,
    APPLE,
    NONE
}
export class Grid {
    private width: number;
    private height: number;
    private tiles: TileOccupant[][];
    private tilesList: Location[];
    private snake: Snake;
    private apple: Apple;

    constructor() {
        this.width = 9;
        this.height = 9;
        this.tilesList = [];
        this.tiles = [];
        for (let x = 0; x < this.width; x++) {
            this.tiles.push([]);
            for (let y = 0; y < this.height; y++) {
                this.tiles[x].push(TileOccupant.NONE);
                this.tilesList.push(new Location(x, y));
            }
        }
        let snakeLocations = [new Location(4, 4), new Location(3, 4), new Location(2, 4), new Location(1, 4)];
        let appleLocation = new Location(7, 4);
        this.snake = new Snake(snakeLocations);
        this.apple = new Apple(appleLocation);
        this.setPosition(snakeLocations);
        this.setApple(appleLocation);
    }

    public nextFrame(direction: Direction): boolean {
        console.log(`In Grid = ${direction}`);
        if (direction == undefined) direction = +this.snake.getDirection();
        let nextHead: Location = this.snake.getNextHead(direction);
        let eatsApple: boolean = nextHead.equals(this.apple.getLocation());
        let nextPosition: Location[] = this.snake.getNextPosition(direction, eatsApple);
        if (eatsApple) {
            let availableLocations: Location[] = [];
            this.tilesList.forEach(
                (tile) => {
                    if (!nextPosition.some((snakeTile) => tile.equals(snakeTile))) {
                        availableLocations.push(tile);
                    }
                }
            );
            this.apple.spawn(availableLocations);
            this.setApple(this.apple.getLocation());
        }
        else {
            if (!this.isOnGrid(nextHead) || nextPosition.some((value, index) => index != 0 && value.equals(nextHead))) {
                return true;
            }
        }
        this.removeLastPosition(this.snake.getPosition());
        this.snake.move(nextPosition, direction);
        this.setPosition(this.snake.getPosition());
        return false;
    }

    private isOnGrid(location: Location): boolean {
        return( 
            0 <= location.x && location.x < this.width &&
            0 <= location.y && location.y < this.height
        );
    }

    private setLocation(location: Location, occupant: TileOccupant): void {
        this.tiles[location.x][location.y] = occupant;
    }

    private setLocations(locations: Location[], occupant: TileOccupant): void {
        locations.forEach((location) => this.setLocation(location, occupant));
    }

    private removeLastPosition(locations: Location[]) {
        this.setLocations(locations, TileOccupant.NONE);
    }

    private setPosition(locations: Location[]) {
        this.setLocation(locations[0], TileOccupant.HEAD);
        let body = [...locations];
        body.shift();
        this.setLocations(body, TileOccupant.BODY);
    }

    private setApple(location: Location) {
        this.setLocation(location, TileOccupant.APPLE);
    }

    public getTilesAndDirection() {
        return {tiles: this.tiles, direction: this.snake.getDirection()};
    }
}