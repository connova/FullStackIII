const http = require('http');
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Slot Machine\n');

    if(req.url == '/spin'){
        console.log('spinning..')
    }

    if(req.url == '/play'){
        console.log('playing..')
    }
});

server.listen(port, hostname, () => {
    console.log('Please play or spin.');
});


