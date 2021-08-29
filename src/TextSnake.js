"use strict";
exports.__esModule = true;
var Grid_1 = require("./GameState/Grid");
var Direction_1 = require("./GameState/Direction");
var prompt = require("prompt-sync")();
function printGrid(tiles) {
    for (var y = tiles[0].length - 1; y >= 0; y--) {
        for (var x = 0; x < tiles.length; x++) {
            if (x == 0) {
                process.stdout.write(y + " ");
            }
            switch (tiles[x][y]) {
                case Grid_1.TileOccupant.NONE:
                    process.stdout.write("-");
                    break;
                case Grid_1.TileOccupant.HEAD:
                    process.stdout.write("H");
                    break;
                case Grid_1.TileOccupant.BODY:
                    process.stdout.write("B");
                    break;
                case Grid_1.TileOccupant.APPLE:
                    process.stdout.write("A");
                    break;
            }
        }
        console.log();
    }
    process.stdout.write(" ");
    for (var x = 0; x < tiles.length; x++) {
        process.stdout.write("" + x);
    }
}
function getInput() {
    var validInputs = {
        "a": Direction_1.Direction.LEFT,
        "d": Direction_1.Direction.RIGHT,
        "w": Direction_1.Direction.UP,
        "s": Direction_1.Direction.DOWN
    };
    while (true) {
        console.log();
        var input = prompt("Choose a direction (asdw): ");
        if (input in validInputs) {
            return validInputs[input];
        }
        prompt("Invalid input please try again. (enter)");
    }
}
var grid = new Grid_1.Grid();
while (true) {
    printGrid(grid.getTilesAndDirection().tiles);
    if (grid.nextFrame(getInput())) {
        break;
    }
}
