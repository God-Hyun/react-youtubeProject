import React from "react";
import useStore from '../store';
import VideoItem from "./VideoItem";

function VideoList() {
  const { videos, setSelectedVideo } = useStore();

  const renderedList = videos.map((video) => (
    <div className="video-item" key={video.id.videoId} onClick={() => setSelectedVideo(video)}>
      <VideoItem video={video} />
    </div>
  ));

  return <div className="video-list">{renderedList}</div>;
}

export default VideoList;
