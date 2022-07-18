const http = require(`http`);
const PORT = 3434;

const server = http.createServer((req, res) => {
    const method = req.method

})

console.log(`server listening on port: ${PORT}`);
