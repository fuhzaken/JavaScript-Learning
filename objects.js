var person = {
    firstName: "Kirat",
    age: 19,
    isFemale: false,
    balance: 200.99,
    dob: new Date(2003, 3, 11).toJSON(),
    address: {
        city: "Tokyo",
        postalCode: "TKY89"
    }
};


// To display all the information of a certain person
console.log(person);

// To display an individual information of a person
console.log(person.firstName);
console.log(person.age);
console.log(person.isFemale);
console.log(person.balance);
console.log(person.dob);
console.log(person.address);
console.log(person.address.city);
console.log(person.address.postalCode);

// To get all the values of the object person
console.log(Object.values(person));

// To get all the keys of the object person
console.log(Object.keys(person));

// To get all the information of the object person in string format
console.log(JSON.stringify(person));