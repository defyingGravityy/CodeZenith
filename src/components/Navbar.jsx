import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

export default function Navbar({ isAuthenticated, onLogout }) {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <nav className="navbar">
      <div className="logo">ResumeBoost</div>
      <div className="nav-links">
        <Link to="/features">Features</Link>
        {!isAuthenticated ? (
          <>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup" className="signup-btn">Sign Up</Link>
          </>
        ) : (
          <div className="user-menu" onClick={() => setShowMenu(!showMenu)}>
            <FaUserCircle size={24} />
            {showMenu && (
              <div className="dropdown">
                <div onClick={() => navigate('/history')}>History</div>
                <div onClick={handleLogout}>Log Out</div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}
