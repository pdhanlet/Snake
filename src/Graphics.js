"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var Grid_1 = require("./GameState/Grid");
var Location_1 = require("./GameState/Location");
var twojs_ts_1 = __importDefault(require("twojs-ts"));
var Graphics = /** @class */ (function () {
    function Graphics() {
        //var elem = document.getElementById("two");
        var elem = document.createElement("two");
        document.body.appendChild(elem);
        this.two = new twojs_ts_1["default"]({ width: 1000, height: 1000 }).appendTo(elem);
    }
    Graphics.prototype.renderGrid = function (gridInfo) {
        this.drawBoundries();
        var tiles = gridInfo.tiles;
        var direction = gridInfo.direction;
        for (var x = 0; x < tiles.length; x++) {
            for (var y = 0; y < tiles[0].length; y++) {
                var location_1 = new Location_1.Location(x, y);
                switch (tiles[x][y]) {
                    case Grid_1.TileOccupant.HEAD:
                        this.drawHead(location_1, direction);
                        break;
                    case Grid_1.TileOccupant.BODY:
                        this.drawBody(location_1);
                        break;
                    case Grid_1.TileOccupant.APPLE:
                        this.drawApple(location_1);
                }
            }
        }
        this.two.update();
    };
    Graphics.prototype.drawBoundries = function () {
        var rect = this.two.makeRectangle(525, 25, 550, 50);
        rect.fill = "#000000";
    };
    Graphics.prototype.drawBody = function (location) {
    };
    Graphics.prototype.drawHead = function (location, direction) {
    };
    Graphics.prototype.drawApple = function (location) {
    };
    return Graphics;
}());
exports.Graphics = Graphics;
