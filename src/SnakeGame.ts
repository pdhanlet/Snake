import {Grid} from "./GameState/Grid";
import {useInput} from "./InputManager";
import {Graphics} from "./Graphics";

export async function runGame() {    
    let grid = new Grid();
    let graphics = new Graphics();

    graphics.renderGrid(grid.getTilesAndDirection());
    while (true) {
        let gameEnd = grid.nextFrame(useInput());
        graphics.renderGrid(grid.getTilesAndDirection());
        if (gameEnd) break;
        await new Promise(r => setTimeout(r, 300));
    }
}