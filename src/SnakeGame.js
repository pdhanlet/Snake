"use strict";
exports.__esModule = true;
exports.runGame = void 0;
var Grid_1 = require("./GameState/Grid");
var Graphics_1 = require("./Graphics");
function runGame() {
    var grid = new Grid_1.Grid();
    var graphics = new Graphics_1.Graphics();
    graphics.renderGrid(grid.getTilesAndDirection());
}
exports.runGame = runGame;
