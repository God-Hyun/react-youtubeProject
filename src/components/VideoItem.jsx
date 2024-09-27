import React from "react";
import "../App.css";

function VideoItem({ video, onVideoSelect }) {
  return (
    <div onClick={() => onVideoSelect(video)}>
      <img
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title}
      />
      <div>
        <h4>{video.snippet.title}</h4>
      </div>
    </div>
  );
}

export default VideoItem;

// Youtube API를 사용할 때 쓰면 되는 코드
// function VideoItem({ video, onVideoSelect }) {
//   return (
//     <div className="video-item" onClick={() => onVideoSelect(video)}>
//       <img src={video.snippet.thumbnails.high.url} alt={video.snippet.title} />
//       <div>
//         <h4>{video.snippet.title}</h4>
//         <p>{video.snippet.channelTitle}</p>
//       </div>
//     </div>
//   );
// }

// export default VideoItem;
