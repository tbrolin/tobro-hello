// http service listening on port 8181
// for gets on /hello and respond with
// a simple message

const http = require ('http');
const url = require ('url');

const PORT = process.env.PORT || 8181

const server = http.createServer ((request, response) => {
  // parse the url from request
  let requestUrl = url.parse (request.url);

  // remove any jamming slashes from pathname
  let path = requestUrl.pathname.replace (/^\/+|\/+$/g, '');

  // check method and path and respond
  if (request.method.toUpperCase () === 'GET' && path === 'hello') {
    response.setHeader ('content-type', 'application/json');
    response.end ('{"Welcome":"How are you?"}');
  } else {
    response.writeHead (404);
    response.end ();
  }
});

console.log (`serving on port ${PORT}`)
server.listen (PORT);
