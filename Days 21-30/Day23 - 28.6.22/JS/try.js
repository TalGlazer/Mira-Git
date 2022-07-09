const age = 43;
const greet = function(name) {
    console.log(`hi`, name);
};


greet(`tal`)
function sayGreet(name, greetFn){
greetFn(name)
}

sayGreet(`tal`, greet)