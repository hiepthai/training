const WebSocket = require('ws');

const ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open', function open() {
    console.log('Client started.')

    ws.send(JSON.stringify({
        message: 'ping',
        datetime: Date.now(),
    }));

    setInterval(() => {
        ws.send(JSON.stringify({
            message: 'ping',
            datetime: Date.now(),
        }));
    }, 3000)
});

ws.on('message', function message(data) {
    console.log('received: %s', data);
});