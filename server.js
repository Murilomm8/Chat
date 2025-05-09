// server.js
const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

// Serve arquivos estáticos da pasta "public"
app.use(express.static('public'));

let onlineUsers = {}; // Armazena username por socket.id

io.on('connection', (socket) => {
  console.log(`Usuário conectado: ${socket.id}`);

  // Recebe o nome do usuário e adiciona na lista de online
  socket.on('set username', (username) => {
    onlineUsers[socket.id] = username;
    io.emit('online users', Object.values(onlineUsers));
  });

  // Recebe a mensagem de chat; adiciona timestamp e retransmite para todos
  socket.on('chat message', (data) => {
    data.timestamp = new Date().toLocaleTimeString();
    io.emit('chat message', data);
  });

  // Remove usuário da lista ao desconectar
  socket.on('disconnect', () => {
    console.log(`Usuário desconectado: ${socket.id}`);
    delete onlineUsers[socket.id];
    io.emit('online users', Object.values(onlineUsers));
  });
});

http.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
