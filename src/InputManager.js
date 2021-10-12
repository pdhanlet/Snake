"use strict";
exports.__esModule = true;
exports.useInput = void 0;
var Direction_1 = require("./GameState/Direction");
document.addEventListener("keydown", onKeyPress);
var input = undefined;
function onKeyPress(e) {
    switch (e.key) {
        case "a":
            input = Direction_1.Direction.LEFT;
            break;
        case "s":
            input = Direction_1.Direction.DOWN;
            break;
        case "d":
            input = Direction_1.Direction.RIGHT;
            break;
        case "w":
            input = Direction_1.Direction.UP;
    }
}
function useInput() {
    var tempInput = input;
    input = undefined;
    return tempInput;
}
exports.useInput = useInput;
