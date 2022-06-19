// let myAge = document.getElementById('id');
// let age = 35;

// if (age >= 18) {
//     alert(myAge.innerText = "You can drive the car")
// } else {
//     alert(myAge.innerText = 'You cannot drive the car')
// }


// const btn = document.getElementById('btn');
// const alertFunction = function() {
//     alert('clicked!')
// };

// btn.addEventListener('click', logFunction);

const div = document.getElementById('div')
const btn = document.getElementById('btn')

const testDOB = function () {
    let calc = 2022 - 25
    let sum = calc

    div.innerText = "Your date of birth is: " + sum;
    if (sum > 1990)
        alert("over 1990")
    else {
        alert("under 1990")
    }
};

btn.addEventListener('click', testDOB)



// ERROR HANDLING :

try {
    var text = "Solve this challange:\nWhat is 2 x 2 + 2 / 2?";
    if (prompt('text') == 5) {
        alert("success!");
    } else {
        throw new Error("you are an idiot.");
    }
} catch (err) {
    alert(err); // ReferenceError: text is not defined
}

var x = prompt("How old are you?");
if (x > 18) alert("welcome!");
else alert("wait a few years then come back.");

var person = {};
try {
    for (let i = 0; i < 3; i++) {
        person.fName = prompt(`What is your first name?`);
        if (person.fName.match(/^[a-z]{3,15}$/)) break;
        if (i==2) throw new Error("Too many tries");
    }
    person.age - parseInt(prompt("How old are you?"));
    var t = "you're too young";
    if (isNaN(person.age) || person.age <= 18) throw new Error(t);
    else alert('success');
} catch(e) {
    alert(e);
}