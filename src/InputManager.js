"use strict";
exports.__esModule = true;
exports.InputManager = void 0;
var Direction_1 = require("./GameState/Direction");
var InputManager = /** @class */ (function () {
    function InputManager() {
        console.log("Input initialized");
        this.input = 1;
        // let elem: HTMLElement = document.createElement("text");  
        // document.body.appendChild(elem);
        var elem = document.getElementById("test");
        elem.focus();
        //elem.addEventListener("keydown", this.onKeyPress);
        this.press("s");
    }
    InputManager.prototype.press = function (key) {
        console.log("Key pressed");
        console.log(key);
        switch (key) {
            case "a":
                this.input = Direction_1.Direction.LEFT;
                break;
            case "s":
                this.input = Direction_1.Direction.DOWN;
                break;
            case "d":
                this.input = Direction_1.Direction.RIGHT;
                break;
            case "w":
                this.input = Direction_1.Direction.UP;
        }
        console.log(this.input);
    };
    // public getInput1() {
    //     return this.input;
    // }
    InputManager.prototype.getInput = function () {
        var tempInput = this.input;
        this.input = undefined;
        return tempInput;
    };
    return InputManager;
}());
exports.InputManager = InputManager;
