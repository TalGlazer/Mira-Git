const args = process.argv.slice(2);
const command = args[0];

console.log(`command: ${command}`);
const readFn = require(`./api/read`);
const updateFn = require(`./api/update`);
const createFn = require(`./api/create`);
const deleteFn = require(`./api/delete`);

switch (command) {
  case `read`:
    const cart = readFn();
    console.log(`from main.js - `, cart, typeof cart);
    break;
  case `update`:
    updateFn();
    break;
  case `create`:
    createFn();
    break;
  case `delete`:
    deleteFn();
    break;
  default:
    console.log(`command ${command} -unknown`);
}
