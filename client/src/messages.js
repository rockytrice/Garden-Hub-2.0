import openSocket from 'socket.io-client';
//calling the main export function from the socket.io-client module, providing a port
const  socket = openSocket('http://localhost:5000');

function subscribe(cb) {
  socket.on('mqtt', msg => cb(null, msg.payload, msg.topic));
  socket.emit('subscribe',{topic: "inTopic"});
}

export { subscribe };
