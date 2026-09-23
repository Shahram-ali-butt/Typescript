// Arrays
const names: string[] = ["ali", "eli"];
const prices: Array<number> = [21, 32]; // Array<> No different in working that the [] way

// Readonly arrays
const users: readonly string[] = ["ali", "eli"];
const readonlyUsers: ReadonlyArray<string> = ["ali", "eli"]; // same as above

// Union types
const unionPrices: (string | number)[] = ["25$", 32];
const unionPrices2: Array<string | number> = ["25$", 32]; // little bit cleaner

// 2D Arrays
const secondDimension: number[][] = [
    [1,2,3],
    [4,5,6]
];
const secondDimension2: Array<Array<number>> = [
    [1,2,3],
    [4,5,6]
];



// Tuples
let info: [string, number];
info = ["status", 20];

let userInfo: [string, number, boolean?] = [
    "Shahram",
    19
]
userInfo = ["harmain", 23, true];

// Readonly tuples
const location: readonly [number, number] = [23.56, 112.21];

// Named Tuples
type Item = [name: string, qty: number];
const item1: Item = ["Planks", 100];
console.log(item1[0]); // TS knows this is a string

// Gotcha of tuples:
// Values can be added to tupes because they are simply arrays
// This leads to unexpected behaviour
item1.push("ali"); // No problem


// Enums (Restrict choices or enumerate values)
enum direction{
    LEFT,
    RIGHT,
    UP,
    DOWN
}

console.log(direction.LEFT); // Output: 0 - get suggestions
console.log(direction[1]); // Output: RIGHT

// Auto-incrementing enums - Not recommended
enum status{
    PENDING = 100,
    FORWADED, // gets 101
    RECIEVED // gets 102
}

// defining related constants
enum role{
    ADMIN = "admin",
    CUSTOMER = "customer",
    CSR = "csr"
}

function displayRole(roleInput: role){
    console.log(roleInput);
}
displayRole(role.ADMIN); // OUTPUT: admin
// displayRole(ADMIN); // Not allowed
// displayRole("admin"); // Not allowed - No "Duck" Typing

// Heterogenous Values - Not standard practice
enum specs{
    RAM = 24,
    COMPANY = "Dell"
}

// Const Enums (Performance Optimization) - Les JS code generated
const enum cups {
    SMALL, MEDIUM, LARGE
}

// Modern Alternative of Enum: Object Literal with as const
const Position = { // create a readonly object
    TOP: "top",
    BOTTOM: "bottom",
    LEFT: "left",
    RIGHT: "right"
} as const;

// extract the type
type Position = typeof Position[keyof typeof Position];

function displayPosition(position: Position){
    console.log(position);
}
displayPosition(Position.BOTTOM); // OUTPUT: bottom
displayPosition("bottom"); // Supports duck typing with suggestions

// Note:
// Many modern TypeScript developers avoid enums entirely. 
// Because enums behave differently than TypeScript's structural ("duck") typing system, 
// a standard object literal combined with as const is often recommended instead