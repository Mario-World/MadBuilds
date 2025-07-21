# OwnProtocol

OwnProtocol is a simple demonstration of building a custom protocol over raw TCP sockets, without using HTTP. This project includes both a TCP server and a client, showcasing how to send and receive structured messages using Node.js's built-in `net` module.

## Concepts

- **Raw TCP Communication:**  
  The project uses Node.js's `net` module to establish direct socket connections between a client and a server, bypassing higher-level protocols like HTTP.

- **Custom Protocol Framing:**  
  Messages are wrapped with `[SOF]` (Start of Frame) and `[EOF]` (End of Frame) markers to define message boundaries, making it easier to parse messages from the TCP stream.

- **Connection Handling:**  
  The client attempts to maintain a connection and logs when the connection ends, suggesting retries.


## How It Works

- The **server** listens for incoming TCP connections on port 9001. When data is received, it logs the message.
- The **client** connects to the server and sends a message framed with `[SOF]` and `[EOF]`.

## Usage

1. **Install dependencies** (for TypeScript type support, optional):
   ```sh
   npm install

Example Output 

Server: 

A TCP Socket Connection Open...
Recv [SOF]
hello world
[EOF]

Client: 

Connection Established...