const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);
const clientDirPath = path.join(__dirname + `/./../clientSideFiles`);

const PORT = 1212;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch (url) {
    case `/`:
      const homeHtml = fs.readFileSync(
        clientDirPath + `/homePage/home.html`,
        `utf-8`
      );
      res.end(homeHtml);
      break;
    case `/showStudents`:
      const showStudents = fs.readFileSync(
        clientDirPath + `/showStudents/showStudents.html`,
        `utf-8`
      );
      res.end(showStudents);
      break;
  }
});

server.listen(PORT, () => {
  console.log(`server is running. Listening on port num: ${PORT}`);
});
