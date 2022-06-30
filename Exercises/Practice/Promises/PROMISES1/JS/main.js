// --------------PROMISES -----------

// function doTask1(effortLevel) {
//     if(effortLevel > 10)
//     return `Task 1 completed`
//     else
//     return `Task 1 failed`
// }


//------------ WITH PROMISE --->
// //Task 1

// function doTask1(effortLevel) {
//     return new Promise((resolve, reject) =>{
//         if(effortLevel > 10)
//         resolve (`Task 1 completed`);
//         else
//         reject (`Task 1 failed`)
//     });
// }

// let effortLevel = 7;
// doTask1(effortLevel).then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(`Oh no! The promise was rejected!`);
//     console.log(message);
// })

// Task 2

// function doTask1(effortLevel) {
//     return new Promise((resolve, reject) => {
//         if (effortLevel > 10)
//             resolve(`Task 1 completed! Yay you !`)
//         else
//             reject(`Task 1 failed. Boo you`)
//     });
// }

// function dotask2(effortLevel) {
//     return new Promise((resolve, reject) => {
//         if (effortLevel > 20)
//             resolve(`Task 2 completed!`)
//         else
//             reject(`Task 2 failed`)
//     });
// }

// let effortLevel = 21;
// doTask1(effortLevel).then((message) => {
//     console.log(message);
//     return dotask2(effortLevel)
// }).then((message) => {
//     console.log(message);
// }).catch((message) => {
//     console.log(`Oh no! The promise was rejected!`);
//     console.log(message);
// })


// FETCH + ASYNC + JSON

document.getElementById(`getJSONBtn`).onclick = function () {
    fetch(`https://lokipod.com/JS/countries.json`) // gets URL as parameter
        .then(function(responseData) {
            console.log(responseData);
            return responseData.json();
        }).then(function(jsonData) {
            console.log(jsonData);
        }).catch()
}