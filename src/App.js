import React, { useEffect } from 'react';
import './App.css';

function App() {


  const photosHeader = async () => {
    const url = `https://api.unsplash.com/photos/random?count=7&query=apple`
    const response = await fetch(url, {
      headers: {
        'Authorization': 'Client-ID LuVG7rQySHMqdMIz2LzLBl13oKBogmG2-HZnFVVY1XE',
      },
    })
    const result = await response.json()


  }
  useEffect(() => {
    photosHeader()
  }, [])

  return (
    <div className='container' >
      hello world
    </div>
  );
}

export default App;
