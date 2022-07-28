//^ Creating a READ function:

function read() {
  console.log(`hi from read`);
}

// To make the function `read` available for export, we will use:
module.exports = read;
// This way, whoever will try to call this file with -require-,
// will recieve the read function.
