// // calculation through Terminal

// const args = process.argv.slice(2);

// const num1 = args[0];
// const num2 = args[1];

// const operation = args[2];

// if(isNaN(num1) || isNaN(num2)){
//     console.log(`enter a valid number`);
// }
// if(operation !== `+` && operation!== `-` && operation!== `*` && operation!== `/`){
//     console.log(`enter a valid operation`);
// }
// switch (operation) {
//     case `+`:
//         console.log(num1 + num2);
//         break;
// }

const data = Buffer.from(`Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll
Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz`);
console.log(`data`, data);