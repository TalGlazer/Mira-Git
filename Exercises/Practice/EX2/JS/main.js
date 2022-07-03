//             J A V A S C R I P T   T U T O R I A L - Source: learn-js.org/en             //


// HELLO WORLD

console.log(`Hello, World`); // Prints out Hello, World
// $WONDERFUL!$


//  V A R I A B L E S :
// -We can define several types of variables to us in our code:

const myNumber = 3; // prints out 3
const myString = `Hello, World`; // prints out `Hello World`
const myBoolean = true; // prints out `true` statement

// A few notes about variable types in JavaScript:
//  1. In JavaScript, the Number type can be both a floating point number and an interger.
//  2. Boolean variables can only be equal to either true or false.

// Two more advanced types of variables:
//  1. undefined --> When a variable is used without first defining a value for it, it's equal to undefined.
//  Example->:  const newVariable;
//              console.log(newVariable); // Prints undefined.

//  2. null --> null value however, is of different type. Used when a variable SHOULD be marked as empty.
//                *note: undefined can be used for this purpose, but shouldn't.
//  Example->:  const emptyVariable = null;
//              console.log(emptyVariable); // Will print out null

//  EXERCISE :
//   Define the following variables:
//                                  1. A number called exMyNumber, which contains the number 4;
//                                  2. A string called exMyString, which contains the sentence "Variables are great.";
//                                  3. A boolean called exMyBoolean, which contains the value false

let exMyNumber = 4
let exMyString = 'Variables are great.'
let exMyBoolean = false
console.log(`myNumber is equal to ` + exMyNumber);
console.log(`myString is equal to ` + exMyString);
console.log(`myBoolean is equal to ` + exMyBoolean);
// GOOD JOB!


//  A R R A Y S :
// -To define an array, either use the brackets notation or the Array object notation:
//  Example->:  let myArray = [1, 2, 3];
//              let theSameArray = new Array(1, 2, 3);

// -ADDRESSING:-
// -We can use the brackets [] operator to address a specific cell in our array.
// Addressing uses zero-based indices,
// so for example, in myArray the 2nd member can be addressed with index 1.
// One of the benefits of using an array datastructure is that you have constant time look-up,
// if you already know the index of the element you are trying to access.

//  Example->: console.log(myArray[1]); // Prints out 2

// Arrays in JavaScript are sparse,
// meaning that we can also assign variables to random locations,
// even though previous cells were undefined.

//  Example->: let myArray = []
//            myArray[3] = `hello`
//            console.log(myArray); // Will print out: [undefined, undefined, undefined, `hello`].
//  *Example of Array with different elements->: let myArray = [`string`, 10, {}, etc..]

//  EXERCISE :
//   Define an array with the following 3 variables:
//                         1. A string which has the value of "What is the meaning of life?";
//                         2. A number which has a value of 42;
//                         3. A boolean which has a value of true;

let myArray = [`What is the meaning of life?`, 42, true];
// EXELLENT! YOU'RE REALLY GETTING THE HANG OF IT! :)

// -PUSHING AND POPPING -> MANIPULATING ARRAYS:-
// Arrays can also function as a stack.
// The push and pop methods insert and remove variables from the end of an array

//  Example(.push())->: let myStack = [];
//              myStack.push(1);
//              myStack.push(2);
//              myStack.push(3);
//              console.log(myStack); // Will print out 1, 2, 3

//  Example(.pop())->: console.log(myStack.pop());
//                     console.log(myStack); // Will print out the variable we popped from Array,
//                     and what's left of Array:
//                                            3 // The result from myStack.pop().
//                                          1,2 // What myStack contains now.

// -QUEUES USINGS SHIFTING AND UNSHIFTING:-
// The unshift and shift methods are similar to push and pop,
// only they work from the beginning of the array.
// We can use the push and shift methods consecutively to utilize an array as:
// a queue.
//  Example(.shift())->: let myQueue = [];
//             myQueue.push(1);
//             myQueue.push(2);
//             myQueue.push(3);

//             console.log(myQueue.shift());
//             console.log(myQueue.shift());
//             console.log(myQueue.shift());

// SHIFT = The ~shift()~ keyword will remove the variables of the array
// in the exact order they were inserted in, and the output will be: 1
//                                                                   2
//                                                                   3
// UNSHIFT = The ~unshift()~ method is used to insert a variable at the begining of an array.
//  Example->: let myArray = [1,2,3];
//             myArray.unshift(0);
//             console.log(myArray); // Will print out 0,1,2,3

// -SPLICING-
// Splicing arrays in JavaScript removes a certain part from an array
// to create a new array, made up from the part we took out.
// If we wanted to remove the five numbers from the following array
// beginning from the 3rd index, we would do as this-
//  Example(splicing)->: let myArray = [0,1,2,3,4,5,6,7,8,9];
//                       let splice = myArray.slice(3,5);

//                       console.log(splice); // Will print out 3,4,5,6,7
//                       console.log(myArray); // Will print out 0,1,2,8,9

//  EXERCISE :
//            1. Push the number 42 to the end of the array
//            2. Shift a variable from the beginning of the array

let myArrayTwo = [true, `What is the meaning of life?`];
myArrayTwo.push(42);
myArrayTwo.shift();
console.log(myArrayTwo(0));
console.log(myArrayTwo(1));
// AWESOME! YOU'RE A NATURAL! ^_^


//  O P E R A T O R S :
// 

//
//
//
//
//
//
//
//
//
//
//
//
//
// AMAZING!


//  C O N D I T I O N S :
// -The if statement allows us to check if an expression is equal to true or false,
//  and execute different code according to the result.

//  EXAMPLE->:
//  if (confirm(`Are you John Smith?`)) {
//  console.log(`Hello John, how are you?`);
//  } else {
//  console.log(`Then what is your name?`);
//  }

// To evaluate whether two variables are equal, the == operator is used.
// There is also another equality operator in JavaScript, ===, which does a strict comparison.
// This means that it will be true only if the two things you are comparing 
// are the same type as well as same content.

// console.log(`1` == 1) // True
// console.log(`1` === 1) // False

//  EXAMPLE ->: let myNumber = 42;
//                if (myNumber == 42) {
//                   console.log(`The number is correct.`);
//  }
//   *EXAMPLE OF INEQUALITY OPERATORS USED TO EVALUATE EXPRESSIONS->:
//          let foo = 1;
//          let bar = 2;

//          if (foo < bar) {
//           console.log(`foo is smaller than bar.`);                                         
//  }