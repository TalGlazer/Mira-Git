const PORT = 4321;
// Need to import http package.
// Http object has a method to build a server
const http = require(`http`);
const fs = require(`fs`); // fs = file system
const path = require(`path`); // path = is an object, which allows you to manipulate files' paths inside the fs.
const readFn = require(`../services/read`); // grabs the read.js inside services
const clientDirPath = path.join(__dirname + `/./../../clientSideFiles`);
console.log(clientDirPath);
// Returns http object
// Now we build the server using the http object with the createServer() method.
const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch (url) {
    case `/`:
      const homeHtml = fs.readFileSync(
        // readFileSync returns a copy of the file(home.html in this ex.) in the specified path.
        clientDirPath + `/homePage/home.html`
      );
      res.end(homeHtml); // Returns the specified page to the client and terminates current request.
      break;
    case `/showStudents`:
      const showStudentsHtml = fs.readFileSync(
        clientDirPath + `/showStudents/showStudents.html`
      );
      res.end(showStudentsHtml);
      break;
    case `/showStudentsJS`:
      const showStudentsJS = fs.readFileSync(
        clientDirPath + `/showStudents/showStudents.js`
      );
      res.end(showStudentsJS);
      break;

    case `/api/getStudents`:
      const students = readFn();
      res.end(students);
      break;
  }
}); // Opens the computer's local server (by default).
// Returns a server object, which has a method called listen()
// that must be used after creating the server.
server.listen(PORT, () => {
  console.log(`Server's up and running. Listening on port: ${PORT}`);
});
