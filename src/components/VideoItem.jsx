import React from 'react';
import '../App.css';

function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)}>
      <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
      <div>
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  );
}

export default VideoItem;
