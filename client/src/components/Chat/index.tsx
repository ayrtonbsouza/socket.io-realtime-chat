import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { io } from 'socket.io-client';

import { Container } from './styles';

let socket;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Chat: React.FC = ({ location }: any) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const ENDPOINT = 'localhost:5000';

  useEffect(() => {
    // eslint-disable-next-line no-shadow
    const { name, room } = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setName(name as string);
    setRoom(room as string);

    socket.emit('join', { name, room }, () => {
      // eslint-disable-next-line no-console
      console.log(name, room);
    });

    return () => {
      socket.off();
    };
  }, [ENDPOINT, location.search, name, room]);

  return (
    <Container>
      <h1>Chat</h1>
    </Container>
  );
};

export default Chat;
