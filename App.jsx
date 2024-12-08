import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.jsx';
import AddBlog from './components/AddBlog.jsx';

const App = () => {
  return (
    <Router>
      <div>
        <nav style={styles.navbar}>
          <Link to="/" style={styles.link}>
            Home
          </Link>
          <Link to="/add-blog" style={styles.link}>
            Add Blog
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-blog" element={<AddBlog />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: '12px 20px',
    backgroundColor: '#2C3E50',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
  link: {
    color: '#ECF0F1',
    textDecoration: 'none',
    fontSize: '20px',
    fontWeight: '600',
    transition: 'color 0.3s',
  },
  linkHover: {
    color: '#3498DB',
  },
};

export default App;
