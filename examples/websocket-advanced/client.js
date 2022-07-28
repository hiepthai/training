const client = new WebSocket('ws://127.0.0.1:8080', ['anonymous-v2']);

client.addEventListener('open', function open() {
    console.log('Client started.')
});

client.addEventListener('message', (message) => {
    const data = JSON.parse(message.data);

    switch (data.action) {
        case 'hello':
            client.send(JSON.stringify({
                action: 'authenticate',
                payload: crypto.randomUUID(),
            }))
            break;
        case 'authenticated':
            console.log('authentication complete', data);
            break;
        default:
            console.warn('unknown message', data)
    }
})

client.addEventListener('close', (data) => {
    console.log(data)
})