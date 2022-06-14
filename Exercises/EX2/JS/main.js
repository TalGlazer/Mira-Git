var fullNameArr = prompt("Enter Your Name, Adventurer.");
var fullName = fullNameArr;
var message = ""

function credentials() {
    if (fullNameArr == fullName) {
        message = "Welcome, "
        alert(message + `${fullName}`);
        return message + `${fullName}`;
    } else if (fullName === 0, 1) {
        message = "Please enter a valid name"
        alert(message)
    }
}
console.log(credentials());

class Player {
    constructor(_size, _speed, _strength) {
        this.alive = true;
        this.size = _size;
        this.speed = _speed;
        this.strength = _strength;
    }
}
// console.log(Player);

function calculate(a, b) {
    var c = a + b;
    return c
}
console.log(calculate());

function calculateTwo(a, b, c) {
    var d = a + b * c;
    return d
}
console.log(calculateTwo());