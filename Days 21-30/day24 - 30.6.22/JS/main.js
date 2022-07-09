const fs = require("fs");
const he = fs.readFileSync("./he.js", { encoding: `utf-8` });
console.log(`he`, he);
fs.writeFileSync(`./newFile`, `hello new file`);

// 1. REHEARSE `readFileSynce` + `writeFileSync` !!

// 2. REHEARSE Terminal Lingo