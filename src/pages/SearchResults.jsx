import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useStore from '../store';
import VideoGrid from '../components/VideoGrid';

function SearchResults() {
  const { term } = useParams();
  const { fetchVideos } = useStore();

  useEffect(() => {
    fetchVideos(term);
  }, [term, fetchVideos]);

  return (
    <div className="search-results">
      <h2>'{term}' 검색 결과</h2>
      <VideoGrid />
    </div>
  );
}

export default SearchResults;
