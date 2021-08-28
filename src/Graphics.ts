import {TileOccupant} from "./GameState/Grid";
import {Location} from "./GameState/Location";
import {Direction} from "./GameState/Direction";
import Two from "twojs-ts";

export class Graphics {
    private two: Two;

    public constructor() {
        let elem: HTMLElement = document.createElement("two");
        document.body.appendChild(elem);
        this.two = new Two({width: 1000, height: 1000}).appendTo(elem);
    }

    public renderGrid(gridInfo: {tiles: TileOccupant[][], direction: Direction}) {
        this.drawBoundries();
        let tiles = gridInfo.tiles;
        let direction = gridInfo.direction;
        for (let x = 0; x < tiles.length; x++) {
            for (let y = 0; y < tiles[0].length; y++) {
                let location = new Location(x, y);
                switch(tiles[x][y]) {
                    case TileOccupant.HEAD:
                        this.drawHead(location, direction);
                        break;
                    case TileOccupant.BODY:
                        this.drawBody(location);
                        break;
                    case TileOccupant.APPLE:
                        this.drawApple(location);
                }
            }
        }
        this.two.update();
    }

    private drawBoundries() {
        let rectTop = this.two.makeRectangle(275, 25, 550, 50);
        rectTop.fill = "#000000";
        let rectBottom = this.two.makeRectangle(275, 525, 550, 50);
        rectBottom.fill = "#000000";
        let rectRight = this.two.makeRectangle(25, 275, 50, 550);
        rectRight.fill = "#000000";
        let rectLeft = this.two.makeRectangle(525, 275, 50, 550);
        rectLeft.fill = "#000000";
    }

    private drawBody(location: Location) {
        let body = this.two.makeRectangle(location.x * 50 + 75, location.y * 50 + 75, 50, 50);
        body.fill = "#00FF00";
    }

    private drawHead(location: Location, direction: Direction) {
        let head = this.two.makeRectangle(location.x * 50 + 75, location.y * 50 + 75, 50, 50);
        head.fill = "#00FF00";
        let leftEyePossibilties = {
            [Direction.UP] : new Location(16.6, 16.6),
            [Direction.DOWN] : new Location(33.3, 33.3),
            [Direction.RIGHT] : new Location(33.3, 16.6),
            [Direction.LEFT] : new Location(16.6, 33.3)
        }
        let leftEye = this.two.makeRectangle(
            location.x * 50 + 50 + leftEyePossibilties[direction].x, 
            location.y * 50 + 50 + leftEyePossibilties[direction].y, 
            5, 5);
        leftEye.fill = "#000000";
        let rightEyePossibilties = {
            [Direction.UP] : new Location(33.3, 16.6),
            [Direction.DOWN] : new Location(16.6, 33.3),
            [Direction.RIGHT] : new Location(33.3, 33.3),
            [Direction.LEFT] : new Location(16.6, 16.6)
        }
        let rightEye = this.two.makeRectangle(
            location.x * 50 + 50 + rightEyePossibilties[direction].x, 
            location.y * 50 + 50 + rightEyePossibilties[direction].y, 
            5, 5);
        rightEye.fill = "#000000";
    }

    private drawApple(location: Location) {
        let apple = this.two.makeRectangle(location.x * 50 + 75, location.y * 50 + 75, 50, 50);
        apple.fill = "#FF0000";
    }
}



