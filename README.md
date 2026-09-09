# TypeScript Practice Repository

This repository is a small TypeScript learning workspace focused on core language concepts, type safety, and practical patterns. The files under [src](src) are organized as short exercises and examples that build from basic syntax into advanced typing patterns.

## Project purpose

The code in this repo demonstrates how TypeScript helps catch errors early, narrow types safely, and model data structures more precisely than plain JavaScript.

## Source files and major concepts

### [src/index.ts](src/index.ts)
- Basic TypeScript function syntax
- String parameter typing
- Simple console output example
- Notes about `noEmitOnError` in [tsconfig.json](tsconfig.json)

### [src/1_anyAndUnions.ts](src/1_anyAndUnions.ts)
- `any` and why it is unsafe
- Union types (`|`)
- Literal types
- `undefined` and uninitialized variable issues
- How to make variables safer with explicit union types

### [src/2_typeNarrowing.ts](src/2_typeNarrowing.ts)
- Type narrowing with `typeof`
- Optional parameters
- `instanceof` checks
- Type guards (`obj is Type`)
- `in` operator narrowing
- Working with union types in real code paths

### [src/3_unknown.ts](src/3_unknown.ts)
- `unknown` as a safer alternative to `any`
- Runtime checks before using a value
- Guarding values with `typeof` and `instanceof`
- Custom type guards for object validation

### [src/4_advancedTypes.ts](src/4_advancedTypes.ts)
- Type assertions with `as`
- `never` type and exhaustiveness checking
- Intersections (`&`)
- JSON parsing examples with type safety assumptions
- DOM casting examples for HTML elements

### [src/5_interfaces.ts](src/5_interfaces.ts)
- Interface declaration and object typing
- Interfaces used for function parameters and return values
- Class implementation via `implements`
- Interface extension (`extends`)
- Function type interfaces

### [src/6_objects.ts](src/6_objects.ts)
- Object shapes and structural typing
- Duck typing
- Type aliases for object models
- `Partial`, `Required`, `Pick`, and `Omit` utility types
- Reusing and refining existing object types

### [src/7_tupleEnum.ts](src/7_tupleEnum.ts)
- Arrays and readonly arrays
- Tuple types and named tuples
- Enum basics and numeric/string enums
- Enum gotchas and modern alternatives
- `as const` object literals for strongly typed constants

### [src/8_interfaces_2.ts](src/8_interfaces_2.ts)
- Callable interfaces
- Object interfaces for implementations
- Index signatures
- Interface merging
- Interface extension and composition

### [src/9_generics.ts](src/9_generics.ts)
- Generic functions
- Generic interfaces
- Reusable container and response types
- Real-world API response modeling with generics

## The [installation.md](installation.md) file

[installation.md](installation.md) is the setup guide for the repository. It explains the commands needed to:

- install TypeScript and related tooling
- initialize a `tsconfig.json`
- compile TypeScript files to JavaScript
- run generated JavaScript
- run TypeScript files directly with `tsx`
- add convenient scripts in [package.json](package.json)

In short, this file handles setup and local execution, while the files in [src](src) focus on the TypeScript concepts themselves.

## Typical workflow

1. Read [installation.md](installation.md) to set up the project.
2. Use `pnpm build` or `tsc` to compile the examples.
3. Explore each file in [src](src) as a focused topic.
4. Run small examples to observe how TypeScript narrows and validates values.

## Notes

This is a practice repo intended for learning and experimentation. The examples are intentionally simple and meant to show the mechanics behind TypeScript’s static typing system.
