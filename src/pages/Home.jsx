import React from 'react';
import { Link } from 'react-router-dom';
import { FaFileAlt, FaSearch, FaFileSignature } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div>
      <motion.section 
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Land Your Dream Job with <span className="highlight">ResumeBoost</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Our AI-powered tools enhance your resume and generate tailored cover letters to help you stand out in the job market.
        </motion.p>
        <motion.div 
          className="buttons"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/signup" className="btn primary">Get Started Free →</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link to="/features" className="btn secondary">Learn More</Link>
          </motion.div>
        </motion.div>
      </motion.section>
      
      <motion.section 
        style={{ padding: '5rem 2rem', background: 'white', textAlign: 'center' }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          style={{ marginBottom: '3rem' }}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          How ResumeBoost Works
        </motion.h2>
        
        <motion.div 
          style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '2rem', 
            flexWrap: 'wrap', 
            maxWidth: '1200px', 
            margin: '0 auto' 
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div 
            style={{ 
              flex: '1 1 300px', 
              padding: '2rem', 
              background: '#f8fafc', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' 
            }}
          >
            <FaFileAlt size={48} color="#3b82f6" style={{ marginBottom: '1rem' }} />
            <h3>Upload Resume</h3>
            <p>Upload your existing resume to our platform for analysis</p>
          </motion.div>
          
          <motion.div 
            style={{ 
              flex: '1 1 300px', 
              padding: '2rem', 
              background: '#f8fafc', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' 
            }}
          >
            <FaSearch size={48} color="#3b82f6" style={{ marginBottom: '1rem' }} />
            <h3>AI Analysis</h3>
            <p>Our AI evaluates your resume against ATS criteria and industry standards</p>
          </motion.div>
          
          <motion.div 
            style={{ 
              flex: '1 1 300px', 
              padding: '2rem', 
              background: '#f8fafc', 
              borderRadius: '12px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              transition: 'transform 0.3s ease'
            }}
            variants={itemVariants}
            whileHover={{ 
              y: -10, 
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)' 
            }}
          >
            <FaFileSignature size={48} color="#3b82f6" style={{ marginBottom: '1rem' }} />
            <h3>Get Results</h3>
            <p>Receive personalized recommendations and auto-generated cover letters</p>
          </motion.div>
        </motion.div>
      </motion.section>
    </div>
  );
}