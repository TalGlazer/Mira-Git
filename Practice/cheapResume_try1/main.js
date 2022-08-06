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

// const div = document.getElementById('div')
// const btn = document.getElementById('btn')

// const testDOB = function () {
//     let calc = 2022 - 25
//     let sum = calc

//     div.innerText = "Your date of birth is: " + sum;
//     if (sum > 1990)
//         alert("over 1990")
//     else {
//         alert("under 1990")
//     }
// };

// btn.addEventListener('click', testDOB)



// // ERROR HANDLING :

// try {
//     var text = "Solve this challange:\nWhat is 2 x 2 + 2 / 2?";
//     if (prompt('text') == 5) {
//         alert("success!");
//     } else {
//         throw new Error("you are an idiot.");
//     }
// } catch (err) {
//     alert(err); // ReferenceError: text is not defined
// }

// var x = prompt("How old are you?");
// if (x > 18) alert("welcome!");
// else alert("wait a few years then come back.");

// var person = {};
// try {
//     for (let i = 0; i < 3; i++) {
//         person.fName = prompt(`What is your first name?`);
//         if (person.fName.match(/^[a-z]{3,15}$/)) break;
//         if (i==2) throw new Error("Too many tries");
//     }
//     person.age - parseInt(prompt("How old are you?"));
//     var t = "you're too young";
//     if (isNaN(person.age) || person.age <= 18) throw new Error(t);
//     else alert('success');
// } catch(e) {
//     alert(e);
// }


//  TERNARY CONDITIONS:

// // THIS
// var x = prompt("How old are you?");
// if (x > 18) alert("welcome!");
// else alert("wait a few years then come back.");

// // BECOMES THIS:
// prompt("How old are you") > 18
//     ? alert("welcome")
//     : alert("wait a few years then come back")


// var fName = prompt(
//     `What is your name, traveler?`) || "anonymous"
//     ? alert(`Welcome, ${fName}`)
//     : alert("You choose to remain silent then...")
// console.log(fName);



// var old = confirm("Are you over 18?");
// var access = old ? "Welcome" : "Denied";
// console.log(old);
// console.log(access);
// var fName = prompt("What's your name") || "anonymous";
// // the || gives a default value if fName is falsy



// // TERNARY CONDITION STATEMENTS
// var main = document.querySelector("main");
// main.innerHTML = `<h1>Welcome ${confirm(`are you a doctor?`)
//     ? "Dr. "
//     : confirm("are you a woman?")
//         ? "Mrs."
//         : "Mr."
//     }${prompt("What's your last name?")}</h1>`;


const user = {
    fullName: { firstName: "bob", lastName: "Roberts" },
    ID: 123456789,
    DOB: "21/12/1980",
    creditCards: [{ name: "visa", number: 418814789, exp: "08/21", cvv: 456 },
    { name: "mastercard", number: 437734384, exp: "12/19", cvv: 665 },
    { name: "mastercard", number: 538835301, exp: "04/24", cvv: 790 }],
    qtyCreditCards: function() {
        return this.creditCards.length;
    }
};

function deleteCar(car) {
    var div = car.parentElement;
    div.remove();
}

