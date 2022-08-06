const fs = require(`fs`);
const path = require(`path`);
const readFn = require(`./read.js`);
const dataDirPath = path.join(__dirname + `/../data`);

function update(dataToUpdateObj) {
  const cart = readFn();
  let found = false;
  for (let i = 0; i < cart.length; i++) {
    const storedProduct = cart[i];
    if (storedProduct.id === dataToUpdateObj.id) {
      found = true;

    }
  }
  if (found) {
    // console.log(``);
  }
  console.log(`from inside update`, dataToUpdateObj);
  return `ok`;
}

module.exports = update;