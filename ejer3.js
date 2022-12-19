//WHILE
let factorialWhile = 1
let num = 10
while (num > 1) {
    factorialWhile *= num
    num--
}
console.log(factorialWhile)

//FOR
let factorialFor = 1
for (let i = 10; i > 0; i--) {
    factorialFor *= i
}
console.log(factorialFor) 

//BREAK
let factorial = 1

let num2 = 10

while (true) {
    factorial *= num2
    num2--
    if (num2 === 1) {
        break
    }
}

console.log(factorial)