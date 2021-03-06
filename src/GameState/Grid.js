"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.Grid = exports.TileOccupant = void 0;
var Location_1 = require("./Location");
var Snake_1 = require("./Snake");
var Apple_1 = require("./Apple");
var TileOccupant;
(function (TileOccupant) {
    TileOccupant[TileOccupant["HEAD"] = 0] = "HEAD";
    TileOccupant[TileOccupant["BODY"] = 1] = "BODY";
    TileOccupant[TileOccupant["APPLE"] = 2] = "APPLE";
    TileOccupant[TileOccupant["NONE"] = 3] = "NONE";
})(TileOccupant = exports.TileOccupant || (exports.TileOccupant = {}));
var Grid = /** @class */ (function () {
    function Grid() {
        this.width = 9;
        this.height = 9;
        this.tilesList = [];
        this.tiles = [];
        for (var x = 0; x < this.width; x++) {
            this.tiles.push([]);
            for (var y = 0; y < this.height; y++) {
                this.tiles[x].push(TileOccupant.NONE);
                this.tilesList.push(new Location_1.Location(x, y));
            }
        }
        var snakeLocations = [new Location_1.Location(4, 4), new Location_1.Location(3, 4), new Location_1.Location(2, 4), new Location_1.Location(1, 4)];
        var appleLocation = new Location_1.Location(7, 4);
        this.snake = new Snake_1.Snake(snakeLocations);
        this.apple = new Apple_1.Apple(appleLocation);
        this.setPosition(snakeLocations);
        this.setApple(appleLocation);
    }
    Grid.prototype.nextFrame = function (direction) {
        console.log("In Grid = " + direction);
        if (direction == undefined)
            direction = +this.snake.getDirection();
        var nextHead = this.snake.getNextHead(direction);
        var eatsApple = nextHead.equals(this.apple.getLocation());
        var nextPosition = this.snake.getNextPosition(direction, eatsApple);
        if (eatsApple) {
            var availableLocations_1 = [];
            this.tilesList.forEach(function (tile) {
                if (!nextPosition.some(function (snakeTile) { return tile.equals(snakeTile); })) {
                    availableLocations_1.push(tile);
                }
            });
            this.apple.spawn(availableLocations_1);
            this.setApple(this.apple.getLocation());
        }
        else {
            if (!this.isOnGrid(nextHead) || nextPosition.some(function (value, index) { return index != 0 && value.equals(nextHead); })) {
                return true;
            }
        }
        this.removeLastPosition(this.snake.getPosition());
        this.snake.move(nextPosition, direction);
        this.setPosition(this.snake.getPosition());
        return false;
    };
    Grid.prototype.isOnGrid = function (location) {
        return (0 <= location.x && location.x < this.width &&
            0 <= location.y && location.y < this.height);
    };
    Grid.prototype.setLocation = function (location, occupant) {
        this.tiles[location.x][location.y] = occupant;
    };
    Grid.prototype.setLocations = function (locations, occupant) {
        var _this = this;
        locations.forEach(function (location) { return _this.setLocation(location, occupant); });
    };
    Grid.prototype.removeLastPosition = function (locations) {
        this.setLocations(locations, TileOccupant.NONE);
    };
    Grid.prototype.setPosition = function (locations) {
        this.setLocation(locations[0], TileOccupant.HEAD);
        var body = __spreadArray([], locations, true);
        body.shift();
        this.setLocations(body, TileOccupant.BODY);
    };
    Grid.prototype.setApple = function (location) {
        this.setLocation(location, TileOccupant.APPLE);
    };
    Grid.prototype.getTilesAndDirection = function () {
        return { tiles: this.tiles, direction: this.snake.getDirection() };
    };
    return Grid;
}());
exports.Grid = Grid;
