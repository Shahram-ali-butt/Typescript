interface calculator{
    (a: number, b: number) : number
}

const multiply: calculator = (num1: number, num2: number) => num1*num2;



interface machine{
    start(): void;
    stop(): void;
}

const cofeeMachine: machine = {
    start() {console.log("start")},
    stop() {console.log("stop")}
}



// Index Signiture
interface rating{
    [name: string]: number
}

const machineRatings: rating = {
    "cofeeMachine": 5.4,
    "juicerMachine": 4.1,
    // "rotiMachine": "", // Not allowed
}



// Automatic merging of interfaces

// This comes from a library
interface user{
    name: string
}
// This is locally defined according to needs
interface user{
    age: number
}

const user1: user = {
    name: "Shahram",
    age: 19 // Without this compiler isn't satisfied
}



// Extend Interfaces
interface A{ a: string }
interface B{ b: string }

interface C extends A, B {c: string} // Gets both a and b
