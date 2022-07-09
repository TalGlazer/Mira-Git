const args = process.argv.slice(2);
const name = args[0];

function greet(name){
 console.log(`hi to ${name}`);   
}

greet(name);