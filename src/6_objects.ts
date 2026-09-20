// 🦆 Duck Typing
// "If it walks like a duck and it quacks like a duck, then it must be a duck."
// Duck typing is a programming style where an object's suitability is determined 
// by the presence of specific methods and properties rather than its actual type, class or inheritance.

type cup = {size: string}

let smallCup: cup = {size: "200ml"}
let largeCup = {size: "500ml", material: "plastic"}
smallCup = largeCup; // No problem because largeCup has size too
// More is fine, less is problematic



// Separating related types for clarity
type Address = {city: string; street: string}
type Item = {price: number; quantity: number}

type order = {
    id: number;
    items: Item[];
    address: Address
}



// Updating or Altering already created types

type user = {
    id: number;
    name?: string; 
    role: "admin" | "standard";
    email: string;
}

const updateUser = (fieldsToUpdate: Partial<user>) => // Partial<> is an utility type that makes every property optional
{ 
    // Use the fieldsToUpdate to update an existing user or do any processing
    console.log(fieldsToUpdate)
} 

updateUser({}); // everting is options so an empty object is valid as a user
updateUser({role: "standard"});

const createNewUser = (newUser: Required<user>) => // Required<> makes every property required
{
    // All fields may be important to create a new user
    console.log(newUser)
}

// createNewUser({}) // Illegal
createNewUser({id: 1, name: "Shahram", role: "admin", email: "shahramalibutt@gmail.com"});

// 2. Pick: Useful for smaller components or previews
type UserPreview = Pick<user, "name" | "email">; 

// 3. Omit: Useful to strip sensitive data
type PublicProfile = Omit<user, "id" | "email">;



