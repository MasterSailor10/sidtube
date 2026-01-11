import React, { useState, useEffect } from 'react';
import './App.css';

const videoData = [
  {
    id: 1,
    videoUrl: "https://www.youtube.com/embed/_fWyWcZB7VA?rel=0",
    thumbnail: "https://i.ytimg.com/vi/_fWyWcZB7VA/hqdefault.jpg",
    title: "Health Anxiety - Standup Comedy | Abhishek Upmanyu (Full Special)",
    channel: "Abhishek Upmanyu",
    views: "21.3M",
    time: "3 years ago",
    likes: "420K",
    subscribers: "5.2M",
    description: "Abhishek Upmanyu's hilarious take on health anxiety and hypochondria. Watch the full stand-up comedy special that took the internet by storm!",
    avatar: "https://space4water.org/s4w/web/sites/default/files/styles/square/public/images/person/2021-09/Arjen-Haag.jpg?itok=qT3r7_8P"
  },
  {
    id: 2,
    videoUrl: "https://www.youtube.com/embed/BddP6PYo2gs?rel=0",
    thumbnail: "https://i.ytimg.com/vi/BddP6PYo2gs/hqdefault.jpg",
    title: "Kesariya | Brahmastra | Ranbir Kapoor | Alia Bhatt",
    channel: "Sony Music India",
    views: "71.3M",
    time: "1 year ago",
    likes: "1.2M",
    subscribers: "62M",
    description: "Presenting the soulful romantic track 'Kesariya' from the movie Brahmastra starring Ranbir Kapoor and Alia Bhatt. Sung by Arijit Singh.",
    avatar: "https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg"
  },
  {
    id: 3,
    videoUrl: "https://www.youtube.com/embed/qfdShSZZxlg?rel=0",
    thumbnail: "https://i.ytimg.com/vi/qfdShSZZxlg/hqdefault.jpg",
    title: "Tera Fitoor Lyrical - Genius | Utkarsh Sharma, Ishita Chauhan | Arijit Singh",
    channel: "Tips Official",
    views: "769M",
    time: "5 years ago",
    likes: "5.4M",
    subscribers: "72M",
    description: "Tera Fitoor lyrical video song from the movie Genius. A romantic melody by Arijit Singh that captured millions of hearts.",
    avatar: "https://cyber-privacy.net/wp-content/uploads/thispersondoesnotexist.com-image02-1024x1024.jpg"
  },
  {
    id: 4,
    videoUrl: "https://www.youtube.com/embed/nkwLjnragtw?rel=0",
    thumbnail: "https://i.ytimg.com/vi/nkwLjnragtw/hqdefault.jpg",
    title: "BEAUTY OF MANALI | Manali Cinematic Clips | Beautiful Places Tourism",
    channel: "Environmental Lovers",
    views: "11M",
    time: "4 years ago",
    likes: "180K",
    subscribers: "2.1M",
    description: "Experience the breathtaking beauty of Manali through stunning cinematic clips. A visual journey through one of India's most beautiful hill stations.",
    avatar: "https://www.corporatelivewire.com/images/profiles/1a556d0c7de91b5831c0a139f7470bc1bb731f50/a1-2-640x640.jpg"
  },
  {
    id: 5,
    videoUrl: "https://www.youtube.com/embed/hg3umXU_qWc?rel=0",
    thumbnail: "https://i.ytimg.com/vi/hg3umXU_qWc/hqdefault.jpg",
    title: "The Beauty of Nature: Stunning Landscapes Around the World",
    channel: "Nature's Wonders",
    views: "10.5M",
    time: "1 year ago",
    likes: "165K",
    subscribers: "3.8M",
    description: "Explore the most stunning natural landscapes from around the world. From mountains to oceans, witness nature's incredible beauty.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqoHLfa3sWfdwZgnD8dGgmJ9RLY_ZdgJHMNFr2n0necQ-WfNyZdKGOQBWVJ4yQFGnrwQ&usqp=CAU"
  },
  {
    id: 6,
    videoUrl: "https://www.youtube.com/embed/nsJGJHkJolI?rel=0",
    thumbnail: "https://i.ytimg.com/vi/nsJGJHkJolI/hqdefault.jpg",
    title: "Elephant Rifle Annihilates Ballistic Gel at 82,000FPS - The Slow Mo Guys",
    channel: "The Slow Mo Guys",
    views: "4.5M",
    time: "1 month ago",
    likes: "210K",
    subscribers: "14.5M",
    description: "Watch what happens when we shoot an elephant rifle at ballistic gel captured in super slow motion at 82,000 frames per second!",
    avatar: "https://space4water.org/s4w/web/sites/default/files/styles/square/public/images/person/2021-09/Arjen-Haag.jpg?itok=qT3r7_8P"
  },
  {
    id: 7,
    videoUrl: "https://www.youtube.com/embed/HXYZKSnszAk?rel=0",
    thumbnail: "https://i.ytimg.com/vi/HXYZKSnszAk/hqdefault.jpg",
    title: "Hyundai Verna vs Skoda Slavia | Manual Drag Race | 1.5 turbo-petrol",
    channel: "EVO India",
    views: "85K",
    time: "1 month ago",
    likes: "4.2K",
    subscribers: "890K",
    description: "An exciting drag race between Hyundai Verna and Skoda Slavia with manual transmissions. Which turbo-petrol sedan comes out on top?",
    avatar: "https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg"
  },
  {
    id: 8,
    videoUrl: "https://www.youtube.com/embed/SMKPKGW083c?rel=0",
    thumbnail: "https://i.ytimg.com/vi/SMKPKGW083c/hqdefault.jpg",
    title: "Norway Amazing - Horizon View | Tourist Places In India | Beautiful Places",
    channel: "Environmental Lovers",
    views: "4.2M",
    time: "1 year ago",
    likes: "92K",
    subscribers: "2.1M",
    description: "Discover Norway's amazing horizons and breathtaking tourist destinations. A visual treat for nature lovers and travel enthusiasts.",
    avatar: "https://cyber-privacy.net/wp-content/uploads/thispersondoesnotexist.com-image02-1024x1024.jpg"
  },
  {
    id: 9,
    videoUrl: "https://www.youtube.com/embed/mNuhKUOD_A0?rel=0",
    thumbnail: "https://i.ytimg.com/vi/mNuhKUOD_A0/hqdefault.jpg",
    title: "Deva Deva - Extended Film Version | Brahmastra | Ranbir Kapoor | Alia Bhatt",
    channel: "Sony Music India",
    views: "72M",
    time: "9 months ago",
    likes: "980K",
    subscribers: "62M",
    description: "Experience the extended film version of 'Deva Deva' from Brahmastra. A divine melody featuring Ranbir Kapoor and Alia Bhatt.",
    avatar: "https://www.corporatelivewire.com/images/profiles/1a556d0c7de91b5831c0a139f7470bc1bb731f50/a1-2-640x640.jpg"
  },
  {
    id: 10,
    videoUrl: "https://www.youtube.com/embed/es4x5R-rV9s?rel=0",
    thumbnail: "https://i.ytimg.com/vi/es4x5R-rV9s/hqdefault.jpg",
    title: "Amazon 4K - The World's Largest Rainfall | Beautiful Places Tourism",
    channel: "Environmental Lovers",
    views: "15M",
    time: "8 months ago",
    likes: "245K",
    subscribers: "2.1M",
    description: "Experience the Amazon rainforest in stunning 4K quality. Witness the world's largest rainfall and incredible biodiversity.",
    avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeqoHLfa3sWfdwZgnD8dGgmJ9RLY_ZdgJHMNFr2n0necQ-WfNyZdKGOQBWVJ4yQFGnrwQ&usqp=CAU"
  },
  {
    id: 11,
    videoUrl: "https://www.youtube.com/embed/oWKgpB2zpgw?rel=0",
    thumbnail: "https://i.ytimg.com/vi/oWKgpB2zpgw/hqdefault.jpg",
    title: "Ajay-Atul - Abhi Mujh Mein Kahi | Agneepath | Hrithik Roshan",
    channel: "Sony Music India",
    views: "101M",
    time: "6 years ago",
    likes: "820K",
    subscribers: "62M",
    description: "The emotional track 'Abhi Mujh Mein Kahi' from Agneepath featuring Hrithik Roshan. Composed by Ajay-Atul.",
    avatar: "https://space4water.org/s4w/web/sites/default/files/styles/square/public/images/person/2021-09/Arjen-Haag.jpg?itok=qT3r7_8P"
  },
  {
    id: 12,
    videoUrl: "https://www.youtube.com/embed/qnUnIYS8VG0?rel=0",
    thumbnail: "https://i.ytimg.com/vi/qnUnIYS8VG0/hqdefault.jpg",
    title: "CIA Knows The World Will End? | GetSetFly Science",
    channel: "GetSetFly Science",
    views: "8.6M",
    time: "1 month ago",
    likes: "320K",
    subscribers: "4.5M",
    description: "An intriguing exploration of conspiracy theories about the CIA and end-of-world scenarios. Science meets mystery in this fascinating video.",
    avatar: "https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg"
  }
];

function App() {
  const [isDark, setIsDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredVideos, setFilteredVideos] = useState(videoData);
  const [subscribed, setSubscribed] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [liked, setLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredVideos(videoData);
    } else {
      setFilteredVideos(
        videoData.filter(video => 
          video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          video.channel.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [searchQuery]);

  const handleVideoClick = (video) => {
    setSelectedVideo(video);
    setLiked(false);
    setShowFullDescription(false);
    window.scrollTo(0, 0);
  };

  const closeVideoPlayer = () => {
    setSelectedVideo(null);
  };

  const getSuggestedVideos = () => {
    if (!selectedVideo) return [];
    return videoData.filter(v => v.id !== selectedVideo.id);
  };

  if (selectedVideo) {
    return (
      <div className={`app ${isDark ? 'dark-theme' : 'light-theme'}`}>
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <button className="icon-button" onClick={closeVideoPlayer}>
              <i className="fas fa-arrow-left"></i>
            </button>
            <div className="logo" onClick={closeVideoPlayer}>
              <i className="fab fa-youtube"></i>
              <span className="logo-text">SidTube</span>
            </div>
          </div>

          <div className="header-center">
            <div className="search-container">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="search-button">
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>

          <div className="header-right">
            <button className="icon-button" onClick={() => setIsDark(!isDark)}>
              <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
            </button>
            <button className="icon-button">
              <i className="fas fa-bell"></i>
            </button>
            <img 
              src="https://space4water.org/s4w/web/sites/default/files/styles/square/public/images/person/2021-09/Arjen-Haag.jpg?itok=qT3r7_8P"
              alt="Profile"
              className="profile-pic"
            />
          </div>
        </header>

        {/* Video Watch Page */}
        <div className="watch-page">
          <div className="watch-container">
            {/* Video Player */}
            <div className="watch-video-player">
              <iframe
                src={selectedVideo.videoUrl + "&autoplay=1"}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="watch-video-info">
              <h1 className="watch-video-title">{selectedVideo.title}</h1>
              
              <div className="watch-video-meta">
                <div className="watch-channel-info">
                  <img src={selectedVideo.avatar} alt={selectedVideo.channel} />
                  <div className="watch-channel-details">
                    <h3>{selectedVideo.channel}</h3>
                    <p>{selectedVideo.subscribers} subscribers</p>
                  </div>
                  <button 
                    className={`watch-subscribe-button ${subscribed ? 'subscribed' : ''}`}
                    onClick={() => setSubscribed(!subscribed)}
                  >
                    {subscribed ? 'Subscribed' : 'Subscribe'}
                  </button>
                </div>

                <div className="watch-actions">
                  <button className={`watch-action-button ${liked ? 'active' : ''}`} onClick={() => setLiked(!liked)}>
                    <i className={liked ? "fas fa-thumbs-up" : "far fa-thumbs-up"}></i>
                    <span>{selectedVideo.likes}</span>
                  </button>
                  <button className="watch-action-button">
                    <i className="far fa-thumbs-down"></i>
                  </button>
                  <button className="watch-action-button">
                    <i className="fas fa-share"></i>
                    <span>Share</span>
                  </button>
                  <button className="watch-action-button">
                    <i className="fas fa-download"></i>
                    <span>Download</span>
                  </button>
                </div>
              </div>

              {/* Description */}
              <div className="watch-description">
                <div className="watch-description-header">
                  <span className="watch-views">{selectedVideo.views} views</span>
                  <span className="watch-date">{selectedVideo.time}</span>
                </div>
                <p className={showFullDescription ? 'full' : 'truncated'}>
                  {selectedVideo.description}
                </p>
                <button 
                  className="watch-show-more"
                  onClick={() => setShowFullDescription(!showFullDescription)}
                >
                  {showFullDescription ? 'Show less' : 'Show more'}
                </button>
              </div>

              {/* Comments Section */}
              <div className="watch-comments">
                <h3>1,234 Comments</h3>
                <div className="watch-comment-input">
                  <img 
                    src="https://space4water.org/s4w/web/sites/default/files/styles/square/public/images/person/2021-09/Arjen-Haag.jpg?itok=qT3r7_8P"
                    alt="Your avatar"
                  />
                  <input type="text" placeholder="Add a comment..." />
                </div>
              </div>
            </div>
          </div>

          {/* Suggested Videos */}
          <div className="watch-suggestions">
            <h3 className="suggestions-title">Suggested Videos</h3>
            {getSuggestedVideos().map(video => (
              <div 
                key={video.id} 
                className="suggestion-card"
                onClick={() => handleVideoClick(video)}
              >
                <div className="suggestion-thumbnail">
                  <img src={video.thumbnail} alt={video.title} />
                </div>
                <div className="suggestion-info">
                  <h4 className="suggestion-title">{video.title}</h4>
                  <p className="suggestion-channel">{video.channel}</p>
                  <p className="suggestion-stats">{video.views} views • {video.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Home Page
  return (
    <div className={`app ${isDark ? 'dark-theme' : 'light-theme'}`}>
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <button 
            className="icon-button"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="logo">
            <i className="fab fa-youtube"></i>
            <span className="logo-text">SidTube</span>
          </div>
        </div>

        <div className="header-center">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search"
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>

        <div className="header-right">
          <button 
            className="icon-button"
            onClick={() => setIsDark(!isDark)}
          >
            <i className={isDark ? "fas fa-sun" : "fas fa-moon"}></i>
          </button>
          <button className="icon-button">
            <i className="fas fa-bell"></i>
          </button>
          <img 
            src="https://space4water.org/s4w/web/sites/default/files/styles/square/public/images/person/2021-09/Arjen-Haag.jpg?itok=qT3r7_8P"
            alt="Profile"
            className="profile-pic"
          />
        </div>
      </header>

      {/* Main Container */}
      <div className="main-container">
        {/* Sidebar */}
        <aside className={`sidebar ${sidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
          <div className="sidebar-item active">
            <i className="fas fa-home"></i>
            <span>Home</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-video"></i>
            <span>Shorts</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-play-circle"></i>
            <span>Subscriptions</span>
          </div>

          <hr className="sidebar-divider" />

          <div className="sidebar-item">
            <i className="fas fa-book"></i>
            <span>Library</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-history"></i>
            <span>History</span>
          </div>
          <div className="sidebar-item">
            <i className="fab fa-youtube"></i>
            <span>Your Videos</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-clock"></i>
            <span>Watch Later</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-thumbs-up"></i>
            <span>Liked Videos</span>
          </div>

          <hr className="sidebar-divider" />

          <div className="sidebar-section-title">Subscriptions</div>
          <div className="sidebar-item">
            <img src="https://space4water.org/s4w/web/sites/default/files/styles/square/public/images/person/2021-09/Arjen-Haag.jpg?itok=qT3r7_8P" alt="" className="sidebar-avatar" />
            <span>Pewdiepie</span>
          </div>
          <div className="sidebar-item">
            <img src="https://techbriefly.com/wp-content/uploads/2023/02/AI-impersonation-Fake-name-generators-this-person-does-not-exist-images-and-more-1.jpg" alt="" className="sidebar-avatar" />
            <span>Raka Zone Gaming</span>
          </div>
          <div className="sidebar-item">
            <img src="https://cyber-privacy.net/wp-content/uploads/thispersondoesnotexist.com-image02-1024x1024.jpg" alt="" className="sidebar-avatar" />
            <span>OVER DRIVE</span>
          </div>

          <hr className="sidebar-divider" />

          <div className="sidebar-section-title">Explore</div>
          <div className="sidebar-item">
            <i className="fas fa-fire"></i>
            <span>Trending</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-music"></i>
            <span>Music</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-film"></i>
            <span>Movies</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-gamepad"></i>
            <span>Gaming</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-newspaper"></i>
            <span>News</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-trophy"></i>
            <span>Sports</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-lightbulb"></i>
            <span>Learning</span>
          </div>

          <hr className="sidebar-divider" />

          <div className="sidebar-item">
            <i className="fas fa-cog"></i>
            <span>Settings</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-flag"></i>
            <span>Report History</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-question-circle"></i>
            <span>Help</span>
          </div>
          <div className="sidebar-item">
            <i className="fas fa-comment"></i>
            <span>Send Feedback</span>
          </div>
        </aside>

        {/* Main Content */}
        <main className={`content ${sidebarOpen ? 'content-with-sidebar' : 'content-full'}`}>
          {/* Banner */}
          <div className="banner">
            <div className="banner-content">
              <div className="banner-header">
                <i className="fab fa-youtube banner-icon"></i>
                <div className="banner-time">
                  <h2>Welcome to SidTube</h2>
                  <p className="time-display">{currentTime}</p>
                </div>
              </div>
              <h3>Want to Learn Web Development From Best Then Learn To</h3>
              <h3>Make Amazing Websites On SidTube Channel</h3>
              <h3>Hurry Up!! And Subscribe</h3>
              <button 
                className={`subscribe-button ${subscribed ? 'subscribed' : ''}`}
                onClick={() => setSubscribed(!subscribed)}
              >
                {subscribed ? 'Subscribed' : 'Subscribe Now'}
              </button>
            </div>
          </div>

          {/* Videos Grid */}
          <div className="videos-section">
            <h2 className="section-title">
              {searchQuery ? `Search results for "${searchQuery}"` : 'Recommended'}
            </h2>
            
            {filteredVideos.length > 0 ? (
              <div className="videos-grid">
                {filteredVideos.map(video => (
                  <div key={video.id} className="video-card" onClick={() => handleVideoClick(video)}>
                    <div className="video-thumbnail">
                      <img src={video.thumbnail} alt={video.title} />
                      <div className="play-overlay">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                    <div className="video-info">
                      <img src={video.avatar} alt={video.channel} className="channel-avatar" />
                      <div className="video-details">
                        <h3 className="video-title">{video.title}</h3>
                        <p className="video-channel">{video.channel}</p>
                        <p className="video-stats">{video.views} views • {video.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-results">
                <p>No videos found</p>
                <p className="no-results-subtitle">Try different keywords</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;