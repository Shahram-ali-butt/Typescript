# Commands and Setup

## Install TypeScript:
``` bash 
pnpm add -D typescript @types/node 
```

## Create a tsconfig.json to manage compiler options:
``` bash 
pnpm exec tsc --init 
```

## Run the compiler to output .js files:
``` bash
pnpm exec tsc 
```

## Run the generated JavaScript:
``` bash 
node path/to/file.js 
```
        (OR) 
``` bash
pnpm exec node path.to/file 
```

## Run typescript file directly
``` bash 
pnpm add -D tsx 
pnpm exec tsx path/to/tsfile 
```

## To avoid typing long commands, add shortcuts to your package.json file:
~~~ json
{
    "scripts": {
        "dev": "tsx watch src/index.ts",
    "build": "tsc"
    }
}
~~~