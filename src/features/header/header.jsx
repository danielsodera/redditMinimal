import React, { useState } from "react";
import './header.css'

const Header = () => {

    const [searchTerm, setSearchTerm] = useState("")

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
        console.log(searchTerm)
    }



    return (
        <div className="header-component">
        <h1>Reddit<strong>Minimal</strong></h1>
        <input name="search-bar" placeholder="search..." onChange={handleSearch} value={searchTerm}/> 
        <img className='hamburger-btn' src='../src/assets/Hamburger_icon.png' alt='sub-reddit menu button' />
        </div>
        
    )
}

export default Header;