
let id = 0;

export class Character {
    constructor(name, level, hitpoints, maxHitpoints) {
        this.name = name
        this.level = level
        this.hitpoints = level * 4;
        this.maxHitpoints = level * 4;
        this.id = id++
    }

    view(details = '') {
        return "<div class='character'>" +
            this.name + " Lv. " + this.level +
            details +
            "</div>"
    }
}
