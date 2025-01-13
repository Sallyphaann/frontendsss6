import React, { useState } from 'react';
import './profile.css'; // Import the CSS

const Profile = () => {
  // Mock Profile Data
  const [profileData] = useState({
    name: 'SallyPhan',
    username: '@Sallyphan',
    bio: 'Software Developer | Angular Enthusiast | Dog Lover 🐱',
    avatarUrl: 'https://cdn-icons-png.flaticon.com/512/3135/3135823.png', // Placeholder image
    followersCount: 1200,
    followingCount: 300,
    tweetsCount: 560,
  });

  // Mock Tweets Data
  const [tweets] = useState([
    { id: 1, content: 'Just finished building a Twitter clone with Angular! 🚀', timestamp: '2h ago' },
    { id: 2, content: 'Learning Angular is so much fun! #Angular #WebDev', timestamp: '1d ago' },
    { id: 3, content: 'Anyone else love coding with a cup of coffee? ☕', timestamp: '3d ago' },
    { id: 4, content: 'Debugging is like being a detective in a crime movie where you are also the murderer. 🕵️‍♂️', timestamp: '4d ago' },
    { id: 5, content: 'Just discovered the magic of Angular directives. Mind = blown! 🤯', timestamp: '5d ago' },
    { id: 6, content: 'When you finally fix a bug after hours of debugging: 🎉🎉🎉', timestamp: '6d ago' },
    { id: 7, content: 'Thinking about starting a new side project. Any ideas? 💡', timestamp: '1w ago' },
    { id: 8, content: 'CSS is like a box of chocolates. You never know what you\'re gonna get. 🍫', timestamp: '1w ago' },
    { id: 9, content: 'Me: I\'ll just write one more line of code. Also me: *writes 100 more lines* 😅', timestamp: '2w ago' },
    { id: 10, content: 'When your code works on the first try: Is this real life? 🧐', timestamp: '2w ago' },
  ]);

  // Mock Followers Data
  const [followers] = useState([
    { id: 1, name: 'Alice', username: '@alice', avatarUrl: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Bob', username: '@bob', avatarUrl: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Charlie', username: '@charlie', avatarUrl: 'https://via.placeholder.com/50' },
  ]);

  // Mock Following Data
  const [following] = useState([
    { id: 1, name: 'Dave', username: '@dave', avatarUrl: 'https://via.placeholder.com/50' },
    { id: 2, name: 'Eve', username: '@eve', avatarUrl: 'https://via.placeholder.com/50' },
    { id: 3, name: 'Frank', username: '@frank', avatarUrl: 'https://via.placeholder.com/50' },
  ]);

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <img src={profileData.avatarUrl} alt="Profile Picture" className="profile-picture" />
        <h1>{profileData.name}</h1>
        <p className="username">{profileData.username}</p>
        <p className="bio">{profileData.bio}</p>
        <div className="stats">
          <span><strong>{profileData.tweetsCount}</strong> Tweets</span>
          <span><strong>{profileData.followersCount}</strong> Followers</span>
          <span><strong>{profileData.followingCount}</strong> Following</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content">
        {/* Tweets Section (Left) */}
        <div className="tweets-section">
          <h2>Tweets</h2>
          {tweets.map((tweet) => (
            <div key={tweet.id} className="tweet">
              <p>{tweet.content}</p>
              <small>{tweet.timestamp}</small>
            </div>
          ))}
        </div>

        {/* Followers and Following Section (Right) */}
        <div className="sidebar">
          {/* Followers Section */}
          <div className="followers-section">
            <h2>Followers</h2>
            {followers.map((follower) => (
              <div key={follower.id} className="follower">
                <img src={follower.avatarUrl} alt="Follower Avatar" className="follower-avatar" />
                <div className="follower-info">
                  <p>{follower.name}</p>
                  <small>{follower.username}</small>
                </div>
              </div>
            ))}
          </div>

          {/* Following Section */}
          <div className="following-section">
            <h2>Following</h2>
            {following.map((user) => (
              <div key={user.id} className="follower">
                <img src={user.avatarUrl} alt="Following Avatar" className="follower-avatar" />
                <div className="follower-info">
                  <p>{user.name}</p>
                  <small>{user.username}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;