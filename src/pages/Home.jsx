import React, { useEffect } from 'react';
import useStore from '../store';
import VideoGrid from '../components/VideoGrid';
import Sidebar from '../components/Sidebar';
import './Home.css';
import '../App.css';

function Home() {
    const { fetchVideos } = useStore();

    useEffect(() => {
        fetchVideos('');  // 빈 문자열로 변경하여 인기 동영상을 가져오도록 함
    }, [fetchVideos]);

    return (
        <div className="home">
            <Sidebar />
            <main className="home-content">
                <h2>추천 동영상</h2>
                <VideoGrid />
            </main>
        </div>
    );
}

export default Home;
