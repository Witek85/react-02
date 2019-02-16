import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subscribeToTimer(callback) {
    socket.on('timer', timestamp => callback(null, timestamp));
    socket.emit('subscribeToTimer', 1000);
} 

function subscribeToCounter(callback) {
  console.log('subscribe to counter');
  socket.emit('incrementClient', 1);
  socket.on('incrementServer', value => {
    console.log('on!')
    return callback(value);
  });
} 

export { subscribeToTimer, subscribeToCounter }