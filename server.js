// server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta "public"
app.use(express.static('public'));

// Estrutura para armazenar os usuários online por sala
const onlineUsersByRoom = {};

io.on('connection', (socket) => {
  console.log(`Socket conectado: ${socket.id}`);

  // Evento para o usuário se juntar a uma sala
  socket.on('join room', ({ username, room }) => {
    socket.join(room);
    socket.username = username; // salva o nome no socket
    socket.room = room;

    if (!onlineUsersByRoom[room]) onlineUsersByRoom[room] = {};
    onlineUsersByRoom[room][socket.id] = username;

    // Emite aos clientes da sala a lista atualizada de usuários online
    io.to(room).emit('online users', Object.values(onlineUsersByRoom[room]));

    // Notifica a sala (exceto o joining socket) que o usuário entrou
    socket.to(room).emit('chat message', {
      username: 'System',
      message: `${username} entrou na sala.`,
      timestamp: new Date().toLocaleTimeString()
    });
  });

  // Evento para mensagem de chat
  socket.on('chat message', (data) => {
    data.timestamp = new Date().toLocaleTimeString();
    io.to(socket.room).emit('chat message', data);
  });

  // Eventos para indicação de digitação
  socket.on('typing', () => {
    socket.to(socket.room).emit('typing', { username: socket.username });
  });
  socket.on('stop typing', () => {
    socket.to(socket.room).emit('stop typing', { username: socket.username });
  });

  // Evento de desconexão: remove usuário da sala e atualiza a lista
  socket.on('disconnect', () => {
    console.log(`Socket desconectado: ${socket.id}`);
    if (socket.room && onlineUsersByRoom[socket.room]) {
      delete onlineUsersByRoom[socket.room][socket.id];
      io.to(socket.room).emit('online users', Object.values(onlineUsersByRoom[socket.room]));
      socket.to(socket.room).emit('chat message', {
        username: 'System',
        message: `${socket.username} saiu da sala.`,
        timestamp: new Date().toLocaleTimeString()
      });
    }
  });
});

http.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
