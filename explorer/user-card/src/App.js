import React, { useState } from 'react';
import './App.css';

function App() {
  const [followers, setFollowers] = useState(66868);
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setFollowers(prev => isFollowing ? prev - 1 : prev + 1);
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="container">
      <h2>Users Display</h2>
      <div className="card">
        <div className="circle">
          <img src="https://ichef.bbci.co.uk/news/480/cpsprodpb/4b33/live/12edab40-71c0-11ef-a237-49738a978907.jpg.webp" alt="Profile of ronaldo" />
        </div>
        <div className="info">
          <h3>RONALDO</h3>
          <p>4018 Following</p>
          <div className="stats">
            <div>
              <strong>Posts</strong><br />
              1841
            </div>
            <div>
              <strong>Followers</strong><br />
              {followers}
            </div>
          </div>
          <button 
            onClick={toggleFollow}
            aria-pressed={isFollowing}
            aria-label={isFollowing ? "Unfollow Chrisse" : "Follow Chrisse"}
          >
            {isFollowing ? 'Unfollow' : 'Follow'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
