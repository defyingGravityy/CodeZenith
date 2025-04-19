import React, { useState } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Features from './pages/Features';
import Dashboard from './pages/Dashboard';
import History from './pages/History';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLogin = (data) => {
    setIsAuthenticated(true);
    setUserData(data);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUserData(null);
  };

  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/signup"
          element={<SignUp onSignUp={handleLogin} />}
        />
        <Route
          path="/signin"
          element={<SignIn onSignIn={handleLogin} />}
        />
        <Route
          path="/features"
          element={
            isAuthenticated ? <Dashboard /> : <Features />
          }
        />
        <Route
          path="/history"
          element={isAuthenticated ? <History /> : <Navigate to="/signin" />}
        />
      </Routes>
    </>
  );
}

export default App;
