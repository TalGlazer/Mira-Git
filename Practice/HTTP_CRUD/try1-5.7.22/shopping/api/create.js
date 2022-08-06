//^ Creating a "CREATE/add" function:

function create() {
  console.log(`hi from create`);
}

// To make the function `create` available for export, we will use:
module.exports = create;
// This way, whoever will try to call this file with -require-,
// will recieve the create function.
