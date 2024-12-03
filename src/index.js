import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Import CSS for styling
import App from './App';  // Import the App component

// Find the root DOM element
const root = ReactDOM.createRoot(document.getElementById('root')); 

// Render the React application inside the root element
root.render(
  <React.StrictMode>
    <App />  {/* Your main App component */}
  </React.StrictMode>
);
