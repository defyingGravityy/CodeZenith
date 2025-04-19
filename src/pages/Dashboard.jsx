import { useState } from 'react';
import Sidebar from '../components/Sidebar';

export default function Dashboard() {
  const [section, setSection] = useState('upload');

  return (
    <div className="dashboard">
      <Sidebar setSection={setSection} />
      <div className="content">
        {section === 'upload' && <div>Upload Resume (file input)</div>}
        {section === 'ats' && <div>ATS Checker coming soon...</div>}
        {section === 'cover' && <div>Cover Letter Generator coming soon...</div>}
        {section === 'path' && <div>My Path visualization coming soon...</div>}
      </div>
    </div>
  );
}
