
let id = 0;

export class Character {
    constructor(name, level, hitpoints, maxHitpoints) {
        let myCharacter = {
            name,
            level,
            hitpoints: level * 4,
            maxHitpoints: level * 4,
            inventory: [],
        }
        id++;
        Object.assign(this, myCharacter);
    }

    view(details = '') {
        return "<div class='character'>" +
            this.name + " Lv. " + this.level +
            details +
            "</div>" +
            `<div class="character-${id}-hitpoints">HitPoints: ${this.hitpoints}/${this.maxHitpoints}</div>` +
            `<div class="inventory" id="character-${id}-inventory">${this.getInventoryView()}</div>`
        }

    pickupHealth(item) {
        this.inventory.push(item);
    }

    getInventoryView(){
        let inventoryView = '';

        for(let item of this.inventory) {
            inventoryView += item;
        }
        return inventoryView;
    }

}
