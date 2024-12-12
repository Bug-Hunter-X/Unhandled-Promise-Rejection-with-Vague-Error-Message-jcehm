const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080)
  .on('error', err => {
    console.error('Failed to start server:', err);
  })
  .on('listening', () => {
    console.log('Server is running on port 8080');
  });
// handles potential errors during server startup, providing more details in the console.