const http = require(`http`);
const fs = require("fs");
const PORT = 4200;
const path = require("path");
const readFn = require("./services/read");
const writeFn = require("./services/write");
const delFn = require("./services/delete");
const viewsDir = path.join(__dirname + "./views/");

const server = http.createServer(async (req, res) => {
  const method = req.method;
  const url = req.url;
  switch (url) {
    case "/":
    case "/class.js":
      fs.createReadStream(viewsDir + "/delete/delete.html").pipe(res);
    case "/delete":
      fs.createReadStream(viewsDir + "/delete/delete.html").pipe(res);
      return;
    case "/create":
    case "/create.js":

    case "/api/read":
    case "/api/students":
  }
});

server.listen(PORT);
console.log(`server listening on port: ${PORT}`);

// case `POST`:
//     case: `DELETE`:
//     const delBuffers = [];
//     for await (const chunk of req) {
//         delBuffers =
//     }
//     return
