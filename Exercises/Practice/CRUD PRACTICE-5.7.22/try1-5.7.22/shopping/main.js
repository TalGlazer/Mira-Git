// The process is a parameter which is provided by node.js
// argv are the parameters that have passed through the CLI
//* process.argv is an array that node.js gives us and puts in it the arguments from the CLI
const args = process.argv.slice(2);
// The first 2 parameters(node & appName) are parameters that we don't need 99% of the time.
// this is why we used the .node slice() method.
const command = args[0].toLowerCase;

//? WHAT ARE MODULES?
// Answer: Modules are files with a pre-written JS code, which are packages on their own,
// exist on their own, don't mix with other files
// and can be either sent or imported to other places
// within our code.

//? Write New Modules:
const createFn = require(`./api/create`);
const readFn = require(`./api/read`);
const updateFn = require(`./api/update`);
const deleteFn = require(`./api/delete`);
const sumFn = require(`./mainSum`);

switch (command) {
  case `create`:
    createFn();
    break;
  case `read`:
    readFn();
    break;
  case `update`:
    updateFn();
    break;
  case `delete`:
    deleteFn();
    break;
  case `sumFn`:
    sumFn();
    break;
}
