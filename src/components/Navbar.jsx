import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/react.svg';

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('user'));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload(); // refresh navbar
  };

  return (
    <nav className="flex justify-between items-center bg-white px-6 py-4 shadow">
      <div className="flex items-center gap-2">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-gray-800">ResumeAI</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/features" className="hover:text-blue-600 font-medium">Features</Link>
        {!isAuthenticated ? (
          <>
            <Link to="/signin" className="hover:text-blue-600 font-medium">Sign In</Link>
            <Link to="/signup" className="hover:text-blue-600 font-medium">Sign Up</Link>
          </>
        ) : (
          <div className="relative group">
            <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold cursor-pointer">U</div>
            <div className="absolute hidden group-hover:block bg-white shadow-md right-0 mt-2 rounded w-32">
              <button onClick={() => navigate('/history')} className="block w-full text-left px-4 py-2 hover:bg-gray-100">History</button>
              <button onClick={handleLogout} className="block w-full text-left px-4 py-2 hover:bg-gray-100">Log out</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;