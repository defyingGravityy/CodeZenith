import React from 'react';

export default function Sidebar({ setSection }) {
  return (
    <div className="sidebar">
      <div onClick={() => setSection('upload')}>Upload Resume</div>
      <div onClick={() => setSection('ats')}>ATS Checker</div>
      <div onClick={() => setSection('cover')}>Cover Letter Generator</div>
      <div onClick={() => setSection('path')}>My Path</div>
    </div>
  );
}
