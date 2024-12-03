import React from 'react';
import './HomePage.css';  // Optional: Add custom styles for your homepage

function HomePage() {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="homepage-header bg-primary text-white text-center py-5">
        <h1>Welcome to Our Blog!</h1>
        <p className="lead">Explore the latest insights, stories, and discussions on various topics.</p>
      </header>

      {/* Blog Posts Section */}
      <div className="container mt-5">
        <div className="row">
          {/* Blog Post 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300x200" alt="Blog Post 1" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Blog Post 1: Getting Started with React</h5>
                <p className="card-text">
                  React is a powerful JavaScript library for building user interfaces. Learn how to get started with React in this post.
                </p>
                <a href="/post-1" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300x200" alt="Blog Post 2" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Blog Post 2: Web Development Trends in 2024</h5>
                <p className="card-text">
                  Stay ahead of the curve with the latest web development trends. From AI to responsive design, discover what's next.
                </p>
                <a href="/post-2" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>

          {/* Blog Post 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <img src="https://via.placeholder.com/300x200" alt="Blog Post 3" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">Blog Post 3: Building a Blog with React</h5>
                <p className="card-text">
                  Learn step by step how to build a functional blog application with React, complete with routing and state management.
                </p>
                <a href="/post-3" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-4">
          <button className="btn btn-secondary">Load More Posts</button>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer bg-dark text-white text-center py-3 mt-5">
        <p>© 2024 Blog Website - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default HomePage;
