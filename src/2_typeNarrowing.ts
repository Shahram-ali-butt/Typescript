// You get specific suggestions when you narrow down types
function getInput(data: number | string){
    if(typeof data === "number"){ // Norrow down the type
        return data.toFixed(); // Get suggestions for that specific type
    }
    return data.charAt(0); // Suggestions for the second type
}



// Optional parameters
function process(data?: number){
    if(data){
        return data.toFixed();
    }
    return `No data was sent`
}



// Two classes have methods with same identifier
class firstCar{
    run(){
        return 'First Car is running'
    }
}
class secondCar{
    run(){
        return 'Second Car is running'
    }
}

// Making sure you are processing the class you want to using instanceof
function runCar(car: firstCar | secondCar){
    if(car instanceof firstCar){
        car.run()
    }
    else{
        // someting else
    }
}



// ⚡ Types (Object Type alias) in Typescript
type truck = {
    type: string // primitive type
    model: string
    power: number
}

type fordTruck = {
    maker: "ford",
    type: "truck" // literal type
    model: "F50"
    power: number
}

// get suggestions for each property and the shape of the object
let newFord: fordTruck = {
    maker: "ford",
    type: "truck",
    model: "F50",
    power: 800
}



// ✅ User defined Type Guard that narrows the type
// This function doesn't return the object but tells the compiler that the
// obj passed in was in fact a fordTruck or otherwise
function isFord(obj: any): obj is fordTruck{
    return(typeof obj === "object" &&
        obj != null &&
        obj.maker === "ford" &&
        obj.type === "truck" &&
        obj.model === "F50" &&
        typeof obj.power === "number"
    )
}

// Using the Type Guard
function work(data: fordTruck | string) {
    if(isFord(data)){ // Compiler knows data is fordTruck
        return `Ford has power: ${data.power}` // Get suggestions
    }
    return `default string response: ${data}`
}



// Nawrrowing the type by checking if a property is available
function useTruck(truck: fordTruck | truck){
    if("maker" in truck){ // maker is only in fordTruck
        let maker = truck.maker // get suggestions for fordTruck
    }
    let power = truck.power // get suggestions of truck
}