"use strict";
var _a;
exports.__esModule = true;
var Location_1 = require("./Location");
var Direction;
(function (Direction) {
    Direction[Direction["UP"] = 0] = "UP";
    Direction[Direction["DOWN"] = 1] = "DOWN";
    Direction[Direction["LEFT"] = 2] = "LEFT";
    Direction[Direction["RIGHT"] = 3] = "RIGHT";
})(Direction = exports.Direction || (exports.Direction = {}));
;
exports.directionCoordinates = (_a = {},
    _a[Direction.UP] = new Location_1.Location(0, 1),
    _a[Direction.DOWN] = new Location_1.Location(0, -1),
    _a[Direction.LEFT] = new Location_1.Location(-1, 0),
    _a[Direction.RIGHT] = new Location_1.Location(1, 0),
    _a);
