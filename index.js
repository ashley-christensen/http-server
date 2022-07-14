const http = require('http');

const PORT = 3008;

const server = http.createServer((req, res) => {
 //write response header
 res.writeHead(200, {
  'Content-Type': 'application/json',
 });
 //Data is ready, res.end expects a string
 res.end(JSON.stringify({
  id: 1,
  name: 'Sir Isaac Newton',
 }));
});

server.listen(PORT, () => {
 console.log(`Listening on port ${PORT}...`);
}); //IP address 127.0.0.1 => localhost