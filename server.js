const http = require('http');
const app = require('./node_backend/app')
const port = process.env.PORT || 3000;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);
