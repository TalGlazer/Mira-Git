const args = process.argv.slice(2);
const command = args[0] ? args[0].toLowerCase() : `read`;
const readFn = require(`./api/read.js`);
const updateFn = require(`./api/update.js`);
const createFn = require(`./api/create.js`);
const deleteFn = require(`./api/delete.js`);

switch (command) {
  case `read`:
    const cart = readFn();
    console.log(cart);
    break;
  case `update`:
    if (args[1]) {
      const dataToUpdateObj = JSON.parse(args[1]);
      if (Object.keys(dataToUpdateObj).length !== 0) {
        if (
          Object.keys(dataToUpdateObj).includes(`id`) &&
          Object.keys(dataToUpdateObj).length > 1
        ) {
          const msg = updateFn(dataToUpdateObj);
          console.log(msg);
        } else console.log(`Cannot execute. ID not included`);
      } else console.log(`No update data given`);
    } else console.log(`Missing Arguments to execute Update function.`);
    break;
  case `create`:
    if (args[1]) {
      const productToAdd = JSON.parse(args[1]);
      console.log(`Product length:`, Object.keys(productToAdd).length);
      if (Object.keys(productToAdd).length !== 0) {
        const msg = createFn(productToAdd);
        console.log(msg);
        console.log(Object.values(productToAdd));
      } else console.log(`No product given.`);
    } else console.log(`Missing Arguments to execute Create function.`);
    break;
  case `delete`:
    deleteFn();
    break;
  default:
    console.log(`${command} - UKNOWN COMMAND.`);
}
