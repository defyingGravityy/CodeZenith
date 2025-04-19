import React from 'react';
import './Home.css'; // Import any styles needed

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to My Vite App!</h1>
      <p>This is the home page. Here you can find the latest updates and features.</p>

      <section className="features">
        <h2>Features</h2>
        <ul>
          <li>Feature 1: Description</li>
          <li>Feature 2: Description</li>
          <li>Feature 3: Description</li>
        </ul>
      </section>

      <section className="updates">
        <h2>Latest Updates</h2>
        <p>Stay tuned for the latest news and updates regarding our app!</p>
      </section>
    </div>
  );
};

export default Home;