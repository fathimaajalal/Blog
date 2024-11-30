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
      <h1>Blog Dashboard</h1>
      <div style={styles.cardContainer}>
        {blogs.map((blog) => (
          <div key={blog.id} style={styles.card}>
            <h3>{blog.title}</h3>
            <p>ID: {blog.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
  },
  cardContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '10px',
    width: '200px',
    backgroundColor: '#f9f9f9',
  },
};

export default Home;