import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, InnerContainer, JoinInput } from './styles';

const Join: React.FC = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  function handleChange(): void {
    console.log('change');
  }

  return (
    <Container>
      <InnerContainer>
        <h1>Join</h1>
        <div>
          <JoinInput type="text" placeholder="Name" onChange={handleChange} />
        </div>
        <div>
          <JoinInput type="text" placeholder="Room" onChange={handleChange} />
        </div>
        <Link to="/chat">
          <button type="submit">Sign In</button>
        </Link>
      </InnerContainer>
    </Container>
  );
};

export default Join;
