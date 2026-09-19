// 🔨 Forceful type assersion

let response: any = "42"; 
// we have stored string but still it's type is any
// "inferenced variables don't get suggestions"

let responseLength: number = response.length; // No suggestions for response
// Do this instead
responseLength = (response as string).length; // Get suggestions
// Number(response); // This is not how things in TS work



// 🔨 Forceful type assersion of incomming data

type book = {
    name: string
}

// Suppose this is an object that we got from local storage
// retrieved Local storage data is always in string form
let localStorageBook = `{name = "Thus spoke Zarathustra"}`;
let parsedBook = JSON.parse(localStorageBook);
let name = parsedBook.name // No Suggestions

// Compiler has no guarentee that the parsed data is a book
let parsedBook2 = JSON.parse(localStorageBook) as book; // Forcefully assert Type
let bookName = parsedBook2.name; // Now get suggestions



// 📃 Type assertion for HTML elements
const input = document.getElementById("input") as HTMLImageElement;



// 💂‍♀️ Type Guarding in try catch blocks

// try{

// }catch(error){
//     console.log(error.message); // This throws an error
// }

// TS wants you to be type safe when handling errors
try{}
catch(error){
    if(error instanceof Error){ // check type first
        console.log(error.message);
    }
    console.log("Error:", error);
}



// ❎ 'Never' data type

// Suppose these two types are in another file
type role = "admin" | "customer" | "superadmin";
type truck = "Ford" | "Ram"; 

// Using these types
function useTruck(truck: truck) {
    if(truck === "Ford"){
        return "Truck is Ford";
    }
    if(truck === "Ram"){
        return "Truck is Ram";
    }
    truck; // Hover it. You'll see type: never
    // Here type never means that you handled all the truck variations 
}

function roleBasedRedirect(user: role) {
    if(user === "admin"){
        return "Redirecting to Admin page";
    }
    if(user === "customer"){
        return "Redirecting to Customer page";
    }
    user; // Hover it. You'll see type: superadmin
    // It means you have not yet handled all the combinations
}

// This is a function that never returns
function neverReturn(): never{
    while(true){}
}



// Intersection
type engine = {cylinders: number}
type chasis = {dimension: string[]}
type carBase = engine & chasis; // intersection type

let myCarBase: carBase = {
    cylinders: 6,
    dimension: ["45", "23"]
}