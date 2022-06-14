// //- S I M P L E   A R R A Y S: -//

// const name = `tal`;
// const year = 2022 - 24;
// const movie = `Shrek`;
// const greeting = `My name is ` + name +
//     ` I like the movie ` + movie +
//     ` and I was born in` + ` ` + year;

// console.log(greeting);

// const winners = [1, `Tal`, true, 2, `Chester`, true];
// const first = winners[1];
// const second = winners[4];
// console.log(`first place is: ` + first + `!`);
// console.log(`second place is: ` + second + `!`);



// //- S I M P L E   O B J E C T S: -//

// const person = {
//     name: `Tal`,
//     age: 25,
//     rsStatus: false
// }

// alert(`Hello ` + person.name);
// alert(`age ` + person.age);
// person.address = `Rehovot`;
// alert(`Do you live in ` + person.address + `?`)
// person.successfulness = `In the making... `

// console.log(person);

const me = {
    fName: `Tal Glazer`,
    age: 25,
    address: `Rehovot`,
    driversLicense: true,
    children: [
        { name: "Avital", age: 14 },
        { name: "Ron", age: 12 }
    ]
}
console.log("My name is " + me.fName + " and I am " + me.age + " years old.")
console.log("I'm a father to " + me.children[0].name + " and " + me.children[1].name + ".");