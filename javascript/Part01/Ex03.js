var dolphinsAvg1 = (96 + 108 + 89) / 3;
var koalasAvg1 = (88 + 91 + 110) / 3;
var dolphinsAvg2 = (97 + 112 + 101) / 3;
var koalasAvg2 = (109 + 95 + 123) / 3;
var dolphinsAvg3 = (97 + 112 + 101) / 3;
var koalasAvg3 = (109 + 95 + 106) / 3;


if (dolphinsAvg1 >= 100 || koalasAvg1 >= 100) {
    dolphinsAvg1 > koalasAvg1 
    ? console.log(`Example 1: Dolphins win (${dolphinsAvg1.toFixed(2)} vs ${koalasAvg1.toFixed(2)})`) 
    : dolphinsAvg1 < koalasAvg1
        ? console.log(`Example 1: Koalas win (${koalasAvg1.toFixed(2)} vs ${dolphinsAvg1.toFixed(2)})`)
        : console.log(`Example 1: It's a draw (${dolphinsAvg1.toFixed(2)} vs ${koalasAvg1.toFixed(2)})`);
} else {
    console.log("Example 1: No team wins");
}

if (dolphinsAvg2 >= 100 || koalasAvg2 >= 100) {
    dolphinsAvg2 > koalasAvg2 
    ? console.log(`Example 2: Dolphins win (${dolphinsAvg2.toFixed(2)} vs ${koalasAvg2.toFixed(2)})`) 
    : dolphinsAvg2 < koalasAvg2 
        ? console.log(`Example 2: Koalas win (${koalasAvg2.toFixed(2)} vs ${dolphinsAvg2.toFixed(2)})`)
        : console.log(`Example 2: It's a draw (${dolphinsAvg2.toFixed(2)} vs ${koalasAvg2.toFixed(2)})`);
} else {
    console.log("Example 2: No team wins");
}

if (dolphinsAvg3 >= 100 || koalasAvg3 >= 100) {
    dolphinsAvg3 > koalasAvg3 
    ? console.log(`Example 3: Dolphins win (${dolphinsAvg3.toFixed(2)} vs ${koalasAvg3.toFixed(2)})`) 
    : dolphinsAvg3 < koalasAvg3 
        ? console.log(`Example 3: Koalas win (${koalasAvg3.toFixed(2)} vs ${dolphinsAvg3.toFixed(2)})`) 
        : console.log(`Example 3: It's a draw (${dolphinsAvg3.toFixed(2)} vs ${koalasAvg3.toFixed(2)})`);
} else {
    console.log("Example 3: No team wins");
}