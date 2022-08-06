const http = require(`http`);
const fs = require(`fs`);
const path = require(`path`);
const clientDirPath = path.join(__dirname + `/./../../clientSideFiles`);

const PORT = 4201;

const server = http.createServer((req, res) => {
  const method = req.method;
  const url = req.url;
  switch (url) {
    case `/`:
      const homeHtml = fs.readFileSync(
        clientDirPath + `/homePage/home.html`,
        `utf-8`
      );
      console.log(homeHtml);
      break;
  }
});

server.listen(PORT, () => {
  console.log(
    `Server is up and running. Listenning for request on port: ${PORT}`
  );
});
