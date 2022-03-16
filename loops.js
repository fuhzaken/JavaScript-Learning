// loops

// for loop
console.log("for loop");
for (var i = 0; i < 10; i++){
    console.log(i);
}

console.log();

var names = ["Minato", "Kushina", "Hinata", "Naruto"];

// for loop
for(var j = 0; j < names.length; j++){
    console.log(names[j]);
}
console.log();
console.log("for of");
console.log();

// for of
for (const name of names) {
    console.log(name);
}

console.log();
console.log("for each");
console.log();
// foreach
names.forEach(function(name){
    console.log(name);
});