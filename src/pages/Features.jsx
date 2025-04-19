import { useNavigate } from 'react-router-dom';

const Features = () => {
  const user = localStorage.getItem('user');
  const navigate = useNavigate();

  if (!user) {
    alert('Please sign in to access features.');
    navigate('/signin');
    return null;
  }

  return (
    <div className="flex">
      <aside className="w-64 bg-gray-100 min-h-screen p-4">
        <h2 className="font-bold mb-4">Tools</h2>
        <ul className="space-y-2">
          <li>Upload Resume</li>
          <li>ATS Checker</li>
          <li>Cover Letter Generator</li>
          <li>My Path</li>
        </ul>
      </aside>
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-4">Upload Resume</h1>
        <input type="file" className="border p-2" />
      </main>
    </div>
  );
};

export default Features;