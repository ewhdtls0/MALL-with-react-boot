import React from 'react';
const SearchBoxOptions = {
    float: 'left',
    display: 'flex',
    width: '87%',
    height: '40px',
    borderRadius: '25px',
    border: 'none',
    marginLeft: '8px',
    marginRight: '0px',
    outline: 'none',
}


const SearchBox = (props) => {
    return(
        <input style={SearchBoxOptions} className="searchBox" type='search' className='search' placeholder={props.placeholder}/>
    )
}

export default SearchBox;