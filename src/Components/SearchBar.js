import React,{useState } from "react";
import searchImageicon from "../images/search.png";

function SearchBar({onSearch2}) {
    const [query,setQuery] =  useState("")

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch2({query});
  };

  return (
    <form className="searchbar-div" onSubmit={handleSearch}>
      <div className="search-bar">
      <img src={searchImageicon} alt="search" className="search-icon-img" />
        <input
          type="text"
         
            onChange={(e) => setQuery(e.target.value)}
          className="search-input"
          placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..."
        />
       
      </div>
      <div className="search-button">
        <button className="search-btn">Search</button>
      </div>
    </form>
  );
}

export default SearchBar;
