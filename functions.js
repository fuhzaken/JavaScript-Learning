// functions
function addNumbers(firstNum, secondNum){
    var result;
    result = firstNum + secondNum;
    return result;
}

function subtractNumbers(firstNum, secondNum){
    var result;
    result = firstNum - secondNum;
    return result;
}
// calling the function and storing to a variable
var addition1 = addNumbers(8, 9);
var addition2 = addNumbers(1, 8);

var subtraction1 = subtractNumbers(20, 9);
var subtraction2 = subtractNumbers(15, 6);

// display output
console.log("Addition 1 --> "+ addition1);
console.log("Addition 2 --> "+ addition2);

console.log("Subtraction 1 --> "+ subtraction1);
console.log("Subtraction 2 --> "+ subtraction2);

var person = {
    name: "Kirawr"
} 

console.log(Object.values(person));
console.log(Object.keys(person));


console.log("Nelson".toUpperCase());
console.log("Nelson".toLocaleLowerCase());
console.log("Nelson".indexOf('s'));