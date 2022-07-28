const fs = require(`fs`);
const path = require(`path`);
const dataDirPath = path.join(__dirname + `/./../data`);
const readFn = require(`./read.js`);
function create(obj) {
  const cart = readFn();
  cart.push(obj);
  fs.writeFileSync(dataDirPath + `/cart.json`, JSON.stringify(cart));
}

module.exports = create;
