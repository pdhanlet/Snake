"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var Location_1 = require("./Location");
var Direction_1 = require("./Direction");
var Snake = /** @class */ (function () {
    function Snake(positionVal) {
        this.position = positionVal;
        this.direction = Direction_1.Direction.RIGHT;
    }
    Snake.prototype.getNextHead = function (direction) {
        var nextHead = new Location_1.Location(this.position[0]);
        nextHead.move(Direction_1.directionCoordinates[+direction]);
        return nextHead;
    };
    Snake.prototype.getNextPosition = function (direction, eatsApple) {
        var nextPosition = __spreadArrays(this.position);
        if (!eatsApple) {
            nextPosition.pop();
        }
        nextPosition.splice(0, 0, this.getNextHead(direction));
        return nextPosition;
    };
    Snake.prototype.move = function (newPosition, direction) {
        this.position = newPosition;
        this.direction = direction;
    };
    Snake.prototype.getPosition = function () {
        return this.position;
    };
    Snake.prototype.getDirection = function () {
        return this.direction;
    };
    return Snake;
}());
exports.Snake = Snake;
