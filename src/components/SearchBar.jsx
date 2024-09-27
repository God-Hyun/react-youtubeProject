import React from "react";
import { useNavigate } from "react-router-dom";  // useHistory 대신 useNavigate 사용
import useStore from "../store";
import './SearchBar.css';
import '../App.css';

function SearchBar() {
  const navigate = useNavigate();  // useHistory 대신 useNavigate 사용
  const { searchTerm, setSearchTerm, fetchVideos } = useStore();

  const onSubmit = (e) => {
    e.preventDefault();
    fetchVideos(searchTerm);
    navigate(`/search/${searchTerm}`);  // history.push 대신 navigate 사용
  };

  return (
    <form onSubmit={onSubmit} className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="검색..."
      />
      <button type="submit">검색</button>
    </form>
  );
}

export default SearchBar;
