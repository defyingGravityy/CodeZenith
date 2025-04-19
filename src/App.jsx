import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Features from './pages/Features';
import Dashboard from './pages/Dashboard';
import History from './pages/History';
import PageTransition from './components/PageTransition';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);
  const location = useLocation();

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
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            } 
          />
          <Route
            path="/signup"
            element={
              <PageTransition>
                <SignUp onSignUp={handleLogin} />
              </PageTransition>
            }
          />
          <Route
            path="/signin"
            element={
              <PageTransition>
                <SignIn onSignIn={handleLogin} />
              </PageTransition>
            }
          />
          <Route
            path="/features"
            element={
              <PageTransition>
                {isAuthenticated ? <Dashboard /> : <Features />}
              </PageTransition>
            }
          />
          <Route
            path="/history"
            element={
              isAuthenticated ? (
                <PageTransition>
                  <History />
                </PageTransition>
              ) : (
                <Navigate to="/signin" />
              )
            }
          />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;