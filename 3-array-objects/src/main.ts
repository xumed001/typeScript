let stringArr = ['one', 'two', 'three']

let guitars = ['Strat', 'Les Paul', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'four'

let test = []

// array of strings only
let bands: string[] = []

// tuple
let myTuple : [string, number, boolean] = ['Dave', 42, true]

// objects
let myObj: object
myObj = []
console.log(typeof myObj)

// obj type inf
type objType = {
    name?: string,
    active?: boolean,
    things: (string | number)[]
}

let firstObj: objType = {
    name: 'Dave',
    active: true,
    things: ['abc', 'def', 1, 2]
}

function greet(person: objType) {
    if(person.name) {
        return `Hello ${person.name.toUpperCase()}`
    }
    return 'Hello!'
}

console.log(greet(firstObj))


//enum
enum Grade {
    A,
    B,
    C,
    D,
}

console.log(Grade.A)