import React, { useRef, useState } from 'react';

function VideoPlayer({ videoSrc, onBack }) {
  const videoRef = useRef(null);
  const playerContainerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

 
  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const current = videoRef.current.currentTime;
      const total = videoRef.current.duration;
      setProgress((current / total) * 100);
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      playerContainerRef.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div 
      ref={playerContainerRef} 
      style={{ position: 'relative', width: '100%', height: '100vh', backgroundColor: 'black', overflow: 'hidden' }}
    >
      {/* Back Button */}
      {onBack && (
        <button 
          onClick={onBack} 
          style={{ 
            position: 'absolute', 
            top: 20, 
            left: 20, 
            zIndex: 10, 
            backgroundColor: 'rgba(0,0,0,0.6)', 
            color: 'white', 
            border: '1px solid #444', 
            padding: '10px 18px', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          ← Back
        </button>
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoSrc || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}
        style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlay}
      />

      {/* Overlay Player Controls */}
      <div 
        style={{ 
          position: 'absolute', 
          bottom: 0, 
          left: 0, 
          width: '100%', 
          backgroundColor: 'rgba(0, 0, 0, 0.8)', 
          padding: '15px 20px', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '15px', 
          boxSizing: 'border-box' 
        }}
      >
        {/* Play/Pause */}
        <button 
          onClick={togglePlay} 
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem', minWidth: '70px' }}
        >
          {isPlaying ? 'Pause ❚❚' : 'Play ▶'}
        </button>

        {/* Timeline Slider */}
        <input 
          type="range" 
          min="0" 
          max="100" 
          value={progress || 0} 
          onChange={handleSeek} 
          style={{ flex: 1, cursor: 'pointer', accentColor: '#e50914' }}
        />

        {/* Volume */}
        <span style={{ color: 'white' }}>🔊</span>
        <input 
          type="range" 
          min="0" 
          max="1" 
          step="0.1" 
          value={volume} 
          onChange={handleVolumeChange} 
          style={{ width: '80px', cursor: 'pointer', accentColor: '#e50914' }}
        />

        {/* Fullscreen */}
        <button 
          onClick={toggleFullScreen} 
          style={{ color: 'white', background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.1rem' }}
        >
          ⛶
        </button>
      </div>
    </div>
  );
}

export default VideoPlayer;