const io = require('socket.io')();

io.on('connection', (client) => {
  console.log('connection')

  client.on('subscribeToTimer', (interval) => {
    console.log('timer subscribed');
    setInterval(() => {
      client.emit('timer', new Date());
    }, interval);
  });

  // client.on('addClient', (param) => {
  //   console.log('add', param)
  //   io.emit('addServer');
  // });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);