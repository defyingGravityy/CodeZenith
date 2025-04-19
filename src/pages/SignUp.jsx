import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp({ onSignUp }) {
  const [form, setForm] = useState({ name: '', username: '', password: '', job: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Sign up successful!');
    onSignUp(form);
    navigate('/features');
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Sign Up</h2>
      <input type="text" placeholder="Name" required onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input type="text" placeholder="Username" required onChange={(e) => setForm({ ...form, username: e.target.value })} />
      <input type="password" placeholder="Password" required onChange={(e) => setForm({ ...form, password: e.target.value })} />
      <select required onChange={(e) => setForm({ ...form, job: e.target.value })}>
        <option value="">Select Job Role</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Data Scientist">Data Scientist</option>
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}
