import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Header } from './components';
import UserRouter from './router/UserRouter';

function App() {
  return (
    <>
      <Router>
        <Header />
        <UserRouter></UserRouter>
      </Router>
    </>
  );
}

export default App;