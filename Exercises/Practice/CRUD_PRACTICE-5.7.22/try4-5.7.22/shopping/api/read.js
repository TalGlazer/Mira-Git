const fs = require(`fs`);
const { type } = require("os");
const path = require(`path`);
// console.log(`dirname: `, __dirname);
const dataDirPath = path.join(__dirname + `/./../data`);
// console.log(dataDirPath);

function read() {
  const cart = fs.readFileSync(dataDirPath + `/cart.json`, `utf-8`);
  const cartArr = JSON.parse(cart)
  return cartArr;
}

module.exports = read;
