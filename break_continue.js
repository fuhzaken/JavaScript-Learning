// break and continue keywords
// break
console.log("Break keyword");
for (var i = 0; i <= 10; i++) {
    console.log(i);
    if (i == 5) {
        break;
    }
}

console.log();

// continue
console.log("Continue keyword");
for (var i = 0; i <= 10; i++) {
    if (i < 5) {
        continue;
    }
    console.log(i);
}