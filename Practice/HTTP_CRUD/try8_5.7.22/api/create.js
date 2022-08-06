const fs = require(`fs`);
const path = require(`path`);
const dataDirPath = path.join(__dirname + `/../data`);
const readFn = require(`./read.js`);

function create(productToCreate) {
  const cartArr = readFn();
  for ( const cartProduct of cartArr ) {
    if ( cartProduct.id === productToCreate.id ) {
      return `please choose another id.`;
    }
  }
  cartArr.push(productToCreate);
  fs.writeFileSync(dataDirPath + `/cart.json`, JSON.stringify(cartArr));
  return `Product Created Successfully in cart!`;
}

module.exports = create;
