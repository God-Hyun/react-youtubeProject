import React from 'react';

function VideoDetail({ video }) {
  if (!video) return <div>Loading...</div>;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail">
      <iframe src={videoSrc} title="Video player" width="100%" height="400px" />
      <h2>{video.snippet.title}</h2>
      <p>{video.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;
