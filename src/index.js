import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.js';
import { UserProvider } from './components/UserContext/UserContext.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserProvider>
    <Router>
      <App />
    </Router>
  </UserProvider>
);
