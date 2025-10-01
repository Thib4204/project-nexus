import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Project Nexus</h1>
        <p>
          A modern, scalable platform for managing and organizing project workflows with collaborative tools.
        </p>
        <div className="features">
          <div className="feature-card">
            <h2>🚀 Fast & Efficient</h2>
            <p>Built with React for optimal performance</p>
          </div>
          <div className="feature-card">
            <h2>🔧 Easy to Customize</h2>
            <p>Flexible architecture for your needs</p>
          </div>
          <div className="feature-card">
            <h2>📱 Responsive Design</h2>
            <p>Works seamlessly on all devices</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
