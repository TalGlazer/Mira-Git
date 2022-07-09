// // var divs = document.querySelectorAll("div");

// // divs.forEach(x=> {
// //     x.addEventListener("click", function(e) {
// //         //e.stopPropagation()
// //         console.log(this.id)
// //         console.log(e.bubbles);
// //     }, {capture:true})
// // })

// // .bubbles = Event bubbling is a term you might have come across on your JavaScript travels.
// // It relates to the order in which event handlers are called when one element is nested inside a second element,
// // and both elements have registered a listener for the same event (a click, for example)

// // .capture = Event capturing is one of two ways to do event propagation in the HTML DOM.
// // In event capturing, an event propagates from the outermost element to the target element.
// // It is the opposite of event bubbling, where events propagate outwards from the target to the outer elements
// window.addEventListener("keydown", function (e) {
//     e.preventDefault();
//     var k = e.key.toUpperCase();
//     // console.log(e.key);
//     //console.log(e.keyCode) = shows numeric value
//     // console.log(e.code) = gives value of key( with Capital lettering)
//     switch (k) {
//         case " ":
//             console.log("You pressed the big fat key.");
//             break;
//         case "ENTER":
//             console.log("Where do you want to enter?");
//             break;
//         case "BACKSPACE":
//             console.log("Nothing to delete");
//             break;

//         default:
//             break;
//     }
// });

const Modal = {
    div: document.querySelector("#modal"),
    isOpen: false,
    open: function (e) {
        Modal.div.isOpen = true;
        Modal.div.style.display = "block";
        Modal.div.style.top = e.y + "px";
        Modal.div.style.left = e.x + "px";
    },
    close: function () {
        Modal.div.style.display = "none";
        Modal.isOpen = false;
    },
};

window.addEventListener("contextmenu", Modal.open);
document.querySelector("#my-form").addEventListener("submit", function () {
    e.preventDefault();
    var fd = new FormData(this);
    for (const i of fd.values()) {
    }
})

// function rand() {
//     return parseInt(Math.random() * 5000 + 800);
//   }
  
// 1. RE-WATCH CLASSES 17-19 BY 11.6.2022
// 2. REHEARSE "PROMISES", "ASYNC/AWAIT"

function rand() {
    return parseInt(Math.random() * 5000 + 800);
}