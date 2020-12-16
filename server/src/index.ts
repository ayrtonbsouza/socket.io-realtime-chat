import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';
import cors from 'cors';

import router from './routes';

const PORT = process.env.PORT || 5000;

const app = express();
const server = createServer(app);
const io = new Server(server);

io.on('connection', socket => {
  console.log('We have a new connection');

  socket.on('join', ({ name, room }, callback) => { });

  socket.on('disconnect', () => {
    console.log('User had left');
  });
});

app.use(router);
app.use(cors());

server.listen(PORT, () => {
  console.log(`Server has started and it's running on port ${PORT} 🚀`);
});
