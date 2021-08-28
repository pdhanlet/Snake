"use strict";
exports.__esModule = true;
function randomInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
var Apple = /** @class */ (function () {
    function Apple(locationVal) {
        this.location = locationVal;
    }
    Apple.prototype.spawn = function (availableLocations) {
        this.location = availableLocations[randomInterval(0, availableLocations.length - 1)];
    };
    Apple.prototype.getLocation = function () {
        return this.location;
    };
    return Apple;
}());
exports.Apple = Apple;
