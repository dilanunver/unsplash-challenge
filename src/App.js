import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [images, setImages] = useState([])

  const photosHeader = async () => {
    const url = `https://api.unsplash.com/photos/random?count=7&query=apple`
    const response = await fetch(url, {
      headers: {
        'Authorization': 'Client-ID LuVG7rQySHMqdMIz2LzLBl13oKBogmG2-HZnFVVY1XE',
      },
    })
    const result = await response.json()
    setImages(result)

  }
  useEffect(() => {
    photosHeader()
  }, [])

  return (
    <div className='container' >
      {images.map((image) => (
        <div key={image.id} className='images-small-container'>
          <img src={image.urls.small} alt='small' className='small-image'></img>
        </div>
      ))}
    </div>
  );
}

export default App;
