const fs = require(`fs`);
const path = require(`path`);
const dataDirPath = path.join(__dirname + `/./../data`);
const readFn = require(`./read.js`);

function update(updateDataObj) {
  console.log(`FROM UPDATE FUNCTION: `, updateDataObj);
  const cart = readFn();
  console.log(`FROM UPDATE FUNCTION: `, cart);
  for (const product of cart) {
    if (product.id === updateDataObj.id) {
      for (const key in updateDataObj) {
        if (key !== "id") {
          product[key] = updateDataObj[key];
        }
      }
      fs.writeFileSync(dataDirPath + `/cart.json`, JSON.stringify(cart));
      return `Product ID ${updateDataObj.id} was updated successfully!`;
    }
  }
  return `No ID found, update Failed.`;
}

module.exports = update;
