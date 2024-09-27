import React from "react";
import useStore from '../store';
import VideoItem from "./VideoItem";
import './VideoGrid.css';
import '../App.css';

function VideoGrid() {
  const { videos, setSelectedVideo } = useStore();

  return (
    <div className="video-grid">
      {videos.map((video) => (
        <VideoItem 
          key={video.id.videoId} 
          video={video} 
          onVideoSelect={() => setSelectedVideo(video)}
        />
      ))}
    </div>
  );
}

export default VideoGrid;
