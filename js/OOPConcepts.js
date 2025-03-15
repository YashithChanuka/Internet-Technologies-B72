console.log("OOPConcepts.js is loaded...");

class Vehicle { 
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}`;
    }
}

let vehicle = new Vehicle("Toyota", "Corolla", 2020);
console.log(vehicle.getDetails());

class Car extends Vehicle { 
    constructor(make, model, year, color) { 
        super(make, model, year);
        this.color = color;
    }

    getDetails() {
        return `Make: ${this.make}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    }
}

let car = new Car("Toyota", "Corolla", 2020, "Red");
console.log(car.getDetails());