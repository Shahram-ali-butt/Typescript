// Generic Functions

// Takes a generic type object and wraps it in an array
function wrapInArray<T>(a: T): T[]{
    return [a]
}

wrapInArray("Ali");
wrapInArray(12);
wrapInArray({"Shahram": 19}); // Can even take an object

function pair<A, B>(a: A, b: B): [A, B]{
    // return [b, a]; // Not Allowed
    return [a, b];
}

pair("Shahram", "Ali")
pair("Shahram", 12)
pair("Shahram", {})



// Generic Interfaces
interface data<T>{
    content: T
}

const userData: data<string> = { content: "Shahram" };
const heightData: data<number> = { content: 5.6 };



// Real World Use-case
interface ApiResponse<T>{
    status: number,
    data: T
}
const geolocationApiRes: ApiResponse<{Latitute: string, Longitude: string}> = {
    status: 200,
    data: {
        Latitute: "128780071.121",
        Longitude: "123879229.123"
    }
}