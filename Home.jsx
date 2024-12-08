import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setBlogs(response.data.slice(0, 10)); // Fetch only the first 10 blogs for simplicity
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Blog Dashboard</h1>
      <div style={styles.cardContainer}>
        {blogs.map((blog) => (
          <div key={blog.id} style={styles.card}>
            <h3 style={styles.cardTitle}>{blog.title}</h3>
            <p style={styles.cardId}>ID: {blog.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '25px',
    backgroundColor: '#ecf0f1',
    minHeight: '100vh',
  },
  heading: {
    textAlign: 'center',
    color: '#2c3e50',
    marginBottom: '30px',
    fontSize: '28px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '25px',
    justifyContent: 'center',
  },
  card: {
    border: '1px solid #dcdcdc',
    borderRadius: '8px',
    padding: '15px',
    width: '220px',
    backgroundColor: '#ffffff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  cardTitle: {
    fontSize: '18px',
    color: '#34495e',
  },
  cardId: {
    color: '#7f8c8d',
    fontSize: '14px',
  },
};

export default Home;
