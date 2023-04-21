type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee; // Intersection Type

const e1: ElevatedEmployee = {
    name: 'Artem',
    privileges: ['create-server'],
    startDate: new Date()
}

type Combinate = string | number; // Union Type
type Numeric = number | boolean;  // Union Type

type Universal = Combinate & Numeric; // Intersection Type

function add(a: Combinate, b: Combinate) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
    console.log('Name: ' + emp.name);
    if ('privileges' in emp) {
        console.log('Privileges: ' + emp.privileges);
    }
    if ('startDate' in emp) {
        console.log('Start Date: ' + emp.startDate);
    }
}

printEmployeeInfo({name: 'Pedro', startDate: new Date()});
printEmployeeInfo(e1);

class Car {
    drive () {
        console.log('Driving...');
    }
}
class Truck {
    drive() {
        console.log('Driving a truck...');
    }

    loadCargo(amount: number) {
        console.log('Loading cargo...' + amount);
    }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

function useVehicle(vehicle: Vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {   // instanceof only for Classes not for Interfaces 
        vehicle.loadCargo(1000);
    }
}

useVehicle(v1);
useVehicle(v2);

interface Bird {
    type: 'bird';
    flyingSpeed: number;
}

interface Horse {
    type: 'horse'
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal (animal: Animal) {
    let speed;
    switch (animal.type) {
        case 'bird': 
            speed = animal.flyingSpeed;
            break;
        case 'horse':
            speed = animal.runningSpeed;
            break;
    }
    console.log('Moving at speed: ' + speed);
}

moveAnimal({type: 'bird', flyingSpeed: 100});
