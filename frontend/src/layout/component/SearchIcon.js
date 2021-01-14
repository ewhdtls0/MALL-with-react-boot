import { Button } from '@material-ui/core';
import React from 'react';
import searchIcon from '../img/searchIcon.png';
import '../css/Header.css';
const searchIconOptions = {
    display: 'flex',
    borderRadius: '25px', 
    border: 'none',
    outline: 'none',
}


const SearchIcon = () => {
    return(
        <button type="submit" className="search_Icon" style={searchIconOptions}><img src={searchIcon} width='120%' height='38px'></img></button>
    )
}

export default SearchIcon;