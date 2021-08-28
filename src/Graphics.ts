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
        let rect = this.two.makeRectangle(525, 25, 550, 50);
        rect.fill = "#FF8000";
    }

    private drawBody(location: Location) {
        
    }

    private drawHead(location: Location, direction: Direction) {
 
    }

    private drawApple(location: Location) {

    }
}



