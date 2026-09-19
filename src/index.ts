function greet(name: string): string{
    return `Hello, ${name} in typescript`
}

const username = "Shahram"
console.log(greet(username))
// console.log(greet(12)) // Illegal but compiles

// Note:
// If you want it to stop compiling if error
// add this to tsconfig.json
// noEmitOnError: true



