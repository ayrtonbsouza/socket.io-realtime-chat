import express from 'express';
import { Server } from 'socket.io';
import { createServer } from 'http';

import router from './routes';

const PORT = process.env.PORT || 5000;

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(router);

server.listen(PORT, () => {
  console.log(`Server has started and it's running on port ${PORT} 🚀`);
});
