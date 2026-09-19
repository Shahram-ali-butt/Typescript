// ❌ The 'any' escape hatch (Unsafe)
let flexibleValue: any = "Hello World";
flexibleValue.toFixed(); // No compiler error, but crashes at runtime!

//   The 'unknown' guard (Safe)
let mysteriousValue: unknown = "Hello World";
// mysteriousValue.toFixed(); // ❌ Compiler Error: 'mysteriousValue' is of type 'unknown'.



// you must use type guards or control flow analysis to prove the type to TypeScript
let data: unknown = "hello";

if (typeof data === "string") {
    // TypeScript now knows 'data' is a string
    console.log(data.toUpperCase()); // 
}


// Using instanceof for Classes or Errors
try {
    // code that might throw
} catch (error: unknown) { // Modern TS defaults catch blocks to unknown
    if (error instanceof Error) {
        console.error(error.message); //  Safe to access .message
    }
}


// Using Custom Type Guards for Objects
interface User {
    name: string;
}

function isUser(obj: unknown): obj is User {
    return typeof obj === "object" && obj !== null && "name" in obj;
}

let input: unknown = { name: "Alice" };

if (isUser(input)) { // Use type guard to confirm type
    console.log(input.name); // get suggestions of that type
}
