# Websocket Advanced

## A Conceptual Deep Dive

### Request for Comments 6455
RFC 6455 from the Internet Engineering Task Force (IETF) to standardize [The WebSocket Protocol](https://datatracker.ietf.org/doc/html/rfc6455)

### Autobahn|Testsuite
[Fully automated test suite](https://github.com/crossbario/autobahn-testsuite) to verify client and server implementations of RFC 6455

### Subprotocols

You may have heard WebSockets simultaneously referred to as a “transport” and as a “protocol”. The former is more accurate, because while they are a protocol in the sense that a strict set of rules for establishing communication and enveloping the transmitted data must be adhered to, the standard does not take any stance regarding how the actual data payload is structured within the outer message envelope.

In fact, part of the specification includes the option for the client and server to agree on a protocol with which the transmitted data will be formatted and interpreted. The standard refers to these as “subprotocols”, in order to avoid issues of ambiguity in the nomenclature. Examples of subprotocols are JSON, XML, MQTT, WAMP. These can ensure agreement not only about the way the data is structured, but also about the way communication must commence, continue and eventually terminate.

...

The client and server generally need to agree on a compatible strategy with respect to how they format, interpret and organize the data itself, both within a given message, and over time, from one message to the next.

This is where subprotocols come in. [^1]

#### Examples
Example subprotocol request header:
```shell
Sec-WebSocket-Protocol: mqtt, wamp
```
Example reciprocal header issued by the server in the response:
```shell
Sec-WebSocket-Protocol: wamp
```

#### Well-known subprotocols
* [XMPP](https://xmpp.org) & [RFC 7395](https://www.rfc-editor.org/rfc/rfc7395.html) 
* [MQTT](https://mqtt.org)
* [List of registered subprotocols](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name)

### Extensions

WebSocket clients MAY request extensions to this specification, and
WebSocket servers MAY accept some or all extensions requested by the
client.  A server MUST NOT respond with any extension not requested
by the client.  If extension parameters are included in negotiations
between the client and the server, those parameters MUST be chosen in
accordance with the specification of the extension to which the
parameters apply. [^2]

* [Compression Extensions for WebSocket](https://www.rfc-editor.org/rfc/rfc7692.html) aka `permessage-deflate`
* `ws` package supports [compression](https://github.com/websockets/ws#websocket-compression)
* [Official extensions](https://www.iana.org/assignments/websocket/websocket.xhtml#extension-name)

### Close codes

Websocket have a wide range of [close codes](https://www.iana.org/assignments/websocket/websocket.xhtml#close-code-number)

## Subprotocol & Authentication Sample

* Open terminal
* Navigate to project root
* Run `cd ./examples/websocket-advanced`
* Run `npm run server`
* Open `index.html`

## Ebooks
* [The websocket handbook](https://files.ably.com/website/documents/ebook/the-websocket-handbook.pdf)

## Refs
[^1]: [https://ably.com/topic/websockets](https://ably.com/topic/websockets)
[^2]: [https://www.ietf.org](https://www.ietf.org)
