const fs = require(`fs`);
const path = require(`path`);
const readFn = require(`./read.js`);
const dataDirPath = path.join(__dirname + `/../data`);


function create(productToCreate) {
  const cart = readFn();
  for (const product of cart) {
    if (product.id === productToCreate.id) {
      const msg = `ID already exists, please choose another.`;
      return msg;
    }
  }
  cart.push(productToCreate);
//   console.log(`from create.js`, cart, typeof cart);
  const cartJsonString = JSON.stringify(cart);
  fs.writeFileSync(dataDirPath + "/cart.json", cartJsonString);
  return `Product with id ${productToCreate.id} added successfully.`
}

module.exports = create;
