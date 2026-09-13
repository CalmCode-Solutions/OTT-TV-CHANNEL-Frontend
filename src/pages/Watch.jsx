import React from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import VideoPlayer from "../components/common/VideoPlayer";

export default function Watch() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();

 
  const streamUrl = location.state?.videoSrc || "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4";

  return (
    <VideoPlayer 
      videoSrc={streamUrl} 
      onBack={() => navigate(-1)} 
    />
  );
}