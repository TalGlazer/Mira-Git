// console.time("imp_vs_dec");

// const names = ["Naor", "Roya", "Aaron", "Michael", "Or", "Tal"];
// var check = "or";
// var result = false;
// var qnt = names.length; // 900000
// for (let i = 0; i < 5; i++) {
//     const student = names[i];
//     console.log(student);
//     if (student == check) {
//         result = true;
//         break;
//     }
// }
// console.timeEnd("imp_vs_dec");

// alert(result)






// const names = ["naor", "roya", "aaron", "michael", "or", "tal"];
// alert(names.includes(prompt("Enter a name").toLowerCase()));

// console.time("imp_vs_dec");

// const names = ["Naor", "Roya", "Aaron", "Michael", "Or", "Tal"];
// var check = "Naor";
// var result = false;
// var qnt = names.length; // 900000
// for (let i = 0; i < 5; i++) {
//     const student = names[i];
//     console.log(student);
//     if (student == check) {
//         result = true;
//         break;
//     }
// }
// console.timeEnd("imp_vs_dec");

// alert(result)



// const names = ["Naor", "Roya", "Aaron", "Michael", "Or", "Tal"];
// names.sort()

// console.log(names);


// const names = ["Naor", "Roya", "Aaron", "Michael", "Or", "Tal"];

//loop that adds 5 names to the arr via prompt.


// // MY OWN TRY!! :)
// function printMyListInOrder() {
//     // puts the list in order
//     // create a string with : betweern each name
//     // print the string
// }

// const names = ["studentA", "studentB", "studentC", "studentD"];

// for (let i = 0; i < 4; i++) {
//     alert(prompt("Enter your name").toLowerCase())
//     }
//     names.push 


// EX. push("meir")
// sort()
// join()


// const names = [];

// for (let i = 0; i < 5; i++){
//     names.push(prompt("Enter a name").toLowerCase());
// }

// function printMyListInOrder(arr, theType) { // this function returns a string ! :)
//     arr.sort();
//     return `The list of your ${theType} is: ${names.join(" , ")}`;
// }

// alert(printMyListInOrder(names, "students"));



// function falafelTruck() {
//     return "Here is your 5-ball falafel in pita with hummus and salad"
// }

// function falafelStore(balls, bread = "pita", extras = "nothing extra") {
//     return `Here is your ${balls}-ball falafel in ${bread} with ${extras}.`;
// }

// alert(falafelTruck())
// alert(falafelStore(8, undefined, "tehina"));



// const names = ["bob", "tim", "jack", "paul", "nate"];
// names.push("bill");
// names.sort();
// names.pop();
// names.shift();
// names.unshift("alex"); // opposite of `push`
// names.splice(2, 0, "Roya");


// names.unshift(names.pop()); // grabs the value and holds it
// // in addition to to putting name on opposite of push.



// var amount = parseInt(prompt("How much did you make?"))
// var taxes = 0;

// if (amount <= 25000) {
//     taxes = amount * 0.1;
// } else if (amount <= 50000) {
//     taxes = 2500 + (amount - 25000) * 0.2;
// } else if (amount <= 100000) {
//     taxes = 12500 + (amount - 50000) * 0.3;
// } else if (amount <= 150000) {
//     taxes = 27500 + (amount - 75000) * 0.4;
// } else {
//     taxes = 47500 + (amount - 150000) * 0.5;
// }

//   |
//  \ /

// alert(taxes)
// var message = "";
// var x = prompt("what's your name?").toLowerCase()
// switch (true) {
//     case x == "bob":
//         message = "hey my father is Bob";
//         break;
//     case "Carl":
//         message = "hey my uncle is Carl";
//         break;
//     case "Matt":
//         message = "I hate the name Matt";
//         break;
//     case "tim":
//         message = "I'm craving now for Tim Hortons";
//         break;
//     default:
// }

// const arr = [{ name: "jim", score: 87 }];
// // MESIMA == for-loop to add 4 more people
// // then create an object and add to array
// for (let i = 0; i < 4; i++) {
//     var obj = {};
//     var str = prompt("Enter your name and score with a '-' in between. Ex: joe-85");
//     str = str.split("-"); // gives an Array of "joe", "85"
//     obj.name = str[0].toLowerCase();
//     obj.score = parseInt(str[1]);
//     arr.push(obj);
// }
// function getAvgFromArr(x) {
//     for (let i = 1; i < x.length; i++) {
//         const person = x[i];
//         avg = getAvg(avg, person.score);
//     }
//     return avg
// }

// function getAvg(a, b) {
//     return (a + b) / 2;
// }

// // create a generic function that takes an array
// // and calculates the average of the scores by calling another function
// alert("the average was " + getAvgFromArr(avg))




const arr = [{ name: "jim", score: 87 }];
// for-loop to add 4 more people;
for (let i = 0; i < 4; i++) {
  var str = prompt(
    "Enter your name and score with a '-' in between. Ex: joe-85"
  );
  str = str.split("-"); // ["Joe", "85"]
  var obj = { name: str[0].toLowerCase(), score: parseInt(str[1]) };
  arr.push(obj);
}
// in the loop, prompt the name and score,
// then create an object and add to array
function getAvgFromArr(x) {
  var avg = x[0].score;
  for (let i = 1; i < x.length; i++) {
    const person = x[i];
    avg = getAvg(avg, person.score);
  }
  return Math.round(avg);
}

function getAvg(a, b) {
  return (a + b) / 2;
}
// create a generic function that takes an array
// and calculates the average of the scores by calling another function
alert("the avergage was " + getAvgFromArr(arr));
