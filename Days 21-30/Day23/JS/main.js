// Lesson 23

//     - My attempt -
//         let div = console.log(document.getElementById(`#helloWorld`));
// div.color = `red`
// div.pixelSize = + 50
// let pixel = pixelSize
// const redWriting = setTimeout(() => {
//     color = color
//     const pixelSize = setTimeout(() => {
//         console.log(pixelSize);
//         setTimeout(() => {
//             let color = `purple`
//             console.log(color);
//             setTimeout((dashed) => {
//                 console.log();
//             }, 5000);
//         }, 5000);
//     }, 5000);
// }, 5000);

// redWriting()
// pixelSize()
// dashed()
// purpleWriting()

//     - answer -

// const p = document.querySelector(`p`);

// function changeStyle() {
//     p.style.fontSize = 50 + `px`;
//     setTimeout(() => {
//         console.log();
//     }, 5000);
// }



// -answer with Promise -
function func1() {
    return new Promise((res, rej) =>{
        setTimeout(() => {
            div.style.color = `purple`
            res()
        }, 5000);
    })
    
}

// promises
// function f1() {
//    console.log(`log 1`);
// }

//function f2() {
// promise.reslolve("log 2");
// }

//function f3() {
// promise.reslolve("log 3");
// }

//function f4() {
// promise.reslolve("log 4");
// }