const io = require('socket.io')();

io.on('connection', (client) => {
  console.log('connection')

  client.on('subscribeToTimer', (interval) => {
    console.log('timer subscribed');
    client.emit('timer', {time: null, message: 'message sent'});
    setInterval(() => {
      client.emit('timer', {time: new Date(), message: 'message sent again'});
    }, interval);
  });

  client.on('incrementClient', (param) => {
    console.log('increment', param)
    client.emit('incrementServer', param);
  });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);