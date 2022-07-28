//^ Creating a DELETE function:

function deleteF() {
  console.log(`hi from delete function`);
}

// To make the function `deleteFnc` available for export, we will use:
module.exports = deleteF;
// This way, whoever will try to call this file with -require-,
// will recieve the delete function.
