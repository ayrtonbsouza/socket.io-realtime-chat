import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  height: 100vh;
  align-items: center;

  @media (min-width: 320px) and (max-width: 480px) {
    height: 100vh;
  }

  button {
    margin-top: 20px;
    color: #fff !important;
    text-transform: uppercase;
    text-decoration: none;
    background: #ff9000;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    width: 100%;
  }

  button:focus {
    outline: 0;
  }
`;

export const InnerContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  @media (min-width: 320px) and (max-width: 480px) {
    height: 100vh;
  }
`;

export const JoinInput = styled.input`
  margin-top: 20px;
  border-radius: 5px;
  padding: 15px 20px;
  width: 100%;
`;

export const Header = styled.h1`
  color: white;
  font-size: 2.5em;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;
