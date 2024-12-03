import React from 'react';
import './AboutUs.css';  // Import the CSS file

function AboutPage() {
  return (
    <div className="about-us-section">
      <div className="container mt-5">
        <h1>About Us</h1>
        <p>
          Welcome to our blog website! This platform is designed to allow users to read and share their thoughts through blog posts. Whether you are a writer, reader, or someone who just enjoys reading content, our website offers a space for everyone.
        </p>
        <h2>Our Team</h2>
        <ul>
          <li>John Doe - Founder & CEO</li>
          <li>Jane Smith - Lead Developer</li>
          <li>Mark Johnson - Designer</li>
          <li>Mary Lee - Content Strategist</li>
        </ul>
      </div>
    </div>
  );
}

export default AboutPage;
