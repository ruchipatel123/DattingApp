// server.js
const { createServer } = require('https');
const { parse } = require('url');
const fs = require('fs');
const next = require('next');

const hostname = 'localhost';
const portFinderSync = require('portfinder-sync');
var ip = require('ip');
const port = portFinderSync.getPort(3000);

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

const httpsOptions = {
  key: fs.readFileSync('./https/localhost.key'),
  cert: fs.readFileSync('./https/localhost.crt'),
};

app.prepare().then(() => {
  createServer(httpsOptions, (req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (pathname === '/a') {
      app.render(req, res, '/a', query);
    } else if (pathname === '/b') {
      app.render(req, res, '/b', query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on https://localhost:${port}`);
    console.log(`> Ready on https://${ip.address()}:${port}`);
  });
});
