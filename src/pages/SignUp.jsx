import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const [form, setForm] = useState({ name: '', username: '', password: '', job: '' });
  const navigate = useNavigate();

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(form));
    alert('Sign up successful!');
    navigate('/dashboard');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
      {['name', 'username', 'password'].map((field) => (
        <input
          key={field}
          name={field}
          type={field === 'password' ? 'password' : 'text'}
          placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          required
          className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded"
        />
      ))}
      <select name="job" onChange={handleChange} required className="block w-full mb-4 px-4 py-2 border border-gray-300 rounded">
        <option value="">Select Job Role</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Data Scientist">Data Scientist</option>
        <option value="DevOps Engineer">DevOps Engineer</option>
      </select>
      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Submit</button>
    </form>
  );
};

export default SignUp;