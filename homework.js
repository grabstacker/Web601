//Some homework exercises set out in gitbook by Ali
//Author Brad Kay

//different functions and arithmatic
var addition = (num1,num2) => {return num1 + num2}
var remainder = (num1,num2) => {return num1 % num2}
var triArea = (base,height) => {return (base * height)/2}
var nextEdge = (num1,num2) => {return (num1 + num2)-1}
var nextNumber = (num1) => {return num1 + 1}
var divisible = (mod) => {return (mod % 200 == 0)}
var isEmpty = (string1) => {return (string1 === "")}
var compare = (str1,str2) => {return (str1.length == str2.length)}
var isPlural = (str1) => {return (str1[str1.length - 1] == "s")}
var calculatePower = (base,exponent) => {return Math.pow(base,exponent)}

//output the functions to console
//all outputs are correct
console.log(addition(2,3))
console.log(remainder(2,3))
console.log(triArea(2,3))
console.log(nextEdge(2,3))
console.log(nextNumber(2))
console.log(divisible(200))
console.log(isEmpty(3))
console.log(compare("sd","sd"))
console.log(isPlural("mouse"))
console.log(calculatePower(4,5))

