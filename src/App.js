import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BlogPost from './components/BlogPost';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route
          path="*"
          element={
            <div style={{ padding: '2rem', textAlign: 'center' }}>
              <h2>Welcome to Gigaversity</h2>
              <p>Choosing any blog from the navbar</p>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
