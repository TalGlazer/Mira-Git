//^ Creating an UPDATE function:

function update() {
  console.log(`hi from update`);
}

// To make the function `update` available for export, we will use:
module.exports = update;
// This way, whoever will try to call this file with -require-,
// will recieve the update function.
