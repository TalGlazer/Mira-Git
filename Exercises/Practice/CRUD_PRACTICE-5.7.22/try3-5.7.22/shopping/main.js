const args = process.argv.slice(2);
console.log(args);
//? When we want to grab arguments from the CLI we use process.argv. This returns an array, given to us by node.js with all the arguments we enter inside the command line.
//*  For Example -> node main.js read --> Will return
//* ['C:\\Program Files\\nodejs\\node.exe',
//* 'C:\\Users\\Tal\\Desktop\\Mira-Git\\Exercises\\Practice\\EX5_5-7-22\\shopping\\main.js',
//* `read`]

const command = args[0];
console.log(`command`, command);
