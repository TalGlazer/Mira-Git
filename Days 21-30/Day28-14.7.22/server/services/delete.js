const read = require("./read");

function deleteFn() {
  console.log(`hi from del function`);
  const storedStudents = JSON.parse(read());
  console.log(`storedStudents`, storedStudents);
}

module.exports = deleteFn;
