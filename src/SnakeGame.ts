import {Grid} from "./GameState/Grid";
import {Graphics} from "./Graphics";

export function runGame() {    
    let grid = new Grid();
    let graphics = new Graphics();

    graphics.renderGrid(grid.getTilesAndDirection());
}