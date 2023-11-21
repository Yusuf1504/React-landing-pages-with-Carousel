import React from 'react';

const App = () => {
  const backgroundImageStyle = {
    backgroundImage: `url('https://images.unsplash.com/photo-1505142468610-359e7d316be0?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTI2fHx8ZW58MHx8fHx8')`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    color: '#fff', 
  };

  return (
    <div style={backgroundImageStyle}>
      <h1>Our Packages</h1>
      <p>Adventure is a journey into the unknown, a quest to explore the uncharted territories of our world and the human spirit. It's about pushing boundaries, embracing uncertainty, and seeking the thrill of the unexpected. Whether it's embarking on a daring expedition, conquering the highest peaks, or simply stepping out of your comfort zone, adventure invites us to discover, learn, and grow.
      </p>
      <button className='btn btn-primary'>To Find Mystries</button>
    </div>
  );
};

export default App;
