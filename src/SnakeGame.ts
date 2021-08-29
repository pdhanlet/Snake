import {Grid} from "./GameState/Grid";
import {InputManager} from "./InputManager";
import {Graphics} from "./Graphics";

export async function runGame() {    
    let grid = new Grid();
    let inputManager = new InputManager();
    console.log(`After constructor  = ${inputManager.getInput1()}`)
    let graphics = new Graphics();

    graphics.renderGrid(grid.getTilesAndDirection());
    while (true) {
        let gameEnd = grid.nextFrame(inputManager.getInput());
        graphics.renderGrid(grid.getTilesAndDirection());
        if (gameEnd) break;
        await new Promise(r => setTimeout(r, 500));
    }
}