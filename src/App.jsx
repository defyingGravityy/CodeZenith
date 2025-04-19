import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">🚀 ResumePro</div>
      <div className="nav-links">
        <Link to="/features">Features</Link>
        <Link to="/signin">Sign In</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div className="home">
      <h1>Welcome to ResumePro</h1>
      <p>Your AI-powered resume and cover letter enhancer. Get noticed faster 🚀</p>
    </div>
  )
}

function Features() {
  return <h2>Please sign in to view the features.</h2>
}

function SignIn() {
  return <h2>Sign In Page (coming soon)</h2>
}

function SignUp() {
  return <h2>Sign Up Page (coming soon)</h2>
}

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  )
}
