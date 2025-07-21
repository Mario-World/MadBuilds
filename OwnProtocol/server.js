import { createServer } from 'node:net'; //creates a new TCP Server

const server = createServer( (socket) => {
    console.log(`A TCP Socket Connection Open...`);
    socket.on('data', (data) => {
        console.log('Recv', data.toString());
    });
});

server.listen(9001);