import React,{useState} from 'react';
import log from "../images/Group.png";
import KeazoNBOOKS from "../images/KeazoNBOOKS.png";
import Group from "../images/Group.png";
import heart from "../images/heart.png";
import bell from "../images/notifications.png";
import search from "../images/search.png";
import pro from "../images/stone.png";
import profile from "../images/profile.png";
import SearchBar from './SearchBar';



function Navbar({onSearch  }) {
  return (
    <nav className='navbar' >
        <div className="log-div">
            <img src={log} alt="log" className="log image-nav" />
            <img src={KeazoNBOOKS} alt="log-name" className="log-name image-nav" />
        </div>
            <SearchBar onSearch2 ={onSearch}/>
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
  )
}

export default Navbar;
