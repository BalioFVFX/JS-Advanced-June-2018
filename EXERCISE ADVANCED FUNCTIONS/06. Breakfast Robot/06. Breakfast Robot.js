function closure() {
    let products = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
        get getProtein() {
            return this.protein
        },
        get getCarbohydrates() {
            return this.carbohydrate
        },
        get getFat() {
            return this.fat
        },
        get getFlavours() {
            return this.flavour
        },
        set removeProtein(value) {
            this.protein -= value
        },
        set removeCarbohydrates(value) {
            this.carbohydrate -= value
        },
        set removeFat(value) {
            this.fat -= value
        },
        set removeFlavours(value) {
            this.flavour -= value
        },
        noProtein: () => {
            return 'Error: not enough protein in stock';
        },
        noCarbohydrates: () => {
            return 'Error: not enough carbohydrate in stock';
        },
        noFat: () => {
            return 'Error: not enough fat in stock';
        },
        noFlavours: () => {
            return 'Error: not enough flavour in stock';
        },
        printSuccess: () => {
            return 'Success';
        }
    };


    return (input) => {
        let commands = input.split(' ');
        if (commands[0] === 'restock') {
            products[commands[1]] += Number(commands[2]);
            return products.printSuccess();
        }
        else if (commands[0] === 'prepare') {
            let product = commands[1];
            let quantity = Number(commands[2]);
            switch (product) {
                case 'apple':
                    let appleCarbs = quantity;
                    let appleFlavours = 2 * quantity;
                    if (products.getCarbohydrates < appleCarbs) {
                        return products.noCarbohydrates();
                    }
                    else if (products.getFlavours < appleFlavours) {
                        return products.noFlavours();
                    }
                    else {
                        products.removeCarbohydrates = appleCarbs;
                        products.removeFlavours = appleFlavours;
                        return products.printSuccess();
                    }
                case 'coke':
                    let cokeCarbs = 10 * quantity;
                    let cokeFlavours = 20 * quantity;

                    if (products.getCarbohydrates < cokeCarbs) {
                        return products.noCarbohydrates();
                    }
                    else if (products.getFlavours < cokeFlavours) {
                        return products.noFlavours();
                    }
                    else {
                        products.removeCarbohydrates = cokeCarbs;
                        products.removeFlavours = cokeFlavours;
                        return products.printSuccess();
                    }
                case 'burger':
                    let burgerCarbs = 5 * quantity;
                    let burgerFat = 7 * quantity;
                    let burgerFlavour = 3 * quantity;
                    if (products.getCarbohydrates < burgerCarbs) {
                        return products.noCarbohydrates();
                    }
                    else if (products.getFat < burgerFat) {
                        return products.noFat();
                    }
                    else if (products.getFlavours < burgerFlavour) {
                        return products.noFlavours();
                    }
                    else {
                        products.removeCarbohydrates = burgerCarbs;
                        products.removeFat = burgerFat;
                        products.removeFlavours = burgerFlavour;
                        return products.printSuccess();
                    }
                case 'omelet':
                    let omeletProtein = 5 * quantity;
                    let omeletFat = quantity;
                    let omeletFlavour = quantity;
                    if (products.getProtein < omeletProtein) {
                        return products.noProtein();
                    }
                    else if (products.getFat < omeletFat) {
                        return products.noFat();
                    }
                    else if (products.getFlavours < omeletFlavour) {
                        return products.noFlavours();
                    }
                    else {
                        products.removeProtein = omeletProtein;
                        products.removeFat = omeletFat;
                        products.removeFlavours = omeletFlavour;
                        return products.printSuccess();
                    }
                case 'cheverme':
                    let chevermeProtein = 10 * quantity;
                    let chevermeCarbs = 10 * quantity;
                    let chevermeFat = 10 * quantity;
                    let chevermeFlavours = 10 * quantity;
                    if (products.getProtein < chevermeProtein) {
                        return products.noProtein();
                    }
                    else if (products.getCarbohydrates < chevermeCarbs) {
                        return products.noCarbohydrates();
                    }
                    else if (products.getFat < chevermeFat) {
                        return products.noFat();
                    }
                    else if (products.getFlavours < chevermeFlavours) {
                        return products.noFlavours();
                    } else {
                        products.removeProtein = chevermeProtein;
                        products.removeCarbohydrates = chevermeCarbs;
                        products.removeFat = chevermeFat;
                        products.removeFlavours = chevermeFlavours;
                        return products.printSuccess();
                    }
                default:
                    break;
            }
        }
        else if (commands[0] === 'report') {
            return `protein=${products.getProtein} carbohydrate=${products.getCarbohydrates} fat=${products.getFat} flavour=${products.getFlavours}`;
        }
    }
}