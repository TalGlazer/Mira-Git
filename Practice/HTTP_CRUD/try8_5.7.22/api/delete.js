const fs = require(`fs`);
const path = require(`path`);
const dataDirPath = path.join(__dirname + `/../data`);
const read = require(`./read.js`);

function deleteFn(productToDelete) {
  const cartArr = read();
  for (const product of cartArr) {
    if (product.id === productToDelete.id) {
      const index = cartArr.indexOf(product);
      cartArr.splice(index, 1);
      fs.writeFileSync()
    }
  }
}

module.exports = deleteFn;