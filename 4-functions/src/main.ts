
// Type Aliases
type stringOrNumber = string | number

type stringOrNumberArray = (string | number)[]

type person = {
    name?: string,
    isActive: boolean,
    contactInfo: stringOrNumberArray
}

type UserId = stringOrNumber

// Literal types
let userName: 'Dave' | 'John' | 'Amy'
userName = 'Dave'


// functions
const add = (a: number, b:number): number => {
    return a + b
}

const logMsg = (message: any): void => {
    console.log(message)
}

logMsg('Hello TS!')
logMsg(add(5,6))

// func Alias
type mathFunc = (a: number, b: number) => number

let multiply: mathFunc = (x, y) => (x * y)

logMsg(multiply(4,4))


// optional parameters
const addALl = (a: number, b: number, c?: number): number => {
    if (typeof c !== 'undefined'){
        return a + b + c
    }
    return a + b
}
logMsg(addALl(1,2))

// default para
const sumALl = (a: number = 10, b: number, c: number = 2): number => {
    return a + b + c
}

logMsg(sumALl(undefined,1))


// Rest Para
const total = (...nums: number[]): number => {
    return nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(1,2,3,4))


// Never type & void
const createError = (errMsg: string): never => {
    throw new Error(errMsg)
} 

