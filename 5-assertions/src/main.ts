

//
type One = String
type Two = String | number
type Three = 'Hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three //more specific

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') return a + b
    // coersive op
    return "" + a + b
}

let myVal: string = addOrConcat(2,2,'concat') as string
console.log(myVal)

let nextVal: number = addOrConcat(2,2,'concat') as number
console.log(nextVal);



// ForceCasting 
// 10 as string 
(10 as unknown) as string


// DOM 
const img = document.querySelector('img')! //non null assertion
const myImg = document.getElementById('#img') as HTMLImageElement
img.src
myImg.src