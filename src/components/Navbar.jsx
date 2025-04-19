import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import logoImage from '../assets/logo.jpeg';

export default function Navbar({ isAuthenticated, onLogout }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <motion.nav 
      className="navbar"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Link to="/" className="logo-container">
        <motion.img 
          src={logoImage} 
          alt="ResumeBoost Logo" 
          className="logo-image"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        />
        <motion.div 
          className="logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          ResumeBoost
        </motion.div>
      </Link>
      <div className="nav-links">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/">Home</Link>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link to="/features">Features</Link>
        </motion.div>
        {!isAuthenticated ? (
          <>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link to="/signin">Sign In</Link>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/signup" className="signup-btn">Sign Up</Link>
            </motion.div>
          </>
        ) : (
          <div className="user-menu" onClick={() => setShowMenu(!showMenu)}>
            <motion.div 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUserCircle size={24} />
            </motion.div>
            <AnimatePresence>
              {showMenu && (
                <motion.div 
                  className="dropdown"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <motion.div 
                    whileHover={{ backgroundColor: "#e0e7ff", x: 5 }}
                    onClick={() => navigate('/history')}
                  >
                    History
                  </motion.div>
                  <motion.div 
                    whileHover={{ backgroundColor: "#e0e7ff", x: 5 }}
                    onClick={handleLogout}
                  >
                    Log Out
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}
      </div>
    </motion.nav>
  );
}