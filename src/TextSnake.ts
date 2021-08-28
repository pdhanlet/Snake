import {Grid, TileOccupant} from "./GameState/Grid";
import {Direction} from "./GameState/Direction";
var prompt = require("prompt-sync")();

export {}

function printGrid(tiles: TileOccupant[][]): void {
    for (let y = tiles[0].length - 1; y >= 0; y--) {
        for (let x = 0; x < tiles.length; x++) {
            if (x == 0) {
                process.stdout.write(`${y} `);
            }
            switch(tiles[x][y]) {                
                case TileOccupant.NONE:
                    process.stdout.write("-");    
                    break;
                case TileOccupant.HEAD:
                    process.stdout.write("H");  
                    break;
                case TileOccupant.BODY:
                    process.stdout.write("B");  
                    break;
                case TileOccupant.APPLE: 
                process.stdout.write("A");   
                    break;                
            }
        }
        console.log();
    }
    process.stdout.write(" ");  
    for (let x = 0; x < tiles.length; x++) {
        process.stdout.write(`${x}`);
    }

}

function getInput(): Direction {
    let validInputs = {
        "a" : Direction.LEFT,
        "d" : Direction.RIGHT,
        "w" : Direction.UP,
        "s" : Direction.DOWN
    }
    while (true) {
        console.log();
        let input: string = prompt("Choose a direction (asdw): ");
        if (input in validInputs) {
            return validInputs[input];
        }
        prompt("Invalid input please try again. (enter)");
    }
}

let grid = new Grid();
while (true) {
    printGrid(grid.getTilesAndDirection().tiles);
    if (grid.nextFrame(getInput())) {
        break;
    }   
}