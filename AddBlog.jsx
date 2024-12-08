import React, { useState } from 'react';

const AddBlog = () => {
  const [formData, setFormData] = useState({
    blogName: '',
    description: '',
    authorName: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New Blog Data:', formData);
    alert('Blog added successfully!');
    setFormData({ blogName: '', description: '', authorName: '' });
  };

  return (
    <div style={styles.container}>
      <h1>Add Blog</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label>Blog Name:</label>
          <input
            type="text"
            name="blogName"
            value={formData.blogName}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Description:</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Author Name:</label>
          <input
            type="text"
            name="authorName"
            value={formData.authorName}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: '30px',
    maxWidth: '500px',
    margin: '50px auto',
    backgroundColor: '#f2f2f2',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    padding: '12px',
    backgroundColor: '#3CB371',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textTransform: 'uppercase',
  },
};

export default AddBlog;
