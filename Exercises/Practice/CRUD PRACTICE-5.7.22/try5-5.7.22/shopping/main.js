const args = process.argv.slice(2);
const crudCommand = args[0] ? args[0].toLowerCase() : `read`;
const readFn = require(`./api/read.js`);
const createFn = require(`./api/create.js`);
const updateFn = require(`./api/update.js`);
const deleteFn = require(`./api/delete.js`);

switch (crudCommand) {
  case `read`:
    const cart = readFn();
    console.log(cart, typeof cart);
    break;
  case `create`:
    if (args[1]) {
      createFn(JSON.parse(args[1]));
    } else {
      console.log(`Missing Arguments for function Create...`);
    }
    break;
  case `update`:
    if (args[1]) {
      const message = updateFn(JSON.parse(args[1]));
      console.log(message);
    } else {
      console.log(`Missing Arguments for function Update...`);
    }
    break;
  case `delete`:
    if (args[1]) {
      deleteFn(JSON.parse(args[1]));
    } else {
      console.log(`Missing Arguments for function Delete...`);
    }
    break;
  default:
    console.log(`Please enter a valid command`);
}