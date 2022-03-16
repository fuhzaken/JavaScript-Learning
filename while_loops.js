// while loops
var names = ["Minato", "Kushina", "Hinata", "Naruto"];

var index = 0;

while(index < names.length){
    console.log(names[index]);
    index++;
}

var isMale = true;
while(isMale){
    console.log("Is male."); // prints "Is male"
    isMale = false; // flips the condition to false once "Is male is printed"
}