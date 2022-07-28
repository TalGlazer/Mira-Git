const fs = require(`fs`);
const path = require(`path`);
const dataDirPath = path.join(__dirname + `/../data`);

function read() {
  const cart = fs.readFileSync(dataDirPath + `/cart.json`, `utf-8`);
  const jsonCart = JSON.parse(cart);
  return jsonCart;
}
module.exports = read;
