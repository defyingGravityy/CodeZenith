import React from 'react';
import { FaFileUpload, FaCheckSquare, FaFileAlt, FaRoad } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Sidebar({ setSection, activeSection }) {
  const sidebarVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: {
        delay: 0.2,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  return (
    <motion.div 
      className="sidebar"
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className={activeSection === 'upload' ? 'active' : ''} 
        onClick={() => setSection('upload')}
        variants={itemVariants}
        whileHover={{ 
          x: 5, 
          backgroundColor: activeSection === 'upload' 
            ? 'rgba(59, 130, 246, 0.2)' 
            : '#f1f5f9' 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaFileUpload size={18} />
        Upload Resume
      </motion.div>
      <motion.div 
        className={activeSection === 'ats' ? 'active' : ''} 
        onClick={() => setSection('ats')}
        variants={itemVariants}
        whileHover={{ 
          x: 5, 
          backgroundColor: activeSection === 'ats' 
            ? 'rgba(59, 130, 246, 0.2)' 
            : '#f1f5f9' 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaCheckSquare size={18} />
        ATS Checker
      </motion.div>
      <motion.div 
        className={activeSection === 'cover' ? 'active' : ''} 
        onClick={() => setSection('cover')}
        variants={itemVariants}
        whileHover={{ 
          x: 5, 
          backgroundColor: activeSection === 'cover' 
            ? 'rgba(59, 130, 246, 0.2)' 
            : '#f1f5f9' 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaFileAlt size={18} />
        Cover Letter Generator
      </motion.div>
      <motion.div 
        className={activeSection === 'path' ? 'active' : ''} 
        onClick={() => setSection('path')}
        variants={itemVariants}
        whileHover={{ 
          x: 5, 
          backgroundColor: activeSection === 'path' 
            ? 'rgba(59, 130, 246, 0.2)' 
            : '#f1f5f9' 
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <FaRoad size={18} />
        My Path
      </motion.div>
    </motion.div>
  );
}