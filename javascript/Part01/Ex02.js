const markWeight01 = 78.0
const markWeight02 = 95.0
const jonhWeight01 = 92.0
const jonhWeight02 = 85.0

const markHeight01 = 1.69
const markHeight02 = 1.88
const jonhHeight01 = 1.95
const jonhHeight02 = 1.76

var markBMI01 = markWeight01/(markHeight01*markHeight01)
var markBMI02 = markWeight02/(markHeight02*markHeight02)
var jonhBMI01 = jonhWeight01/(jonhHeight01*jonhHeight01)
var jonhBMI02 = jonhWeight02/(jonhHeight02*jonhHeight02)

var markHigherBMI01 = markBMI01 > jonhBMI01
var markHigherBMI02 = markBMI02 > jonhBMI02

if (markHigherBMI01) {
    console.log(`Example 1: Mark's BMI (${markBMI01.toFixed(2)}) is higher than Jonh's (${jonhBMI01.toFixed(2)})`)
} else {
    console.log(`Example 1: Jonh's BMI (${jonhBMI01.toFixed(2)}) is higher than Mark's (${markBMI01.toFixed(2)})`)
}

if (markHigherBMI02) {
    console.log(`Example 2: Mark's BMI (${markBMI02.toFixed(2)}) is higher than Jonh's (${jonhBMI02.toFixed(2)})`)
}
else {
    console.log(`Example 2: Jonh's BMI (${jonhBMI02.toFixed(2)}) is higher than Mark's (${markBMI02.toFixed(2)})`)
}