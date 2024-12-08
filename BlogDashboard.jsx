import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // call typicode API
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Blog Posts</h2>
      <ul style={styles.list}>
        {items.map((item) => (
          <li key={item.id} style={styles.listItem}>
            <span style={styles.id}>{item.id}</span> - {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '600px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    textAlign: 'center',
    color: '#2C3E50',
    marginBottom: '20px',
    fontSize: '24px',
  },
  list: {
    listStyleType: 'none',
    padding: '0',
  },
  listItem: {
    padding: '10px',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e0e0e0',
    marginBottom: '10px',
    borderRadius: '4px',
    fontSize: '16px',
  },
  id: {
    fontWeight: 'bold',
    color: '#3498DB',
  },
};

export default Posts;
