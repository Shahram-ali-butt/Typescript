// Classes can implement user-defined object types
type car = {
    engine: string,
    horsepower: number
}

class supercar implements car{
    constructor(public engine: string, public horsepower:number){}
}

// Classes can't implement literal or union types
type role = "admin" | "customer"
type truck = {maker: "ford"} | {maker: "ram"}

// // Both thorw errors
// class user implements role{} 
// class truckMaker implements truck{}

// Make interfaces instead
interface Irole{ userRole: "admin" | "customer"}
interface Itruck{truckMaker: {maker: "ford"} | {maker: "ram"}}

// No problem at all
class userClass implements Irole{
    constructor(public userRole: "admin" | "customer"){}
} 
class truckMaker implements Itruck{
    constructor(public truckMaker: { maker: "ford" } | { maker: "ram" }){}
}


// Interfaces define the shape of an object.
interface User {
	id: number;
	name: string;
	email?: string; // The question mark makes this property optional.
}

const user: User = {
	id: 1,
	name: "Shahram",
};

// Interfaces can be used to type function parameters and return values.
function greet(person: User): string {
	return `Hello, ${person.name}!`;
}

console.log(greet(user));

// A class can implement an interface and must provide all required members.
interface Vehicle {
	brand: string;
	start(): void;
}

class Car implements Vehicle {
	constructor(public brand: string) {}

	start(): void {
		console.log(`${this.brand} started.`);
	}
}

new Car("Toyota").start();

// Interfaces can extend other interfaces to reuse their properties.
interface Employee extends User {
	department: string;
}

const employee: Employee = {
	id: 2,
	name: "Grace Hopper",
	email: "grace@example.com",
	department: "Engineering",
};

// Interfaces can describe function types.
interface MathOperation {
	(left: number, right: number): number;
}

const add: MathOperation = (left, right) => left + right;
console.log(add(2, 3));

// Note:
// The required parameters can be neglected but
// Extra parameters can not be passed into functions defined in interfaces