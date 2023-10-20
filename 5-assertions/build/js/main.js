"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specific
let c = a; //more specific
const addOrConcat = (a, b, c) => {
    if (c === 'add')
        return a + b;
    // coersive op
    return "" + a + b;
};
let myVal = addOrConcat(2, 2, 'concat');
console.log(myVal);
let nextVal = addOrConcat(2, 2, 'concat');
console.log(nextVal);
// ForceCasting 
// 10 as string 
10;
// DOM 
const img = document.querySelector('img'); //non null assertion
const myImg = document.getElementById('#img');
img.src;
myImg.src;
