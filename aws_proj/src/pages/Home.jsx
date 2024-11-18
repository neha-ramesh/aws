import React from 'react';

function Home() {
  return (
    <div>
      <h2>Welcome to My Streaming App</h2>
      <p>Explore a world of entertainment at your fingertips!</p>
      <video width="800" height="500" loop autoPlay muted>
        <source
          src="https://d2jje1prixf144.cloudfront.net/2024-11-09%2022-02-48.mkv"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
