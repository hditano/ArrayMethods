import { Character } from "./character.js";

export class Spider extends Character {
    constructor(level) {
        super('Speedy', level)
        this.bite = this.bite * level;
    }

    bite() {
        this.bite++;
    }
}

export class Scorpion extends Character {
    constructor(level) {
        super(level)
        this.sting = this.sting * level;
    }

    sting() {
        this.sting++;
    }
}

export class Dragon extends Character {
    constructor(level) {
        super('Dragon', level)
        this.fireBreath = this.fireBreath * level;
    }

    fireBreath() {
        this.fireBreath++;
    }
}