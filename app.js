const app = require('./config/server');

const server = app.listen(5000, () => {
  console.log('app start => http://localhost:5000');
});

// START SOCKET

const io = require('socket.io')(server)

// setando a variável socket io para que toda a minha app possa usar também
app.set('io', io);

io.on('connection', (socket) => {
  console.log('entrei na sala');

  socket.on('disconnect', () => {
    console.log('saiu da sala');
  });

  socket.on('msgParaServidor', (data) => {
    socket.emit('msgParaCliente', {
      apelido: data.apelido,
      mensagem: data.mensagem,
    });
  
    // disparando uma mensagem para todos os usuários
    socket.broadcast.emit('msgParaCliente', {
      apelido: data.apelido,
      mensagem: data.mensagem,
    });
  });
});