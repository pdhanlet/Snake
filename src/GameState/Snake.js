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
exports.Snake = void 0;
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
        var nextPosition = __spreadArray([], this.position, true);
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
