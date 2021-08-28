"use strict";
exports.__esModule = true;
exports.Location = void 0;
var Location = /** @class */ (function () {
    function Location(a, b) {
        if (typeof a === "number") {
            this.x = a;
            this.y = b;
        }
        else {
            this.x = a.x;
            this.y = a.y;
        }
    }
    Location.prototype.move = function (a, b) {
        if (typeof a === "number") {
            this.x += a;
            this.y += b;
        }
        else {
            this.move(a.x, a.y);
        }
    };
    Location.prototype.equals = function (other) {
        return this.x == other.x && this.y == other.y;
    };
    return Location;
}());
exports.Location = Location;
