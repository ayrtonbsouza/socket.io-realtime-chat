import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, InnerContainer, JoinInput, Header } from './styles';

const Join: React.FC = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Container>
      <InnerContainer>
        <Header>Join</Header>
        <div>
          <JoinInput
            type="text"
            placeholder="Name"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          <JoinInput
            type="text"
            placeholder="Room"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        <Link
          onClick={event => (!name || !room ? event.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit">Sign In</button>
        </Link>
      </InnerContainer>
    </Container>
  );
};

export default Join;
