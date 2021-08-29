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
        this.press(new KeyboardEvent("keydown", { key: "d" }));
        console.log("In constructor after press  = " + this.input);
    }
    InputManager.prototype.press = function (e) {
        console.log(e.key);
        switch (e.key) {
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
        console.log("In key press  = " + this.input);
    };
    InputManager.prototype.getInput1 = function () {
        return this.input;
    };
    InputManager.prototype.getInput = function () {
        var tempInput = this.input;
        this.input = undefined;
        return tempInput;
    };
    return InputManager;
}());
exports.InputManager = InputManager;
