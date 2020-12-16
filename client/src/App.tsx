import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GlobalStyle from './styles/global';

import Join from './components/Join';
import Chat from './components/Chat';

const App: React.FC = () => (
  <Router>
    <Route path="/" exact component={Join} />
    <Route path="/chat" component={Chat} />
    <GlobalStyle />
  </Router>
);

export default App;
