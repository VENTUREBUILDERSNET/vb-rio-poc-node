const http = require("http");
const port = process.env.PORT || 8080;

const requestHandler = (request, response) => {
  console.log(request.url);
  const name = process.env.NAME || `Node.js`;
  response.end(`Hello World, I'm ${name} v23!`);
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
});
