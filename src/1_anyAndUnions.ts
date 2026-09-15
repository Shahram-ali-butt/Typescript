// Unions (|)
let subs: number | string = 10
subs = "1M" // This is also legal

// You get suggestions for accepted values
let HTTP_Status: "success" | "failure" | "pending" = "pending"
HTTP_Status = "success"  

// Here the type of currentNum is any
let currentNum;
const numArr = [1,2,3,4,5,6]

for(let num of numArr){
    if(num === 5){
        currentNum = num;
    }
}

// Here the type of currentNum is number | undefined
console.log(currentNum);


// The above behavior is not right, I can set currentNum to a string in between
// To fix this set it to number
let currNum: number;
const arr = [1,2,3,4,5,6]

for(let num of arr){
    if(num === 5){
        currNum = num;
    }
}

// Here the type of currentNum is number | undefined
console.log(currNum);


// Still it shows an error. The problem is that an unassigned variable can still be manipulated
// To fix this set it to number union undefined
let myNum: number | undefined;
const arr1 = [1,2,3,4,5,6]

for(let num of arr1){
    if(num === 5){
        myNum = num;
    }
}

// Here the type of currentNum is number | undefined
console.log(myNum);