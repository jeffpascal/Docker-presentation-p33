// Load HTTP module
const http = require("http");

// The hostname and port where the server will run
const hostname = '0.0.0.0';
const port = 3000;

// Create HTTP server 
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body "Hello, World!"
  res.end('Hello, World!\n');
});

// Server listens on hostname and port
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});s