// src/components/Gallery.js
import React, { useState } from 'react';
import axios from 'axios';
import './Gallery.css';

function Gallery() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [query, setQuery] = useState('nature'); // default first search

  const fetchImages = async (query) => {
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: { query, per_page: 12 },
          headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`
          }
        }
      );
      setImages(response.data.results);
    } catch (error) {
      console.error('Error fetching images:', error);
    }
  };

  // fetch default images on first load
  React.useEffect(() => {
    fetchImages(query);
  }, [query]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== '') {
      setQuery(searchTerm.trim());
    }
  };

  return (
    <div className="gallery-container">
      <h2>🖼️ Image Gallery</h2>
      <div className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search images..."
          className="search-input"
        />
        <button onClick={handleSearchSubmit} className="search-btn"> Search</button>
      </div>
      <div className="grid">
        {images.map((img) => (
          <div key={img.id} className="image-card">
            <img src={img.urls.small} alt={img.alt_description} />
            <a
              href={img.links.download}
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              <button className="download-btn"> Download</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
