const http = require("http");
const port = process.env.PORT || 80;

const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("Hello World, I'm Node.js v17!");
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log(err);
  }

  console.log(`server is listening on ${port}`);
});
