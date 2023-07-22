import React, { useState } from "react";
import log from "../images/Group.png";
import KeazoNBOOKS from "../images/KeazoNBOOKS.png";
import Group from "../images/Group.png";
import heart from "../images/heart.png";
import bell from "../images/notifications.png";
import search from "../images/search.png";
import pro from "../images/stone.png";
import profile from "../images/profile.png";
// import SearchBar from "./SearchBar";
import searchImageicon from "../images/search.png";

function Navbar({ onSearch }) {
    const [query,setQuery] =  useState("")

    const handleSearch = (e) => {
      e.preventDefault();
      onSearch({query});
    };
  return (
    <nav className="navbar">
      <div className="log-div">
        <img src={log} alt="log" className="log image-nav" />
        <img src={KeazoNBOOKS} alt="log-name" className="log-name image-nav" />
      </div>
      {/* <SearchBar onSearch2 ={onSearch}/> */}
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
      <div className="icons-div">
        <div className="icon-div icon-div-1">
          <img src={heart} alt="book" className="book image-nav" />
        </div>
        <div className="icon-div icon-div-2">
          <img src={bell} alt="notification" className="bell image-nav" />
        </div>
        <div className="icon-div icon-div-3">
          <img src={pro} alt="pro" className="pro image-nav" />
        </div>
        <div className="icon-div icon-div-4">
          <img src={profile} alt="profile" className="profile image-nav" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
