const args = process.argv.slice(2);
const command = args[0] ? args[0].toLowerCase() : "read";
const readFn = require(`./api/read.js`);
const createFn = require(`./api/create.js`);

switch (command) {
  case `read`:
    const cart = readFn();
    console.log(`Current cart status:`, cart);
    break;
  case `create`:
    createFn();
    break;
}
