var fName = ``;
var people = 0;

do {
  fName = prompt(`Enter Your Name:`).toLowerCase();
  people++;
} while (fName != "david");

alert(`it took ${people} tries to find david`);
