import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import { FaUpload, FaFileAlt, FaCheckCircle } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Dashboard() {
  const [section, setSection] = useState('upload');
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 }
    },
    exit: { 
      opacity: 0, 
      x: 10,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="dashboard">
      <Sidebar setSection={setSection} activeSection={section} />
      
      <AnimatePresence mode="wait">
        <motion.div 
          key={section}
          className="content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {section === 'upload' && (
            <>
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                Upload Your Resume
              </motion.h2>
              <motion.div 
                className="upload-area"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.2,
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                whileHover={{ 
                  boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
                  borderColor: "#60a5fa"
                }}
              >
                {!file ? (
                  <>
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <FaUpload size={48} color="#3b82f6" />
                    </motion.div>
                    <motion.p 
                      style={{ margin: '1rem 0' }}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Drag and drop your resume file here or click to browse
                    </motion.p>
                    <input 
                      type="file" 
                      id="resume-upload" 
                      accept=".pdf,.doc,.docx" 
                      onChange={handleFileChange}
                    />
                    <motion.label 
                      htmlFor="resume-upload"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      Browse Files
                    </motion.label>
                  </>
                ) : (
                  <>
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ 
                        type: "spring",
                        stiffness: 260,
                        damping: 20
                      }}
                    >
                      <FaCheckCircle size={48} color="#10b981" />
                    </motion.div>
                    <motion.h3 
                      style={{ margin: '1rem 0' }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {file.name}
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      File uploaded successfully!
                    </motion.p>
                    <motion.button 
                      onClick={() => setFile(null)} 
                      style={{ 
                        background: '#ef4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50px',
                        padding: '0.5rem 1rem',
                        marginTop: '1rem',
                        cursor: 'pointer'
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      Remove File
                    </motion.button>
                  </>
                )}
              </motion.div>
              {file && (
                <motion.button 
                  className="btn primary" 
                  style={{ display: 'block', margin: '0 auto' }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Analyze Resume
                </motion.button>
              )}
            </>
          )}
          {section === 'ats' && (
            <div className="feature-preview">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ATS Checker
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Analyze your resume against Applicant Tracking Systems to ensure maximum visibility.
              </motion.p>
              <motion.div 
                style={{ 
                  marginTop: '2rem', 
                  padding: '2rem', 
                  background: 'white', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p style={{ textAlign: 'center', color: '#64748b' }}>Upload your resume to use the ATS Checker feature</p>
              </motion.div>
            </div>
          )}
          {section === 'cover' && (
            <div className="feature-preview">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Cover Letter Generator
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Create personalized cover letters tailored to specific job descriptions.
              </motion.p>
              <motion.div 
                style={{ 
                  marginTop: '2rem', 
                  padding: '2rem', 
                  background: 'white', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p style={{ textAlign: 'center', color: '#64748b' }}>Upload your resume to generate custom cover letters</p>
              </motion.div>
            </div>
          )}
          {section === 'path' && (
            <div className="feature-preview">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                My Path
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                Visualize your career journey and plan your next steps.
              </motion.p>
              <motion.div 
                style={{ 
                  marginTop: '2rem', 
                  padding: '2rem', 
                  background: 'white', 
                  borderRadius: '12px',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p style={{ textAlign: 'center', color: '#64748b' }}>Coming soon - Your career path visualization</p>
              </motion.div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}