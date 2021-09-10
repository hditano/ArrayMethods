// function Book (id, title, author, themes = []) {
//     this.id = id;
//     this.title = title;
//     this.author = author;
//     this.themes = themes;
// }


// const newBook = new Book(27, 'Quinto Elemento', 'Wilbur Smith');

// Book.prototype.AddTheme = function(theme) {
//     this.themes = [...this.themes, theme];
// }

// newBook.AddTheme('Adventure');

// console.log(newBook);

// newBook.AddTheme('Science Fiction');

// class Film {
//     //Your code here.
//     constructor(id, title, director, releaseYear, genres = [], needMachine = false) {
//         this.id = id;
//         this.title = title;
//         this.director = director;
//         this.releaseYear = releaseYear;
//         this._genres = genres;
//         this.needMachine = needMachine;
//     }

//     addMachine() {
//         return this.needMachine;
//     }

//     set SetGenre(genre) {
//         if (typeof genre !== "string") {
//             return this._genres;

//         } else {
//             this._genres = [...this._genres, genre];

//         }
//     }

//     get GetGenre() {
//         return this._genres;
//     }

//     getFilmTitle() {
//         return `Films are: ${this.genres}`;
//     }
// }

// class FilmMaker extends Film {
//     constructor(id, title, director, releaseYear, genres = [], needMachine, maker, speed, hasFilm) {
//         super(id, title, director, releaseYear, genres = [], needMachine);
//         this.maker = maker;
//         this.speed = speed;
//         this.hasFilm = hasFilm;
//     }

//     getStatus() {
//         if (super.addMachine()) {
//             return `Needs a Machine is ${this.needMachine}`;
//         }
//     }



// }

// const newFilm = new FilmMaker(27, 'Fifth Element', 'Cameron Crowe', 2006, 'Papito', true, 'Maker 9000', 250, true);
// newFilm.SetGenre = 'Papito';
// console.log(newFilm);

// class Product {
//     constructor(id, name, hasDiscount) {
//         this.id = id;
//         this._name = name;
//         this._hasDiscount = hasDiscount;
//         this.calculateDiscount = () => {
//             return 10 * id;
//         }
//     }

//     get name() {
//         return this._name;
//     }

//     set name(name) {
//         if(typeof name !== 'string') {
//             return this._name;
//         } else {
//             this._name = name;
//         }
//     }

//     get hasDiscount() {
//         return this._hasDiscount;
//     }

//     set hasDiscount(hasDiscount) {
//         if(typeof hasDiscount !== "boolean") {
//             return this._hasDiscount;
//         } else {
//             this._hasDiscount = hasDiscount;
//         }
//     }

// }

// class TechProduct extends Product {
//     constructor(id, name, hasDiscount, type, Voltage) {
//         super(id, name, hasDiscount);
//         this.type = type;
//         this.Voltage = Voltage;
//     }
// }

// const newTechProduct = new TechProduct(33, 'Tv LG', true, 'Television', 220);
// newTechProduct.hasDiscount = true;
// console.log(newTechProduct.calculateDiscount());

/* Array methods - Some - Checks if any elements meets the criteria */

const myArray = [{
        name: 'Hernan',
        age: 39
    },
    {
        name: 'Sebastian',
        age: 41
    },
];

console.log(myArray.some(array => array.age > 50));

/* Array Method - Every - Checks if Every element checks the Criteria*/

console.log(myArray.every(array => array.age < 42));

/* Array Method - map - makes a new array when matching the criteria*/

const mapArray = myArray.map(array => array.age > 40);

console.log(mapArray);

/* Array Method - Filter - makes a new array if matches the criteria*/

const newArray = myArray.filter(array => array.age > 40);
console.log(newArray);

/* Array Method - Find  - makes a new array if matches the criteria otherwise undefined*/

const findArray = myArray.find(array => array.name.startsWith('D'));

console.log(findArray);

/* Array Method - Reduce - Will execute whatever we specify with elements and returns it */

const reduceResult = myArray.reduce((accumulator, ages) => {
    return ages.age += accumulator;
}, 0)

console.log(reduceResult);

/* Power of Reduce - Return each element multiplied by 2 and then an array that holds double values */

const numbers = [1, 2, 3, 4, 5, 6];

const newReduceArray = numbers.reduce((accumulator, ele) => {
    accumulator.push(ele * 2);
    return accumulator;
}, [])

console.log(newReduceArray);
console.log(numbers);

/* get all the numbers over 3 and put it in a sub-set array */

const overThreeArray = numbers.reduce((accumulator, ele) => {
    if (ele > 3) {
        accumulator.push(ele);
    }
    return accumulator;
}, [])

console.log(overThreeArray);

/* Using reduce method to check if a certain criteria matches, if so, return an array with it */

const reduceArray = myArray.reduce((accumulator, ele) => {
    if (ele.age > 40) {
        accumulator.push(ele);
    }
    return accumulator;
}, []);

console.log(reduceArray);

/* Destructuring Arrays */

const myArrayDestruct = ['Hernan', 'Zoe', 'Gimena', 'Sebastian'];

const [myself, daughter, wife, brother] = myArrayDestruct;

console.log(wife);


/* Object values using .reduce() to sum up all the values inside the Object */

const monthlyExpenses = {
    food: 400,
    rent: 1700,
    insurance: 550,
    internet: 49,
    phone: 95
};

const values = Object.values(monthlyExpenses);

console.log(values);

const reduceVales = Object.values(monthlyExpenses).reduce((accumulator, ele) => {
    return ele + accumulator;
})

console.log(reduceVales);


/* Object entries - Pretty much converts an Object to an Array using Object.entries along with reduce */

const users = {
    '2345234': {
        name: "John",
        age: 29
    },
    '8798129': {
        name: "Jane",
        age: 42
    },
    '1092384': {
        name: "Fred",
        age: 17
    }
};



const myEntries = Object.entries(users).reduce((accumulator, [id, user]) => {
    if (user.age > 10) {
        accumulator.push({
            ...user,
            id
        })
    }
    return accumulator;
}, [])

console.log(myEntries);

/* Set - may only occur once */

const customerDishes = [
    "Chicken Wings",
    "Fish Sandwich",
    "Beef Stroganoff",
    "Grilled Cheese",
    "Blue Cheese Salad",
    "Chicken Wings",
    "Reuben Sandwich",
    "Grilled Cheese",
    "Fish Sandwich",
    "Chicken Pot Pie",
    "Fish Sandwich",
    "Beef Stroganoff"
];

const newArraySet = [...new Set([...customerDishes])];

console.log(newArraySet);


/* 
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach(number => {
  console.log(number);  
});

/* 
- map()
- filter()
- reduce()
- some() / every()
- find() / findIndex()
- forEach()

Plus:

- slice()
- concat()
- includes()
- array spread operator
*/

const numbers1 = [1, 2, 3, 4, 5];

/* map solution */

// const newNumbers = numbers1.map(ele => {
//     return ele;
// });

// console.log(newNumbers);


class myLayout {
    constructor(id, height, width) {
        this.id = id;
        this.height = height;
        this.width = width;
    }

    getStatus() {
        console.log(`ID: ${this.id} - Height: ${this.height} - Width: ${this.width}`);
    }
}

const layout1 = new myLayout(27, 240, 240);

layout1.getStatus();

const ArrayLayout = [27, 240, 240];

for (let i = 0; i < ArrayLayout.length; i++) {
    const layout2 = new myLayout(ArrayLayout[i], ArrayLayout[i], ArrayLayout[i])
}
/* Create randomClass using array */

import { Spider, Scorpion, Dragon } from "./enemies.js";
import { startDungeon, startBattle } from "./combat.js";


const newChar = new Spider(20);
const newChar1 = new Dragon(15);
newChar.pickupHealth('Cerveza');
newChar1.pickupHealth('Pan');
newChar1.getInventoryView();

let myOpponents = [new Dragon(1), new Spider(2)];

startDungeon(newChar, myOpponents);

