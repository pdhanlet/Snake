import {Location} from "./Location";

function randomInterval(min: number, max: number) { 
    return Math.floor(Math.random() * (max - min + 1) + min);
}

export class Apple {
    private location: Location;

    constructor(locationVal: Location) {
        this.location = locationVal;
    }

    public spawn(availableLocations: Location[]) {
        this.location = availableLocations[randomInterval(0, availableLocations.length - 1)];
    }

    public getLocation() {
        return this.location;
    }
}