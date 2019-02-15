import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer(callback) {
  console.log('subscribe to counter', callback);
    socket.on('timer', timestamp => callback(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
} 

function subscribeToCounter() {
  console.log('subscribe to counter');
//   socket.emit('addClient', 1);
//   socket.on('addServer', console.log('works'));
} 

export { subscribeToTimer, subscribeToCounter }