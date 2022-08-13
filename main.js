const HAMBURGER = {
    price: 0,
    calories: 0,

    sizeBurg: {
        small: {
            price: 5,
            calories: 20,
        },

        big: {
            price: 10,
            calories: 40,
        },
    },

    toppings: {
        cheese: {
            price: 1,
            calories: 20,
        },

        salad: {
            price: 2,
            calories: 5,
        },

        potato: {
            price: 1.5,
            calories: 10,
        },
    },

    supplements: {
        seasoning: {
            price: 1.5,
            calories: 0,
        },

        mayonnaise: {
            price: 2,
            calories: 5,
        },
    },
};

class Hamburger {
    constructor() {
        this.price = 0;
        this.calories = 0;
    }

    hambSize(size) {
        this.price += size.price;
        this.calories += size.calories;
    }

    addToppings(topp) {
        if (Array.isArray(topp)) {
            for (let element in topp) {
                this.price += topp[element].price;
                this.calories += topp[element].calories;
            }
        } else {
            this.price += topp.price;
            this.calories += topp.calories;
        }
    }

    addSupplement(supp) {
        if (Array.isArray(supp)) {
            for (let element in supp) {
                this.price += supp[element].price;
                this.calories += supp[element].calories;
            }
        } else {
            this.price += supp.price;
            this.calories += supp.calories;
        }
    }

    getPrice() {
        return this.price;
    }

    getCalories() {
        return this.calories;
    }
}

const burger = new Hamburger();
burger.hambSize(HAMBURGER.sizeBurg.small);
burger.addToppings([HAMBURGER.toppings.salad, HAMBURGER.toppings.potato]);
burger.addSupplement(HAMBURGER.supplements.mayonnaise);
console.log(burger.getPrice());
console.log(burger.getCalories());
