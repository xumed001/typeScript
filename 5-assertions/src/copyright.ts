
//
// const year = document.getElementById('year') as HTMLElement
// const thisYear = new Date().getFullYear()
// console.log(thisYear)

// year.setAttribute('datetime', thisYear.toString()) 
// year.textContent = thisYear.toString()


// const year = document.getElementById('year') as HTMLElement
// const thisYear: string = new Date().getFullYear().toString()
// console.log(thisYear)

// if (year) {
//     year.setAttribute('datetime', thisYear) 
//     year.textContent = thisYear
// }

const year = document.getElementById('year') as HTMLSpanElement
const thisYear: string = new Date().getFullYear().toString()
console.log(thisYear)

year.setAttribute('datetime', thisYear) 
year.textContent = thisYear

