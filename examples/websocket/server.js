const { WebSocketServer } = require('ws');

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function connection(ws) {
    let from = Date.now();

    ws.on('message', function message(data) {
        console.log('received: %s', data);
        from = (JSON.parse(data)).datetime;

        ws.send(JSON.stringify({
            message: 'pong',
            latency: Date.now() - from
        }));
    });
});

console.log('Server started on 8080.')