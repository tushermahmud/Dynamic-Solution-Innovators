var intersect = require("intersect");
var path = require("path");
path.resolve("./index.js");

class Vehicle {
    modelNumber;
    engineType = ["oil", "gass", "diesel"];
    enginePower;
    tireSize;
    visitor = 30;
    constructor(modelNumber, engineType, enginePower, tireSize) {
        this.modelNumber = modelNumber;
        this.engineType = intersect(this.engineType, engineType);
        this.enginePower = enginePower;
        this.tireSize = tireSize;
    }
    deleteVehicle(vehicle) {
        const index = showRoom.findIndex((vcl) => {
            return vcl.modelNumber == vehicle.modelNumber;
        });
        showRoom.splice(index, 1);
    }
    addVehicle(vehicle) {
        if (vehicle.constructor.name === "SportsVehicles") {
            this.visitor = vehicle.visitor + 20;
            vehicle.visitor = this.visitor;
            showRoom.push(vehicle);
        } else {
            showRoom.push(vehicle);
        }
    }
}
class NormalVehicles extends Vehicle {
    constructor(modelNumber, engineType, enginePower, tireSize) {
        super(modelNumber, engineType, enginePower, tireSize);
    }
}
class SportsVehicles extends Vehicle {
    turbo;
    constructor(modelNumber, engineType, enginePower, tireSize, turbo) {
        super(modelNumber, engineType, enginePower, tireSize, turbo);
        this.turbo = turbo;
    }
}
class HeavyVehicles extends Vehicle {
    weight;
    constructor(modelNumber, engineType, enginePower, tireSize, weight) {
        super(modelNumber, engineType, enginePower, tireSize, weight);
        this.weight = weight;
    }
}
vehicle = new Vehicle();
normal = new NormalVehicles(
    "janinaNormal", ["oil", "gass", "diesel"],
    "34",
    "300m"
);
sports = new SportsVehicles("janinaSports", ["oil"], "34", "300m", true);
heavy = new HeavyVehicles("janinaHeavy", ["oil"], "34", "300m", "600kg");

let showRoom = [normal, sports, heavy];
vehicle.addVehicle(sports);
vehicle.addVehicle(sports);
vehicle.addVehicle(normal);

vehicle.deleteVehicle(sports);
vehicle.deleteVehicle(heavy);

console.log(showRoom);