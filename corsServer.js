const cors_proxy = require('cors-anywhere');

const host = 'localhost';
const port = 8080;

const client = cors_proxy.createServer({
  originWhitelist: [],
}).listen(port, host, () => {
  console.log(`CORS Anywhere proxy server is running on ${host}:${port}`);
})
