import './styles/app.css';
import React,  { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from 'context/AppContext';
import Main from 'pages/Main';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import { getGsdApiToken } from 'utils/storage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    getGsdApiToken() !== null
  );
  return (
    <AppProvider>
      <Router>
          <div className="app">
            <Routes>
                <Route path="/" element={<Navigate to="/main" />} />
                <Route path="/login" element={isLoggedIn ? <Navigate to="/main" /> : <Login setIsLoggedIn = {setIsLoggedIn} />} />
                <Route path="/main" element={isLoggedIn ? <Main setIsLoggedIn = {setIsLoggedIn}/> : <Navigate to="/login" />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
      </Router>
    </AppProvider>
  );
}

export default App;