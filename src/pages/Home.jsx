import React, { useEffect } from 'react';
import useStore from '../store';
import VideoList from '../components/VideoList';
import VideoDetail from '../components/VideoDetail';
import SearchBar from '../components/SearchBar';

function Home() {
    const { videos, selectedVideo, fetchVideos } = useStore();

    useEffect(() => {
        fetchVideos('React 튜토리얼');
    }, [fetchVideos]);

    return (
        <div>
            <SearchBar />
            <VideoDetail video={selectedVideo} />
            <VideoList videos={videos} />
        </div>
    );
}

export default Home;
