import { WebSocketServer, WebSocket } from 'ws';

const PORT = 8080;
const server = new WebSocketServer({ port: PORT });

interface SocketClient extends WebSocket {
    id: string;
    hello_timeout_id: string | number | NodeJS.Timeout;
}

server.on('connection', (ws: SocketClient, req) => {
    if (!req.headers['sec-websocket-protocol'].includes('anonymous-v2')) {
        console.warn(`Invalid protocol. Expected: anonymous-v2, found: ${req.headers['sec-websocket-protocol']}`)
        return ws.close(1002, 'invalid protocol');
    }

    ws.send(JSON.stringify({
        action: 'hello',
        payload: 'authentication request'
    }));

    ws.hello_timeout_id = setTimeout(() => {
        ws.close(3000, 'authentication time out')
    }, 5000);

    ws.on('message', (message) => {
        const data = JSON.parse(message.toString());

        console.log('incoming message', data);

        switch (data.action) {
            case 'authenticate':
                clearTimeout(ws.hello_timeout_id);

                // we could use JWT or something similar to validate this user
                ws.id = data.payload;
                ws.send(JSON.stringify({
                    action: 'authenticated',
                    payload: `welcome back ${ws.id}`
                }));
                break;
            default:
                console.log('unknown action', data);
        }
    })
});

setInterval(() => {
    console.log(`active clients count: ${server.clients.size}`, Array.from(server.clients.values()).map((i: SocketClient) => i.id))
}, 5000);

console.log(`Server started on ${PORT}`)