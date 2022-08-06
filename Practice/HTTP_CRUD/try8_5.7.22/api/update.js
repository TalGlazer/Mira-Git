const fs = require(`fs`);
const path = require(`path`);
const dataDirPath = path.join(__dirname + `/../data`);
const read = require(`./read.js`);

function update(dataToUpdate) {
  const cartArr = read();
  for (const product of cartArr) {
    if (product.id === dataToUpdate.id) {
      for (const key in dataToUpdate) {
        if (key !== "id") {
          product[key] = dataToUpdate[key];
        }
      } //^ -> update completed
      fs.writeFileSync(dataDirPath + `/cart.json`, JSON.stringify(cartArr));
      return `product successfully updated`;
    }
  }
  //^ -> update failed
  return `id not found, update failed.`
}

module.exports = update;
