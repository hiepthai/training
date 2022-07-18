# WebSocket Basic
Lightweight client-server communications

## Introduction

### Prerequisite

* [NodeJS 16](https://nodejs.org/en/)
* [Node Version Manager - NVM](https://github.com/nvm-sh/nvm  ) 
* [Node Package Manager - NPM](https://docs.npmjs.com/about-npm)
* [Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)
* [Pub/sub pattern](https://aws.amazon.com/pub-sub-messaging/)

### Why WebSocket?

The limitations of HTTP-based technology were the inspiration that brought about the development of WebSockets. A client will request a resource using HTTP, while the server will respond with the details. HTTP is a one-way protocol, which means that all data sent from the server to the client must be requested at first.

Long-polling has historically been used to get around this restriction. Long-polling is when a client sends an HTTP request with a long timeout, and the server uses the timeout to send data to the client. Long-polling works, but it has a drawback: it ties up server resources for the duration of the long poll, even though no data is available to submit.

WebSockets, in the other way round, allow the transmission of message-based data in a manner similar to UDP but with the security of TCP. WebSocket uses HTTP as the initial transport method but leaves the TCP link open after the HTTP response is received so that messages can be sent between client and server. WebSockets allow us to create “real-time” applications without requiring the use of long pollination.

#### Pros

* Two-way communication.
* Send and receive data much faster than HTTP.
* Communication between origins.
* Compatibility between platforms (web, desktop, mobile)
* HTTP has a 2000-byte overhead, but WebSocket only has a 2-byte cost.
* Pass through most firewalls without any reconfiguration.

#### Cons

* Limited browsers support
* WebSocket is a stateful protocol, whereas REST is based on stateless protocol
* A WebSocket server requires different optimizations than traditional web servers (scaling, load-balancing)

### Ecosystem

* [A curated list of WebSockets related principles and technologies.](https://github.com/facundofarias/awesome-websockets)

### Hello World

Basic communication between `WebSocketServer` and `WebSocket` client

* Open terminal
* Navigate to project root
* Run `cd ./examples/websocket-basic`
* Run `npm i`
* Run `node server.js`
* Run `node client.js`

## Standards vs Custom APIs

### Standard browser API

```javascript
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Connection opened
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// Listen for messages
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```

### `ws` package variation
```typescript
import WebSocket from 'ws';

const ws = new WebSocket('ws://www.host.com/path');

ws.on('open', function open() {
  ws.send('something');
});

ws.on('message', function message(data) {
  console.log('received: %s', data);
});
```

### `socket.io` package variation

```typescript
import { io } from "socket.io-client";

const socket = io("ws://localhost:8080/", {});

socket.on("connect", () => {
    console.log(`connect ${socket.id}`);
});

socket.on("disconnect", () => {
    console.log(`disconnect`);
});

setInterval(() => {
    const start = Date.now();
    socket.emit("ping", () => {
        console.log(`pong (latency: ${Date.now() - start} ms)`);
    });
}, 1000);
```

## WebSocket API

* [Constructor](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket/WebSocket)
* [Properties](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#properties)
* [Methods](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#methods)
* [Events](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#events)

## Ref
* https://www.amazon.com/WebSocket-Client-Server-Communications-Andrew-Lombardi/dp/1449369278
* https://hackernoon.com/pros-and-cons-of-websocket-and-eventsource
* https://hackernoon.com/everything-you-ever-wanted-to-know-about-websockets-literally-a05f36432999
* https://www.quora.com/What-are-the-pros-and-cons-of-using-WebSockets
* https://developer.mozilla.org/en-US/docs/Web/API/WebSocket#events
* https://www.bmc.com/blogs/pub-sub-publish-subscribe/