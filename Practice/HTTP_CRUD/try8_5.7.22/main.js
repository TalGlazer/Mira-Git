const fs = require(`fs`);
const args = process.argv.slice(2);
const path = require(`path`);
const command = args[0] ? args[0].toLowerCase() : "read";
const readFn = require(`./api/read.js`);
const createFn = require(`./api/create.js`);
const updateFn = require(`./api/update.js`);
const deleteFnc = require(`./api/delete.js`);

let msg;

switch (command) {
  case `read`:
    const cart = readFn();
    console.log(`Current cart status:`, cart);
    break;
  case `create`:
    msg = createFn(JSON.parse(args[1]));
    console.log(msg);
    break;
  case `update`:
    msg = updateFn(JSON.parse(args[1]));
    console.log(msg);
    break;
  case `delete`:
    msg = deleteFnc(JSON.parse(args[1]));
    // console.log(msg);
    break;
}
