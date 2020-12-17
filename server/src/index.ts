import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';

import { addUser, removeUser, getUser, getUsersInRoom } from './users';

import router from './routes';

interface User {
  id: string;
  name: string;
  room: string;
}

const PORT = process.env.PORT || 5000;

const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', socket => {
  socket.on('join', ({ name, room }, callback) => {
    const { error, user } = addUser({
      id: socket.id,
      name,
      room,
    });
    if (error) {
      return callback(error);
    }
    socket.emit('message', { user: 'admin', text: `${user.name}, welcome to the room ${user.room}` });
    socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined!` });
    socket.join(user.room);
    callback();
  });
  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id) as User
    io.to(user.room).emit('message', { user: user?.name, text: message });
    callback();
  })
  socket.on('disconnect', () => {
    console.log('User had left');
  });
});

app.use(router);
app.use(cors());

server.listen(PORT, () => {
  console.log(`Server has started and it's running on port ${PORT} 🚀`);
});
