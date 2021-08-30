import {Direction} from "./GameState/Direction";

export class InputManager {
    private input: Direction;
    
    constructor() {
        console.log("Input initialized");
        this.input = undefined;
        // let elem: HTMLElement = document.createElement("text");  
        // document.body.appendChild(elem);
        let elem = document.getElementById("test");
        elem.focus();
        //elem.addEventListener("keydown", this.onKeyPress);
        //this.press(new KeyboardEvent("keydown", {key:"w"}));
        //console.log(`In constructor after press  = ${this.input}`);
        
    }

    private onKeyPress(e: KeyboardEvent) { 
        console.log(`e = ${e}`);
        console.log(e.key);
        switch (e.key) {
            case "a":
                this.input = Direction.LEFT;
                break;
            case "s":
                this.input = Direction.DOWN;
                break;
            case "d" :
                this.input = Direction.RIGHT;
                break;
            case "w":
                this.input = Direction.UP;
        }
        console.log(`In key press  = ${this.input}`);
    }

    public getInput1() {
        return this.input;
    }

    public getInput() {
        let tempInput = this.input;        
        this.input = undefined;
        return tempInput;
    }
}