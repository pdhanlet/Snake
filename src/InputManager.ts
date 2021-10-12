import {Direction} from "./GameState/Direction";

document.addEventListener("keydown", onKeyPress);
let input: Direction = undefined;

function onKeyPress(e: KeyboardEvent) { 
    switch (e.key) {
        case "a":
            input = Direction.LEFT;
            break;
        case "s":
            input = Direction.DOWN;
            break;
        case "d" :
            input = Direction.RIGHT;
            break;
        case "w":
            input = Direction.UP;
    }
}

export function useInput() {
    let tempInput = input;        
    input = undefined;
    return tempInput;
}