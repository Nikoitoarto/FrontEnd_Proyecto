import './styles/app.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from 'context/AppContext';
import Main from 'pages/Main';
import Login from 'pages/Login';

const isAuthenticated = () => {
    let token = localStorage.getItem('authToken');
    console.log(token !== null)
    return token !== null;
};

function App() {
  return (
    <AppProvider>
      <Router>
          <div className="app" >
            <Routes>
                <Route path="/" element={isAuthenticated() ?<Navigate to="/main" /> : <Navigate to="/login" />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/main" element={<Main/>} />
            </Routes>
          </div>
      </Router>
    </AppProvider>
  );
}

export default App;