"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.Graphics = void 0;
var Grid_1 = require("./GameState/Grid");
var Location_1 = require("./GameState/Location");
var Direction_1 = require("./GameState/Direction");
var twojs_ts_1 = __importDefault(require("twojs-ts"));
var Graphics = /** @class */ (function () {
    function Graphics() {
        var elem = document.createElement(null);
        document.body.appendChild(elem);
        this.two = new twojs_ts_1["default"]({ width: 1000, height: 1000 }).appendTo(elem);
    }
    Graphics.prototype.renderGrid = function (gridInfo) {
        this.two.clear();
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
        var rectTop = this.two.makeRectangle(275, 25, 550, 50);
        rectTop.fill = "#000000";
        var rectBottom = this.two.makeRectangle(275, 525, 550, 50);
        rectBottom.fill = "#000000";
        var rectRight = this.two.makeRectangle(25, 275, 50, 550);
        rectRight.fill = "#000000";
        var rectLeft = this.two.makeRectangle(525, 275, 50, 550);
        rectLeft.fill = "#000000";
    };
    Graphics.prototype.drawBody = function (location) {
        var body = this.two.makeRectangle(75 + location.x * 50, 475 - (location.y * 50), 50, 50);
        body.fill = "#00FF00";
    };
    Graphics.prototype.drawHead = function (location, direction) {
        var _a, _b;
        var head = this.two.makeRectangle(75 + location.x * 50, 475 - (location.y * 50), 50, 50);
        head.fill = "#00FF00";
        var leftEyePossibilties = (_a = {},
            _a[Direction_1.Direction.UP] = new Location_1.Location(16.6, 33.3),
            _a[Direction_1.Direction.DOWN] = new Location_1.Location(33.3, 16.6),
            _a[Direction_1.Direction.RIGHT] = new Location_1.Location(33.3, 33.3),
            _a[Direction_1.Direction.LEFT] = new Location_1.Location(16.6, 16.6),
            _a);
        var leftEye = this.two.makeRectangle(location.x * 50 + 50 + leftEyePossibilties[direction].x, 500 - (location.y * 50 + leftEyePossibilties[direction].y), 5, 5);
        leftEye.fill = "#000000";
        var rightEyePossibilties = (_b = {},
            _b[Direction_1.Direction.UP] = new Location_1.Location(33.3, 33.3),
            _b[Direction_1.Direction.DOWN] = new Location_1.Location(16.6, 16.6),
            _b[Direction_1.Direction.RIGHT] = new Location_1.Location(33.3, 16.6),
            _b[Direction_1.Direction.LEFT] = new Location_1.Location(16.6, 33.3),
            _b);
        var rightEye = this.two.makeRectangle(location.x * 50 + 50 + rightEyePossibilties[direction].x, 500 - (location.y * 50 + rightEyePossibilties[direction].y), 5, 5);
        rightEye.fill = "#000000";
    };
    Graphics.prototype.drawApple = function (location) {
        var apple = this.two.makeRectangle(75 + location.x * 50, 475 - (location.y * 50), 50, 50);
        apple.fill = "#FF0000";
    };
    return Graphics;
}());
exports.Graphics = Graphics;
