const fs = require(`fs`);
const path = require(`path`);
const readFn = require(`./read.js`);
const dataDirPath = path.join(__dirname + `/../data`);

function create(newlyCreatedProduct) {
    const cart = readFn();
    cart.push(newlyCreatedProduct);
    
}