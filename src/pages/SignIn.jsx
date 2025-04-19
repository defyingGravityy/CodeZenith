import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignIn({ onSignIn }) {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignIn({ username });
    navigate('/features');
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <input type="text" placeholder="Username" required onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>
  );
}