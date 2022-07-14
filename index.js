const http = require('http');

const PORT = 3009;

const server = http.createServer((req, res) => {
 if (req.url === '/friends') {
  // res.writeHead(200, {
  //  'Content-Type': 'application/json',
  // });
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify({//Data is ready, res.end expects a string
   id: 1,
   name: 'Sir Isaac Newton',
  }));
 } else if (req.url === '/messages') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<body>');
  res.write('<ul>');
  res.write('<li>Hello Ashley</li>');
  res.write('<li>What are your thoughts on astronomy?</li>');
  res.write('</ul>');
  res.write('</body>');
  res.write('</html>');
  res.end();
 }
});

server.listen(PORT, () => {
 console.log(`Listening on port ${PORT}...`);
}); //IP address 127.0.0.1 => localhost